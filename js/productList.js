
class ProductList {
   constructor(select, options) {
      this.$menuEl = select
      this.options = options
      this.#dataProcessor();
   }


   #dataProcessor() {
      for (const el in this.options) {
         if (el === this.$menuEl) {
            const arrElements = this.options[el];
            const items = arrElements.map(item => {
               return this.Search(item.value, item.price, item.valueSub)
            })
            this.Delete()
            this.Render(items)
            break
         }
         else if (el == ""){
            
         }
         else if (!(el === this.$menuEl)){
            this.list.innerHTML = `<li class="product__price-item" data-id="product1">Until we came up with ...</li>`
         }
         
      }
   }

   get list (){
      return document.querySelector('.product__price-list');
   }

   get existEnterProduct (){
      return this.list.hasChildNodes()
   }

   Delete (){
      if(this.existEnterProduct){
         this.list.innerHTML = ""
      }
   }

   Render(items) {
      this.list.insertAdjacentHTML("beforeend", items.join(''))
   }

   Search(value, price, valueSub) {
      const data =
         `<li class="product__price-item" data-id="product1">
   <div class="card-product__box">
      <div class="card-product__name"><div class="dom">
      <p>${value}</p>
      <span class = "card-product__dotted"></span>
      </div><span>${valueSub}</span></div>
      <div class="card-product__price">${price} USD</div>
   </div>
   </li>`
      return data
   }
}










