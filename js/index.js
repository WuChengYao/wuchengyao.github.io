var w = window
var btn = document.querySelector('#myBtn')
w.addEventListener('scroll', scrollHandler)
btn.addEventListener('click', clickHandler)
function scrollHandler(){
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
function clickHandler(){
  document.documentElement.scrollTop = 0;
}