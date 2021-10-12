const windowInnerWidth = window.innerWidth
const leftImages = document.querySelectorAll('#leftImage');
for (let elem of leftImages) {
   InstalPeace(elem);
}

function InstalPeace(elem) {
   if (windowInnerWidth <= elem.dataset.size) {
      const nextElem = elem.nextElementSibling;
      elem.before(nextElem);
   }
}