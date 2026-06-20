// Minimal: the cursor blink is CSS-driven and already disabled via the
// prefers-reduced-motion media query. This is a belt-and-suspenders guard so
// the single hero cursor never animates when a user asks for reduced motion,
// including if that preference changes mid-session.
(function () {
  "use strict";

  var query = window.matchMedia("(prefers-reduced-motion: reduce)");
  var cursor = document.querySelector(".cursor");
  if (!cursor) return;

  function apply() {
    if (query.matches) {
      cursor.style.animation = "none";
      cursor.style.opacity = "1";
    } else {
      cursor.style.animation = "";
      cursor.style.opacity = "";
    }
  }

  apply();

  if (typeof query.addEventListener === "function") {
    query.addEventListener("change", apply);
  } else if (typeof query.addListener === "function") {
    query.addListener(apply); // older Safari
  }
})();
