
class ProductList{
   constructor(select, options) {
      this.$menuEl = select
      this.options = options
      console.log(this.options)
      this.#dataProcessor();
   }
  

   #dataProcessor(){ 
      for (const el in this.options) {
         if (this.$menuEl === el){
            const arrElements = this.options[el];
            console.log(arrElements)
            const items = arrElements.map(item=>{
               console.log(item)
               return Search(item.value, item.price, item.valueSub)
            })
            console.log(items)
            Render(items)
         }
      }
   }


}








function Render(items) {
   const list = document.querySelector('.product__price-list');
   list.insertAdjacentHTML("beforeend", items.join(''))

}

function Search(value, price, valueSub) {
   const data =
      `<li class="product__price-item" data-id="product1">
   <div class="card-product__box">
      <div class="card-product__name">${value}<span>${valueSub}</span></div>
      <div class="card-product__price">${price} USD</div>
   </div>
</li>`
   return data
}