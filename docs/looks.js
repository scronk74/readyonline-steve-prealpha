/* Review only: switch between three dark mode designs so Steve and Ngoc can compare them.
   A = current, B = quieter, C = example first. Remove this file and looks.css once one is chosen.
   The choice is saved in this browser only (localStorage) and is never sent anywhere.
   Without JavaScript the switch doesn't appear and the site shows design A. */
(function () {
  var LOOK_KEY = "readyonline-look";
  var THEME_KEY = "readyonline-theme";
  var LOOKS = [
    ["a", "A", "Current"],
    ["b", "B", "Quieter"],
    ["c", "C", "Example"]
  ];
  var root = document.documentElement;
  var mq = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  var look = "a";
  try {
    var saved = localStorage.getItem(LOOK_KEY);
    if (saved === "a" || saved === "b" || saved === "c") look = saved;
  } catch (e) {}

  function isDark() {
    var t = root.getAttribute("data-theme");
    return t ? t === "dark" : !!(mq && mq.matches);
  }

  var buttons = [];
  function apply() {
    // The designs differ only in dark mode; light mode stays as it is.
    if (isDark() && look !== "a") root.setAttribute("data-look", look);
    else root.removeAttribute("data-look");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-pressed", buttons[i].value === look ? "true" : "false");
    }
  }
  apply();

  new MutationObserver(apply).observe(root, { attributes: true, attributeFilter: ["data-theme"] });
  if (mq && mq.addEventListener) mq.addEventListener("change", apply);

  document.addEventListener("DOMContentLoaded", function () {
    var panel = document.createElement("div");
    panel.className = "look-panel";
    panel.setAttribute("role", "group");
    panel.setAttribute("aria-labelledby", "look-panel-label");
    var label = document.createElement("span");
    label.id = "look-panel-label";
    label.className = "look-panel-label";
    label.textContent = "Dark mode design:";
    panel.appendChild(label);

    LOOKS.forEach(function (l) {
      var b = document.createElement("button");
      b.type = "button";
      b.value = l[0];
      b.innerHTML = "<strong>" + l[1] + "</strong><span class=\"look-name\"> " + l[2] + "</span>";
      b.addEventListener("click", function () {
        look = l[0];
        try { localStorage.setItem(LOOK_KEY, look); } catch (e) {}
        if (!isDark()) {
          // Picking a design shows it, so switch to dark mode too.
          root.setAttribute("data-theme", "dark");
          try { localStorage.setItem(THEME_KEY, "dark"); } catch (e) {}
          var toggle = document.querySelector(".theme-toggle");
          if (toggle) toggle.setAttribute("aria-pressed", "true");
        }
        apply();
      });
      buttons.push(b);
      panel.appendChild(b);
    });

    document.body.appendChild(panel);
    document.body.classList.add("has-look-panel");
    apply();
  });
})();
