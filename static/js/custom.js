window.onload = function() {
  document.querySelectorAll('.menu__list-item.menu__list-item--collapsed > a').forEach(item => {
    item.click();
  });
}