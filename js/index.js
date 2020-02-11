var w = window
var btn = document.querySelector('#myBtn')
w.addEventListener('scroll', scrollHandler)
btn.addEventListener('click', clickHandler)

function scrollHandler() {
  if (
    document.documentElement.scrollTop > 20
  ) {
    btn.classList.add('block')
    btn.classList.remove('none')
  } else {
    btn.classList.remove('block')
    btn.classList.add('none')
  }
}

function clickHandler() {
  document.documentElement.scrollTop = 0;
}

var navbar_collapse = document.querySelector('.navbar-collapse');
var nav_items = navbar_collapse.querySelectorAll('.nav-item');
nav_items.forEach(nav_item => {
  nav_item.onclick = function () {
    navbar_collapse.classList.remove('show')
  }
});