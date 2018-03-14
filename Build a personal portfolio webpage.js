var body = document.documentElement;
var navbar = document.getElementById('navbar');
var main = navbar.children[0].firstChild;
var portfolio = navbar.children[1].firstChild;
var contact = navbar.children[2].firstChild;
var collapsedNavbar = document.getElementById('navbar-collapsed');
var scrollUp = document.getElementById('scroll-up');

//初始化ABOUT按钮的背景颜色和字体颜色。
/*window.addEventListener("load", function() {
  main.style.backgroundColor = '#e7e7e7';
  main.style.color = '#333';
})*/

//通过判断scrollTop的数值，从而判断现在所处的位置，进一步，将对应章节的按钮生成为应该的样式。
window.addEventListener("scroll", function() {
  if (body.scrollTop < 400) {
    main.style.backgroundColor = '#e7e7e7';
    main.style.color = '#333';
    portfolio.style.backgroundColor = '#722872';
    portfolio.style.color = '#777';
    contact.style.backgroundColor = '#722872';
    contact.style.color = '#777';
  } else if (body.scrollTop >= 400 && body.scrollTop < 1700) {
    main.style.backgroundColor = '#722872';
    main.style.color = '#777';
    portfolio.style.backgroundColor = '#e7e7e7';
    portfolio.style.color = '#333';
    contact.style.backgroundColor = '#722872';
    contact.style.color = '#777';
  } else {
    main.style.backgroundColor = '#722872';
    main.style.color = '#777';
    portfolio.style.backgroundColor = '#722872';
    portfolio.style.color = '#777';
    contact.style.backgroundColor = '#e7e7e7';
    contact.style.color = '#333';
  }
})

//当屏幕尺寸发生变化时，会将导航条自动变化为按钮形式，同时底边出现回到顶部的按钮，以方便操作。
window.addEventListener('resize', function() {
  if (body.scrollWidth < 770) {
    collapsedNavbar.style.display = "block";
    scrollUp.style.display = "block";
    navbar.style.display = "none";
  } else {
    collapsedNavbar.style.display = "none";
    scrollUp.style.display = "none";
    navbar.style.display = "block";
  }
})