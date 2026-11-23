/* Cambio lingua italiano / inglese.
   Si parte sempre in italiano; se il visitatore sceglie EN, il sito se lo ricorda.
   Per cambiare la lingua di partenza modifica la riga LINGUA_PREDEFINITA.
   Non serve modificarlo per aggiungere un anno. */
(function () {
  var LINGUA_PREDEFINITA = "it";   // "it" oppure "en"
  var html = document.documentElement;

  function leggi() {
    try { return localStorage.getItem("lingua"); } catch (e) { return null; }
  }
  function salva(l) {
    try { localStorage.setItem("lingua", l); } catch (e) {}
  }
  function imposta(l) {
    html.setAttribute("data-lingua", l);
    html.setAttribute("lang", l);
    var bottoni = document.querySelectorAll(".lingue button");
    for (var i = 0; i < bottoni.length; i++) {
      bottoni[i].setAttribute("aria-pressed", bottoni[i].getAttribute("data-lingua") === l ? "true" : "false");
    }
    var titolo = html.getAttribute("data-titolo-" + l);
    if (titolo) document.title = titolo;
  }

  var parametro = (location.search.match(/[?&]lang=(it|en)/) || [])[1];
  var iniziale = parametro || leggi() || LINGUA_PREDEFINITA;
  imposta(iniziale);

  document.addEventListener("DOMContentLoaded", function () {
    imposta(html.getAttribute("data-lingua"));
    document.addEventListener("click", function (e) {
      var b = e.target.closest && e.target.closest(".lingue button");
      if (!b) return;
      var l = b.getAttribute("data-lingua");
      salva(l);
      imposta(l);
    });
  });
})();
