/* Review only: switch between eight dark mode designs so Steve and Ngoc can compare them.
   A to D use Ngoc's colours; E to H are new themes. Remove this file, looks.css, the fonts
   folder and the .ex examples on the home page once one design is chosen.
   The choice is saved in this browser only (localStorage) and is never sent anywhere.
   Without JavaScript the switch doesn't appear and the site shows design A. */
(function () {
  var LOOK_KEY = "readyonline-design";
  var THEME_KEY = "readyonline-theme";
  var GROUPS = [
    ["Ngoc's colours", [
      ["current", "A", "Current"],
      ["example", "B", "Example"],
      ["bold", "C", "Bold"],
      ["calm", "D", "Calm"]
    ]],
    ["New themes", [
      ["kitchen", "E", "Kitchen table"],
      ["signpost", "F", "Signpost"],
      ["fieldguide", "G", "Field guide"],
      ["harbour", "H", "Night harbour"]
    ]]
  ];
  var byKey = {};
  GROUPS.forEach(function (g) {
    g[1].forEach(function (l) { byKey[l[0]] = l; });
  });

  var root = document.documentElement;
  var mq = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  var look = "current";
  try {
    localStorage.removeItem("readyonline-look"); // the earlier three-design switch
    var saved = localStorage.getItem(LOOK_KEY);
    if (saved && byKey[saved]) look = saved;
  } catch (e) {}

  function isDark() {
    var t = root.getAttribute("data-theme");
    return t ? t === "dark" : !!(mq && mq.matches);
  }

  var buttons = [];
  var current = null;
  function apply() {
    // The designs differ only in dark mode; light mode stays as it is.
    if (isDark() && look !== "current") root.setAttribute("data-look", look);
    else root.removeAttribute("data-look");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-pressed", buttons[i].value === look ? "true" : "false");
    }
    if (current) current.textContent = byKey[look][1] + " " + byKey[look][2];
  }
  apply();

  new MutationObserver(apply).observe(root, { attributes: true, attributeFilter: ["data-theme"] });
  if (mq && mq.addEventListener) mq.addEventListener("change", apply);

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var panel = el("div", "look-panel");

    var toggle = el("button", "look-toggle");
    toggle.type = "button";
    toggle.setAttribute("aria-controls", "look-options");
    toggle.appendChild(el("span", "look-toggle-label", "Dark mode design: "));
    current = el("strong", "look-current");
    toggle.appendChild(current);
    panel.appendChild(toggle);

    var options = el("div", "look-options");
    options.id = "look-options";

    GROUPS.forEach(function (g, gi) {
      var group = el("div", "look-group");
      group.setAttribute("role", "group");
      group.setAttribute("aria-labelledby", "look-group-" + gi);
      var label = el("span", "look-group-label", g[0]);
      label.id = "look-group-" + gi;
      group.appendChild(label);
      g[1].forEach(function (l) {
        var b = el("button");
        b.type = "button";
        b.value = l[0];
        b.appendChild(el("strong", "", l[1]));
        b.appendChild(el("span", "look-name", " " + l[2]));
        b.addEventListener("click", function () {
          look = l[0];
          try { localStorage.setItem(LOOK_KEY, look); } catch (e) {}
          if (!isDark()) {
            // Picking a design shows it, so switch to dark mode too.
            root.setAttribute("data-theme", "dark");
            try { localStorage.setItem(THEME_KEY, "dark"); } catch (e) {}
            var t = document.querySelector(".theme-toggle");
            if (t) t.setAttribute("aria-pressed", "true");
          }
          apply();
        });
        buttons.push(b);
        group.appendChild(b);
      });
      options.appendChild(group);
    });
    panel.appendChild(options);

    // Open on laptops, folded on phones so it doesn't cover the page.
    function setOpen(open) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      options.hidden = !open;
      document.body.classList.toggle("look-panel-open", open);
    }
    setOpen(!(window.matchMedia && window.matchMedia("(max-width: 899px)").matches));
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    panel.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });

    document.body.appendChild(panel);
    document.body.classList.add("has-look-panel");
    apply();
  });
})();
