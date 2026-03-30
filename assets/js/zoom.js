document.addEventListener('DOMContentLoaded', function () {
  if (typeof mediumZoom === 'undefined') return;
  window.medium_zoom = mediumZoom('[data-zoomable]', {
    background: getComputedStyle(document.documentElement)
      .getPropertyValue('--global-bg-color') + 'ee'
  });
});
