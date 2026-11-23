# 24 novembre — Buon compleanno Filippo

Sito statico in puro HTML + CSS. Niente Node, niente programmi da installare:
si modificano i file con un editor di testo e si caricano sul server.

## Com'è fatto

| File / cartella        | A cosa serve                                                  |
|------------------------|---------------------------------------------------------------|
| `index.html`           | Home: porta automaticamente all'anno più recente              |
| `2003.html` … `2026.html` | Una pagina per ogni compleanno                             |
| `past.html`            | Archivio con tutte le schede degli anni                        |
| `modello.html`         | Modello già pronto da copiare per l'anno nuovo                 |
| `assets/stile.css`     | Grafica di tutto il sito (non serve toccarlo)                  |
| `assets/lingua.js`     | Pulsante IT / EN (non serve toccarlo)                          |
| `images/`, `img/`      | Foto e immagini                                               |

## Italiano / inglese

Ogni testo è scritto due volte, una per lingua, con l'attributo `lang`:

```html
<h2 lang="it">Quest'anno io..</h2>
<h2 lang="en">This year, me..</h2>
```

Il sito mostra solo la lingua scelta col pulsante **IT / EN** in alto (la prima
volta usa la lingua del browser). Un testo uguale nelle due lingue, come un
nome, si scrive una volta sola senza `lang`.

## Pubblicare l'anno nuovo (es. 2027) — 5 passi

1. **Foto**: metti nella cartella `images/` la foto dell'anno (es.
   `2027-phil.jpg`) e, se vuoi, l'immagine del numero (es. `60.png`).

2. **Pagina**: copia `modello.html` e rinomina la copia `2027.html`.
   Aprila e cambia:
   - l'anno e l'età (nel modello sono già `2027` e `60`);
   - i testi in italiano (`lang="it"`) e in inglese (`lang="en"`);
   - i nomi delle foto in `src="images/..."`.

   Le parti facoltative (frase dell'anno, didascalia) si cancellano se non
   servono; per più foto basta aggiungere righe `<img ...>`; per un'altra
   sezione si copia un blocco `<section class="sezione"> … </section>`.

3. **Anno precedente**: apri `2026.html` e in fondo, dentro
   `<nav class="anni-vicini">`, sostituisci la riga `<span></span>` con:

   ```html
   <a href="2027.html">2027 &rarr;</a>
   ```

4. **Archivio**: apri `past.html` e copia la prima riga `<li>…</li>` della
   lista, incollala in cima e cambia anno, età e foto:

   ```html
   <li><a href="2027.html"><img src="images/2027-phil.jpg" alt="" loading="lazy"><span class="etichetta"><span class="anno">2027</span><span class="anni">60 <span lang="it">anni</span><span lang="en">years</span></span></span></a></li>
   ```

5. **Home**: apri `index.html` e cambia `2026` in `2027` nelle due righe
   segnate con `← ANNO`.

Poi carica sul server i file nuovi o modificati: `2027.html`, `2026.html`,
`past.html`, `index.html` e le foto nuove.

## Provare il sito sul computer

Basta aprire `index.html` con il browser (doppio clic).
