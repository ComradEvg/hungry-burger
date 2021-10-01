
function ibgmy() {
   const ibgs = document.getElementsByClassName('ibg');
   for (let ibg of ibgs) {
      const img = ibg.querySelector("img");
      const imgsrc = img.getAttribute("src");
      ibg.style.backgroundImage = 'url("' + imgsrc + '")';
   }
}
ibgmy()