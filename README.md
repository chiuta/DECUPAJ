# DECUPAJ

Reels verticale din podcast (audio sau video), direct în browser. Un singur fișier HTML, fără cont, fără server, fără watermark. Fișierele tale nu pleacă din dispozitiv.

Făcut pentru ASFAN. Versiunea 12.

**Aplicația live:** https://decupaj.chiuta.ro/

## Ce face

- Alegi un fragment din podcast, cu unda sonoră, cu minutele sau cu tastatura.
- **Sugestii de momente:** după energia vocii și pauze, sau, cu „Analizează tot episodul”, după transcriere (cuvinte, întrebări, cifre, cuvinte-cheie).
- **Transcriere locală cu Whisper** (română și încă 7 limbi), cu subtitrări pe cuvânt și editare manuală. WebGPU când browserul îl are.
- **Subtitrări stilizate:** 5 stiluri, 3 poziții, 4 mărimi.
- **Podcast video:** 4 aspecte (9:16, 4:5, 1:1, 16:9), încadrare orizontală și zoom.
- **Logo, cadru final, margini sigure** pentru Instagram/TikTok (doar în previzualizare).
- **Coadă de export:** mai multe fragmente, descărcate pe rând sau într-un ZIP.
- **Export MP4** (H.264 + AAC) prin WebCodecs, cu înregistrare în timp real ca alternativă. La MP4/MOV/M4A cu AAC sunetul se copiază direct, fără recodare. Opțional: normalizare de volum, fade, filtru trece-sus.
- Interfață în 7 limbi (română, engleză, franceză, germană, spaniolă, italiană, maghiară), aleasă automat după browser. Funcționează offline ca PWA.

## Din link (YouTube, Vimeo, Dailymotion)

Aplicația nu descarcă videoclipuri de pe aceste site-uri: browserul nu permite extragerea imaginii sau sunetului din playerele lor, iar condițiile lor de utilizare nu o permit. Poți alege momentele în playerul oficial și apoi încarci fișierul tău video, iar selecția se aplică singură.

## Instalare

- **Simplu:** deschide `index.html` cu dublu clic.
- **PWA (instalare pe ecranul principal, offline):** pune fișierele pe un site HTTPS. Aici: Pages, domeniul decupaj.chiuta.ro.
- **iPhone/iPad:** Safari nu rulează corect pagini deschise din aplicația Fișiere. Folosește varianta HTTPS și „Adaugă pe ecranul principal”.

## Limite

- Export maxim 10 minute pe computer și 3 pe telefon, ca să nu se umple memoria.
- Fișierele care nu sunt MP4/M4A/MOV cu AAC se decodează întregi în memorie.
- Modelul Whisper (40–250 MB) se descarcă o singură dată de pe internet; restul aplicației rămâne offline.

## Dependențe externe și verificare

Încărcate de pe jsDelivr, doar când folosești funcția: `@huggingface/transformers@3.7.6` (Whisper). Aplicația verifică amprenta SHA-384 înainte de import; la nepotrivire te întreabă. Verificarea la Whisper se face înainte de import, deci reduce riscul, nu îl elimină.

## Stare

Testat automat: sintaxă, jsdom, export MP4 în Chromium, 5 dimensiuni de ecran, accesibilitate (axe, fără probleme). **Netestat în browser real:** WebGPU și Whisper real, Safari iOS, scorarea sugestiilor pe un podcast real. Raportează problemele cu butonul „Copiază detalii pentru suport” din pagină.

## Fișiere

`index.html` (aplicația), `sw.js` (service worker), `manifest.webmanifest`, icoane.

## Istoric

- **v12** — audit adversarial: reguli de pronunție cu cratimă dezactivau tot dicționarul (LECTOR); semnele de carte cu stocare coruptă aruncau excepție; importul unei copii ostile bloca pagina ~15 s (acum limite: 500 cărți, 5000 capitole); titlurile cărților și ale fragmentelor nu mai pot fi alterate de traducere. Interfață în 7 limbi.
- **v11** — funcții noi, PWA, verificare de integritate pentru bibliotecile externe.
