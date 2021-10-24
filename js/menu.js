const burger = document.querySelector(".burger");
const nav = document.querySelector(".menu");
burger.addEventListener('click', function (event) {
   if(event.target){
   burger.classList.toggle("active");
   if (burger.classList.contains("active")) {
      nav.classList.add("active");
   }
   else {
      nav.classList.remove("active");
   }
}});

document.addEventListener('click', function (e) {
   const target = e.target;
   const targetMenu = target == nav || nav.contains(target);
   const targetBurger = target == burger;
   const menuActive = nav.classList.contains('active');
   

   if (!targetMenu && !targetBurger && menuActive) {
      nav.classList.remove("active");
      burger.classList.remove("active");
   }
   else {
      nav.addEventListener('touchstart', function (e) {
         TouchStart(e);
      });
      nav.addEventListener('touchmove', function (e) {
         TouchMove(e);
      });
   }
});
let mousestart;
let mousemove;

function TouchStart(e) {
   mousestart = e.targetTouches[0].clientX;
};
function TouchMove(e) {
   e.preventDefault();
   mousemove = e.targetTouches[0].clientX;
   console.log(mousemove);
   if (mousestart + 100 < mousemove) {
      nav.classList.remove("active");
      burger.classList.remove("active");
   }
};