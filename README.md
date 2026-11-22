# DECUPAJ

**English** · [Română](README.ro.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Español](README.es.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · [Magyar](README.hu.md)

Vertical reels from a podcast (audio or video), right in the browser. One HTML file, no account, no server, no watermark. Your files never leave the device.

**[Open the app →](https://decupaj.chiuta.ro/)**

_Version: 15.1.3 · Last updated: 2026-11-22_

## Features

- Pick an excerpt with the waveform, minutes or keyboard; moment suggestions by voice energy, or by transcription of the whole episode.
- Local transcription with Whisper, word-level subtitles, 5 subtitle styles, logo and end card.
- Formats 9:16, 4:5, 1:1 and 16:9; MP4 export (H.264 + AAC) through WebCodecs, with a queue and ZIP download.
- Interface in 8 languages; works offline as a PWA.

## Usage

Open the page online, or download `index.html` and open it in a recent browser. No installation, no build.

## Limits

- Export up to 10 minutes on a computer and 3 on a phone, so memory does not fill up.
- The Whisper model (40–250 MB) is downloaded once from the internet; YouTube/Vimeo/Dailymotion players load from the internet, and videos are never downloaded from them.

## Privacy

Everything stays in your browser (localStorage / IndexedDB); no account, no tracking. Network only on request: link players and the Whisper model download.

## Support

If this is useful, you can [buy me a coffee](https://buymeacoffee.com/echo.of.the.strings).

## License

MIT © Alexandru-Ionuț Chiuță (Alexio)
