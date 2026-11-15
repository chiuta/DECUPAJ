# DECUPAJ

[English](README.md) · [Română](README.ro.md) · **Français** · [Italiano](README.it.md) · [Español](README.es.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · [Magyar](README.hu.md)

Des reels verticaux à partir d’un podcast (audio ou vidéo), directement dans le navigateur. Un seul fichier HTML, sans compte, sans serveur, sans filigrane. Vos fichiers ne quittent jamais l’appareil.

**[Ouvrir l’application →](https://decupaj.chiuta.ro/)**

_Version : 13 · Dernière mise à jour : 2026-11-15_

## Fonctionnalités

- Choisissez un extrait avec l’onde sonore, les minutes ou le clavier ; suggestions de moments selon l’énergie de la voix ou la transcription de tout l’épisode.
- Transcription locale avec Whisper, sous-titres mot à mot, 5 styles de sous-titres, logo et carte finale.
- Formats 9:16, 4:5, 1:1 et 16:9 ; export MP4 (H.264 + AAC) via WebCodecs, avec file d’attente et ZIP.
- Interface en 8 langues ; fonctionne hors ligne en PWA.

## Utilisation

Ouvrez la page en ligne, ou téléchargez `index.html` et ouvrez-le dans un navigateur récent. Aucune installation, aucun build.

## Limites

- Export jusqu’à 10 minutes sur ordinateur et 3 sur téléphone, pour ne pas saturer la mémoire.
- Le modèle Whisper (40–250 Mo) se télécharge une fois depuis internet ; les lecteurs YouTube/Vimeo/Dailymotion se chargent depuis internet et aucune vidéo n’en est téléchargée.

## Confidentialité

Tout reste dans votre navigateur (localStorage / IndexedDB) ; pas de compte, pas de suivi. Réseau seulement à la demande : lecteurs de liens et téléchargement du modèle Whisper.

## Soutien

Si cela vous est utile, vous pouvez [m’offrir un café](https://buymeacoffee.com/echo.of.the.strings).

## Licence

MIT © Alexandru-Ionuț Chiuță (Alexio)
