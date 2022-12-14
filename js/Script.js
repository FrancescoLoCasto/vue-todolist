const { createApp } = Vue

createApp({
  data() {
    return {


      newItemListShop : '',
      shopList: [
         {
            text: "burro",
            done: true,
         },
         {
            text: "latte",
            done: true,
         },
         {
            text: "riso",
            done: false,
         },
         {
            text: "farina",
            done: true,
         },
         {
            text: "pellicola",
            done: false,
         },
         {
            text: "scottex",
            done: true,
         },
         {
            text: "pane",
            done: true,
         },
         {
            text: "cioccolata",
            done: false,
         },
      ]

    }
  },

  methods: {
   removeItemList(itemToRemove){
      const listIndex = this.shopList.indexOf(itemToRemove);
      if ( listIndex > -1 ) {
          this.shopList.splice(listIndex, 1)
      }
   },

   addItemList(){
      if (this.newItemListShop != '' && this.newItemListShop.length >= 2) {
         let newElementListShop = { text: this.newItemListShop, done: false}
         this.shopList.push(newElementList);
         this.newItemListShop = '';
     }
   },

   textThro(index){
      (this.shopList[index].done) ? this.shopList[index].done = false : this.shopList[index].done = true;
   }

  }
}).mount('#app')
