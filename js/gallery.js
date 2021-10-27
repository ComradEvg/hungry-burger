class Gallery {
   constructor (select, options) {

      this.$idImage = select 
      this.elementsArr = options;

      this.ClickId = this.ClickId.bind(this)
      this.ClickList.addEventListener("click", this.ClickId)
   }

   get ClickList (){
      return document.querySelector(this.$idImage)
   }

   get GalleryShow (){
      return document.querySelector(".gallery__show")
   }

   ClickId(event){
      const el = event.target.id;
      this.elementsArr.map(item => {
         if (item.id === el){
            this.GalleryShow.innerHTML = `<img src=${item.src} alt="">`
            this.GalleryShow.classList.add("active")
         }
      })
   }

   
}