
window.onload = Navbar; 
function Navbar() {
let x = document.getElementById("navbar-side");
let y = document.getElementById("navbar-icon");
let c = document.getElementById("navbar-x");
if (x.style.display === "none" &&
  y.style.display === "block" &&
  c.style.display === "none") 
{
x.style.display = "flex",
y.style.display = "none";
c.style.display = "block";
} else {
x.style.display = "none";
y.style.display = "block";
c.style.display = "none";
}
}


window.addEventListener('load', function() {
const preloader = document.querySelector('.preloader');
const content = document.querySelector('.content');

setTimeout(function() {
preloader.style.opacity = 0;
setTimeout(function() {
  preloader.style.display = 'none';
  content.style.display = 'block'; // Show the content after preloader is hidden
}, 300);
}, 900); // Replace 2000 with the duration of your loading process
});


const words = ["HACK", "YOUR", "THOUGHTS"];
let index = 0;
const textElement = document.querySelector(".preloader-text");

function changeText() {
textElement.textContent = words[index];
index = (index + 1) % words.length;
}
setInterval(changeText, 300);
/*
function accordion(idx,idy,idc) {
let x = document.getElementById(idx);
let y = document.getElementById(idy);
let c = document.getElementById(idc);
if (x.style.display === "none",
  y.style.display === "grid",
  c.style.display === "flex") 
{
x.style.display = "flex",
y.style.display = "none";
c.style.display = "none";
} else {
x.style.display = "none";
y.style.display = "grid";
c.style.display = "flex";
}
}
*/
function accordion(idx,idy,idc) {
let x = document.getElementById(idx);
let y = document.getElementById(idy);
let c = document.getElementById(idc);
x.classList.toggle('heading-hide');
y.classList.toggle('inside-show');
c.classList.toggle('upside-show');

}
/*
function accordion(idx,idy,idc) {
let x = document.getElementById(idx);
let y = document.getElementById(idy);
let c = document.getElementById(idc);
x.classList.toggle('accordion-heading-hide');
y.classList.toggle('accordion-inside-show');
c.classList.toggle('accordion-upside-show');
}
*/
/*
function faq(idx,idy,idc) {
let x = document.getElementById(idx);
let y = document.getElementById(idy);
let c = document.getElementById(idc);
if (x.style.display === "none",
  y.style.transform === "rotate(0deg)",
  c.style.display === "flex")
   {

  x.style.display = "flex";
  y.style.transform = "rotate(45deg)";
  c.style.display = "none";
  

} else if (
  x.style.display = "flex",  
  y.style.transform = "rotate(45deg)",
  c.style.display = "none")
   {

  x.style.display = "none";
  y.style.transform = "rotate(0deg)";
  c.style.display = "flex";
  
}
}
*/

function changeColor (idx,idy,idc) {
let x = document.getElementById(idx);
let y = document.getElementById(idy);
let c = document.getElementById(idc);
x.classList.toggle('serviceColorClass');
y.classList.toggle('serviceColorClass');
c.classList.toggle('serviceColorClass');
}

function eduColor (idx,idy,idc,idf) {
let x = document.getElementById(idx);
let y = document.getElementById(idy);
let c = document.getElementById(idc);
let f = document.getElementById(idf);

x.classList.toggle('eduColorClass');
y.classList.toggle('edutype-description-show');
c.classList.toggle('almamater2-show');
f.classList.toggle('edutype-symptoms-hide')

}



/*
var acc = document.getElementsByClassName("faq-accordion-js");
var acc2 = document.getElementsByClassName("faq-panel")
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
this.classList.toggle("active");
var panel = this.nextElementSibling;
if (panel.style.maxHeight) {
  panel.style.maxHeight = null;
} else {
  panel.style.maxHeight = panel.scrollHeight + "px";
} 

});
}
*/

function accordionFaq(idx,idy,idc,idf,idb) {
let x = document.getElementById(idx);
let y = document.getElementById(idy);
let c = document.getElementById(idc);
let f = document.getElementById(idf);
let b = document.getElementById(idb);

if (x.style.display === "none" &&
  y.style.display === "flex" &&
  c.style.display === "flex" &&
  f.style.transform === "rotate(45deg)" &&
  b.style.display === "flex") 
{
x.style.display = "flex",
y.style.display = "none";
c.style.display = "none";
f.style.transform = "rotate(0deg)";
b.style.display = "none";

} else {
x.style.display = "none";
y.style.display = "flex";
c.style.display = "flex";
f.style.transform = "rotate(45deg)";
b.style.display = "flex"

}
}


