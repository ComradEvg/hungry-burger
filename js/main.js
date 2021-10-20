
const windowInnerWidth = window.innerWidth

function ibgmy() {
   const ibgs = document.getElementsByClassName('ibg');
   for (let ibg of ibgs) {
      const img = ibg.querySelector("img");
      const imgsrc = img.getAttribute("src");
      ibg.style.backgroundImage = 'url("' + imgsrc + '")';
   }
}
ibgmy();

const menuIcon = document.querySelector('.menu-icon__img')
const headerBG = document.querySelector('.header')

window.addEventListener('scroll', function () {
   if (50 < window.pageYOffset && window.innerWidth>=767) {
      menuIcon.classList.add("deactive")
      headerBG.classList.add("active")
   }
   else {
      menuIcon.classList.remove("deactive")
      headerBG.classList.remove("active")
   }
});

let phone = document.getElementById("formPhone");
let im = new Inputmask({
   "mask": "+7 (999) 999-99-99",
   showMaskOnHover: false
});
im.mask(phone);


let date = document.getElementById("formDate");
let dateMask = new Inputmask({
   "mask": "99/99",
   "placeholder": "dd/mm",
   showMaskOnHover: false
});
dateMask.mask(date);

let time = document.getElementById("formTime");
let timeMask = new Inputmask({
   "mask": "99 : 99",
   "placeholder": "hh : mm",
   showMaskOnHover: false
});
timeMask.mask(time);

const select = new Select('#select', {
   placeholder: "People",
   data: [
      {id: '1', value: "1-2"},
      {id: '2', value: "3" },
      {id: '3', value: "4" },
      {id: '4', value: "5 и более" }
   ],
   onSelect(item){
      
   }
})
// Сделать это действие по определенному экрану

