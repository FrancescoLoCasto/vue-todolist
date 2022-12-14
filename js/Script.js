const { createApp } = Vue

createApp({
  data() {
    return {

      index: 0,
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
      
   }

  }
}).mount('#app')
