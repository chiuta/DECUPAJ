# DECUPAJ

[English](README.md) · [Română](README.ro.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Español](README.es.md) · [Português](README.pt.md) · **Deutsch** · [Magyar](README.hu.md)

Vertikale Reels aus einem Podcast (Audio oder Video), direkt im Browser. Eine einzige HTML-Datei, ohne Konto, ohne Server, ohne Wasserzeichen. Deine Dateien verlassen das Gerät nie.

**[App öffnen →](https://decupaj.chiuta.ro/)**

_Version: 12 · Zuletzt aktualisiert: 2026-11-03_

## Funktionen

- Wähle einen Ausschnitt per Wellenform, Minuten oder Tastatur; Momentvorschläge nach Stimmenergie oder per Transkription der ganzen Folge.
- Lokale Transkription mit Whisper, Untertitel Wort für Wort, 5 Untertitelstile, Logo und Endkarte.
- Formate 9:16, 4:5, 1:1 und 16:9; MP4-Export (H.264 + AAC) über WebCodecs, mit Warteschlange und ZIP.
- Oberfläche in 8 Sprachen; funktioniert offline als PWA.

## Nutzung

Seite online öffnen oder `index.html` herunterladen und in einem aktuellen Browser öffnen. Keine Installation, kein Build.

## Grenzen

- Export bis 10 Minuten am Computer und 3 am Handy, damit der Speicher nicht überläuft.
- Das Whisper-Modell (40–250 MB) wird einmal aus dem Internet geladen; die Player von YouTube/Vimeo/Dailymotion laden aus dem Internet, Videos werden von dort nie heruntergeladen.

## Datenschutz

Alles bleibt in deinem Browser (localStorage / IndexedDB); kein Konto, kein Tracking. Netzwerk nur auf Anfrage: Link-Player und Download des Whisper-Modells.

## Unterstützung

Wenn es dir nützt, kannst du mir [einen Kaffee spendieren](https://buymeacoffee.com/echo.of.the.strings).

## Lizenz

MIT © Alexandru-Ionuț Chiuță (Alexio)
