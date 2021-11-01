const burger = document.querySelector(".burger");
const nav = document.querySelector(".menu");
burger.addEventListener('click', AddListenerMenuOff);


function AddListenerMenuOff(event){
   event.stopPropagation()
   event.currentTarget.classList.toggle("active");
   if (burger.classList.contains("active")) {
      nav.classList.add("active");
      AddListenerMenuOn()
   }
   else {
      nav.classList.remove("active");
      document.removeEventListener('click', ClickInMenu);
      nav.removeEventListener('touchstart', function (e) {
         TouchStart(e);
      }, { passive: true });
      nav.removeEventListener('touchmove', function (e) {
         TouchMove(e);
      }, { passive: true });
   }
}

function AddListenerMenuOn(){
   document.addEventListener('click', ClickInMenu);
   nav.addEventListener('touchstart', TouchStart, { passive: true });
   nav.addEventListener('touchmove', TouchMove, { passive: true });
}


function ClickInMenu(event){
   const target = event.target;
   const targetMenu = target == nav || nav.contains(target);
   const targetBurger = target == burger;
   const menuActive = nav.classList.contains('active');

   if (!targetMenu && !targetBurger && menuActive) {
      nav.classList.remove("active");
      burger.classList.remove("active");
   }
   else {

   }
}

let mousestart;
let mousemove;

function TouchStart(e) {
   e.stopPropagation()
   mousestart = e.targetTouches[0].clientX;
};
function TouchMove(e) {
   e.stopPropagation()
   mousemove = e.targetTouches[0].clientX;
   if (mousestart + 100 < mousemove) {
      nav.classList.remove("active");
      burger.classList.remove("active");
      nav.classList.remove("active");
      document.removeEventListener('click', ClickInMenu);
      nav.removeEventListener('touchstart', function (e) {
         TouchStart(e);
      }, { passive: true });
      nav.removeEventListener('touchmove', function (e) {
         TouchMove(e);
      }, { passive: true });
   }
};