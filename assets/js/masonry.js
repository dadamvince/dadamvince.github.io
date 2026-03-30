document.addEventListener('DOMContentLoaded', function () {
  const grid = document.querySelector('.grid');
  if (!grid || typeof Masonry === 'undefined') return;

  const masonry = new Masonry(grid, {
    gutter: 10,
    horizontalOrder: true,
    itemSelector: '.grid-item'
  });

  if (typeof imagesLoaded !== 'undefined') {
    imagesLoaded(grid).on('progress', function () {
      masonry.layout();
    });
  }
});
