

const burger = document.querySelector(".burger");
const nav = document.querySelector(".menu");
burger.addEventListener('click', function () {
   burger.classList.toggle("active");
   if (burger.classList.contains("active")) {
      nav.classList.add("active");
   }
   else {
      nav.classList.remove("active");
   }
});
var mousestart;
var touches;
var touchess
var mousemove;
nav.addEventListener('touchstart', function (e) {
   TouchStart(e);
   console.log(touches);
});
nav.addEventListener('touchmove', function (e) {
   TouchMove(e);
   console.log(mousemove);
});
function TouchStart(e){
   touches = e.changedTouches;
   mousestart = e.targetTouches[0].clientX;

};
function TouchMove(e){
   e.preventDefault();
   touchess = e.changedTouches;
   mousemove = e.targetTouches[0].clientX;
   if (mousestart+100 < mousemove){
         nav.classList.remove("active");
         burger.classList.remove("active");
      }
};

function ibgmy() {
   const ibgs = document.getElementsByClassName('ibg');
   for (let ibg of ibgs) {
      const img = ibg.querySelector("img");
      const imgsrc = img.getAttribute("src");
      ibg.style.backgroundImage = 'url("' + imgsrc + '")';
   }
}
ibgmy()