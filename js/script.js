
// Activer les tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


/* Activer les parallaxes
  https://marrio-h.github.io/universal-parallax/demo/
  https://github.com/marrio-h/universal-parallax */

new universalParallax().init({
  speed: 4
});
