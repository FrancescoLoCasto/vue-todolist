import { createApp } from 'vue'

createApp({
  data() {
    return {

      shopList: [
         {
            text: 'burro',
            done: true,
         },
         {
            text: 'latte',
            done: true,
         },
         {
            text: 'riso',
            done: false,
         },
         {
            text: 'farina',
            done: true,
         },
         {
            text: 'pellicola',
            done: false,
         },
         {
            text: 'scottex',
            done: true,
         },
         {
            text: 'pane',
            done: true,
         },
         {
            text: 'cioccolata',
            done: false,
         },
      ],

    }
  }
}).mount('#app')
