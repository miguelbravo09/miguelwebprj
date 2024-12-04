// masonry-init.js
document.addEventListener('DOMContentLoaded', function () {
  var elem = document.querySelector('.grid');
  var msnry = new Masonry(elem, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
	gutter: 20,
    percentPosition: true
  });
});