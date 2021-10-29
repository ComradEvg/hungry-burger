class Gallery {
   constructor(select, options) {

      this.$idImage = select
      this.elementsArr = options;

      this.#Start();
   }

   get ClickList() {
      return document.querySelector(this.$idImage)
   }

   get $GalleryShow() {
      return document.getElementById("galleryShow")
   }

   get CurrentStaus() {
      return this.$GalleryShow.classList.contains("active")
   }

   get $GalleryImage() {
      return document.getElementById("galleryImage")
      
   }

   #Start() {
      if (!this.CurrentStaus) {
         this.ClickId = this.ClickId.bind(this)
         this.ClickList.addEventListener("click", this.ClickId)
      }
   }

   #Stop(){
      if (this.CurrentStaus){
         this.Close = this.Close.bind(this)
         this.$GalleryShow.addEventListener("click", this.Close)
         this.ClickList.addEventListener("click", this.Close)
         }  
   }
   ClickId(event) {
      const el = event.target.id;
      this.elementsArr.map(item => {
         if (item.id === el) {
            if (!this.CurrentStaus) {
               this.$GalleryShow.insertAdjacentHTML("afterbegin", `<img id = "galleryImage" src=${item.src} alt="">`)
               this.$GalleryShow.classList.add("active")
               document.body.style.overflow = "hidden"
               this.#Stop()
            }
         }
      })
   }

   Close() {
      this.$GalleryImage.remove()
      this.$GalleryShow.classList.remove("active")
      document.body.style.overflow = "visible"
      this.ClickList.removeEventListener("click", this.ClickId)
      this.$GalleryShow.removeEventListener("click", this.Close)
      this.ClickList.removeEventListener("click", this.Close)
      this.#Start()
   }
}