/* Progressive enhancement: the source is an ordinary eight-step numbered list.
   The controls stay in place, so changing steps never moves keyboard focus. */
(function () {
  "use strict";
  var walkthrough = document.querySelector(".walkthrough");
  if (!walkthrough) return;
  var list = walkthrough.querySelector(".walk-steps");
  var steps = Array.prototype.slice.call(list.children);
  if (steps.length !== 8) return;

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text) node.textContent = text;
    return node;
  }

  var controls = el("div", "walk-controls");
  var back = el("button", "", "Back");
  var next = el("button", "", "Next");
  back.type = next.type = "button";
  back.setAttribute("aria-controls", "free-skin-steps");
  next.setAttribute("aria-controls", "free-skin-steps");
  var progress = el("p", "walk-progress");
  controls.append(back, progress, next);

  var layout = el("div", "walk-layout");
  var stage = el("div", "walk-stage");
  // The original step text remains accessible; the chat visual repeats its messages.
  stage.setAttribute("aria-hidden", "true");
  var chat = el("div", "walk-chat");
  var extra = el("div", "walk-extra");
  var signs = el("ul", "sign-chips");
  var signChips = ["Hurry", "Secrecy", "Owing"].map(function (name) {
    var chip = el("li", "", name);
    signs.appendChild(chip);
    return chip;
  });
  stage.append(chat, extra, signs);
  list.id = "free-skin-steps";
  list.setAttribute("role", "list");
  walkthrough.insertBefore(controls, list);
  walkthrough.insertBefore(layout, list);
  layout.append(stage, list);

  var announcement = el("div", "visually-hidden");
  announcement.setAttribute("aria-live", "polite");
  announcement.setAttribute("aria-atomic", "true");
  walkthrough.appendChild(announcement);

  // Derive the messages from the supplied list rather than keeping a second script.
  var messages = [0, 1, 2, 6].map(function (index) {
    var text = steps[index].children[1].textContent;
    return text.slice(text.indexOf('"') + 1, text.lastIndexOf('"'));
  });
  var moveLabels = ["Stop replying", "Check another way", "Block and report", "Tell someone you trust"];
  var index = 0;
  function render(announce) {
    steps.forEach(function (step, n) {
      step.hidden = n !== index;
      step.value = n + 1;
    });
    progress.textContent = "Step " + (index + 1) + " of " + steps.length;
    // aria-disabled keeps the pressed control focused even at either boundary.
    back.setAttribute("aria-disabled", index === 0 ? "true" : "false");
    next.setAttribute("aria-disabled", index === steps.length - 1 ? "true" : "false");
    chat.replaceChildren();
    extra.replaceChildren();
    stage.classList.toggle("is-paused", index >= 3 && index <= 5);
    if (index === 7) {
      chat.appendChild(el("p", "chat-ended", "You blocked and reported Kai_plays"));
    } else {
      chat.appendChild(el("p", "chat-name", "Kai_plays"));
      messages.slice(0, Math.min(index + 1, 3)).forEach(function (message) {
        chat.appendChild(el("p", "chat-bubble", message));
      });
      if (index >= 5) chat.appendChild(el("p", "chat-bubble chat-reply", "no thanks"));
      if (index === 6) chat.appendChild(el("p", "chat-bubble", messages[3]));
      if (index === 3) {
        var replyBox = el("div", "chat-empty-reply");
        chat.appendChild(replyBox);
      }
    }
    if (index >= 3 && index <= 5) extra.appendChild(el("p", "walk-habit", ["Pause", "Think", "Act"][index - 3]));
    if (index === 4) {
      extra.appendChild(el("p", "", "Kai gets: your account"));
      extra.appendChild(el("p", "", "You get: maybe nothing"));
    }
    if (index === 5) {
      var moves = el("ul", "walk-moves");
      moveLabels.forEach(function (label) { moves.appendChild(el("li", "", label)); });
      extra.appendChild(moves);
    }
    signChips[0].classList.toggle("is-lit", index >= 2);
    signChips[1].classList.toggle("is-lit", index >= 1);
    signChips[2].classList.toggle("is-lit", index >= 6);
    if (announce) announcement.textContent = progress.textContent + ". " + steps[index].textContent;
  }
  back.addEventListener("click", function () {
    if (index > 0) { index--; render(true); }
  });
  next.addEventListener("click", function () {
    if (index < steps.length - 1) { index++; render(true); }
  });
  walkthrough.classList.add("is-enhanced");
  render(false);

  // A direct help link reveals the disclosure, including when landing on its hash.
  function revealThreats() {
    if (window.location.hash === "#threats") document.getElementById("threats").open = true;
  }
  window.addEventListener("hashchange", revealThreats);
  document.querySelectorAll('a[href="#threats"]').forEach(function (link) {
    link.addEventListener("click", function () { document.getElementById("threats").open = true; });
  });
  revealThreats();
})();
