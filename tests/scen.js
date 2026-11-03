// corp: rulează în pagină; returnează {probe,R,errs,exportB64}
const done=window.__done;
// dialogul propriu de confirmare nu are cine să-l apese în teste: îl anulăm (ca vechiul confirm() închis automat)
setInterval(()=>{const d=document.querySelector('[role=alertdialog]');if(d&&!window.__keepDlg){const b=d.querySelector('button');if(b)b.click()}},200);
(async()=>{
 const COMMON=await (await fetch('/common.js')).text();eval(COMMON.replace(/\bconst /g,'var '));
 try{LANG='ro';applyLang()}catch(e){}
 const probe={ua:navigator.userAgent};
 try{probe.venc=(await VideoEncoder.isConfigSupported({codec:'avc1.64002A',width:1080,height:1920,bitrate:4e6,framerate:30})).supported}catch(e){probe.venc='ERR '+e.message}
 try{probe.venc720=(await VideoEncoder.isConfigSupported({codec:'avc1.42001f',width:720,height:1280,bitrate:3e6,framerate:30})).supported}catch(e){probe.venc720='ERR '+e.message}
 try{probe.aenc=(await AudioEncoder.isConfigSupported({codec:'mp4a.40.2',sampleRate:44100,numberOfChannels:2,bitrate:128000})).supported}catch(e){probe.aenc='ERR '+e.message}
 try{probe.mr=['video/mp4;codecs=avc1,mp4a.40.2','video/mp4','video/webm;codecs=vp9,opus','video/webm'].filter(t=>MediaRecorder.isTypeSupported(t))}catch(e){probe.mr='ERR '+e.message}
 try{new OfflineAudioContext(1,8000,8000);probe.offline8k='ok'}catch(e){probe.offline8k='ERR '+e.message}
 try{const a=new (window.AudioContext||window.webkitAudioContext)({sampleRate:8000});probe.ac8k=a.sampleRate;a.close()}catch(e){probe.ac8k='ERR '+e.message}
 probe.capture=typeof HTMLCanvasElement.prototype.captureStream;probe.secure=isSecureContext;
 // 1. încărcare MP4 real
 await up('file','/assets/nz.mp4','nz.mp4','video/mp4');
 const loaded=await waitFor(()=>/durată/.test($('info').textContent)&&dur>10,30000);
 T('încărcare MP4 (durată detectată)',loaded,{info:$('info').textContent.slice(0,100),dur});
 T('podcast video detectat',typeof HV!=='undefined'&&HV===true,{HV});
 T('undă sonoră calculată',await waitFor(()=>peaks&&peaks.length>100&&ENV,20000),{peaks:peaks&&peaks.length});
 // 2. sugestii
 $('sugbtn').click();const sug=await waitFor(()=>$('sug').children.length>0,5000);T('sugestii de momente apar',sug,{n:$('sug').children.length});
 if(sug){$('sug').children[0].click();T('clic pe sugestie setează selecția',sel[1]>sel[0],{sel})}
 // 3. subtitrări
 $('caps').value='00:00 Bună ziua\n00:01 Țăranul șapte pâini';$('caps').dispatchEvent(new Event('input',{bubbles:true}));
 for(const st of ['classic','outline','box','hl','min']){$('cstyle').value=st;try{draw(0.5)}catch(e){T('desen stil '+st,false,e.message)}}
 T('desen 5 stiluri fără excepții',!R.some(r=>/desen stil/.test(r.n)&&!r.ok));
 // 4. export MP4 real
 hookBlob();sel=[0,2];syncSel();const seen=new Set();const iv=setInterval(()=>{const t=$('status').textContent;if(t)seen.add(t.replace(/\d+(\.\d+)?%?/g,'#').slice(0,50))},150);
 const t0=Date.now();$('export').click();
 const fin=await waitFor(()=>/Gata|eșuat|Eroare|anulat/i.test($('status').textContent)&&!exporting,240000);clearInterval(iv);
 const st=$('status').textContent;T('export reel terminat',fin&&/Gata/.test(st),{ms:Date.now()-t0,status:st.slice(0,160),paths:[...seen].slice(0,6),ex:window.__exstat});
 const big=(window.__blobs||[]).filter(b=>b.size>20000).pop();let exportB64=null;
 if(big){T('blob de export produs',true,{size:big.size,type:big.type});exportB64=await b64(big)}else T('blob de export produs',false,'niciunul');
 // 5. coadă
 $('title').value='Test coadă';$('qadd').click();T('coadă: adăugare',QUEUE.length===1,{n:QUEUE.length});
 // 6. limbi
 for(const l of ['en','fr','de','es','it','hu','ro']){const s=$('langsel');s.value=l;s.dispatchEvent(new Event('change'));await sleep(50);if(document.documentElement.lang!==l)T('limbă '+l,false,document.documentElement.lang)}
 T('comutare 7 limbi',!R.some(r=>/^limbă /.test(r.n)));
 // 7. fișier ostil după toate
 const bad=new File([new Uint8Array(5000).map((_,i)=>i*7%256)],'x.mp3',{type:'audio/mpeg'});const dt=new DataTransfer();dt.items.add(bad);$('file').files=dt.files;$('file').dispatchEvent(new Event('change',{bubbles:true}));await sleep(1500);
 T('fișier invalid: mesaj, fără blocaj',/nesuportat|nu poate|durat/i.test($('info').textContent),$('info').textContent.slice(0,80));
 done({probe,R,errs:window.__errs||[],exportB64});
})().catch(e=>done({probe:{},R:[{n:'EXCEPȚIE scenariu',ok:false,d:(e&&(e.name+': '+e.message+' | '+e.stack)||String(e)).slice(0,400)}],errs:window.__errs||[]}));
