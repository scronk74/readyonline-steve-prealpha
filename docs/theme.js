/* Light/dark switch. Optional: without JavaScript the page follows the system setting.
   The choice is saved in this browser only (localStorage) and is never sent anywhere. */
(function () {
  var KEY = "readyonline-theme";
  var root = document.documentElement;
  var mq = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  try {
    var saved = localStorage.getItem(KEY);
    if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);
  } catch (e) {}

  function isDark() {
    var t = root.getAttribute("data-theme");
    return t ? t === "dark" : !!(mq && mq.matches);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".theme-toggle");
    if (!btn) return;
    var sync = function () { btn.setAttribute("aria-pressed", isDark() ? "true" : "false"); };
    btn.hidden = false;
    sync();
    btn.addEventListener("click", function () {
      var next = isDark() ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
      sync();
    });
    if (mq && mq.addEventListener) mq.addEventListener("change", sync);
  });
})();
