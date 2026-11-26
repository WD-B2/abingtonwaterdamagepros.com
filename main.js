(function () {
  "use strict";
  var BP = 768;
  var burger = document.getElementById("burger");
  var drawer = document.getElementById("drawer");
  if (!burger || !drawer) { return; }
  function setOpen(open) {
    drawer.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.documentElement.style.overflow = open ? "hidden" : "";
  }
  burger.addEventListener("click", function () {
    setOpen(!drawer.classList.contains("open"));
  });
  drawer.addEventListener("click", function (e) {
    var t = e.target;
    while (t && t !== drawer) {
      if (t.tagName === "A") { setOpen(false); return; }
      t = t.parentNode;
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && drawer.classList.contains("open")) { setOpen(false); burger.focus(); }
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > BP && drawer.classList.contains("open")) { setOpen(false); }
  });
})();
