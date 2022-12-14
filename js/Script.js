const { createApp } = Vue

createApp({
  data() {
    return {

      index: 0,
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
      
   }
  }
}).mount('#app')
