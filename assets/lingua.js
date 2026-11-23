/* Cambio lingua italiano / inglese.
   Ricorda la scelta del visitatore; la prima volta usa la lingua del browser.
   Non serve modificarlo per aggiungere un anno. */
(function () {
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
  var iniziale = parametro || leggi() ||
    ((navigator.language || "it").toLowerCase().indexOf("it") === 0 ? "it" : "en");
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
