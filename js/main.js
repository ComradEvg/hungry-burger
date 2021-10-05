
function ibgmy() {
   const ibgs = document.getElementsByClassName('ibg');
   for (let ibg of ibgs) {
      const img = ibg.querySelector("img");
      const imgsrc = img.getAttribute("src");
      ibg.style.backgroundImage = 'url("' + imgsrc + '")';
   }
}
ibgmy()

const menuIcon = document.querySelector('.menu-icon__img')

window.addEventListener('scroll', function () {
   if(50 < window.pageYOffset){
      menuIcon.classList.add("deactive")
   }
   else{
      menuIcon.classList.remove("deactive")
   }
});
