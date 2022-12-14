import { createApp } from 'vue'

createApp({
  data() {
    return {
      
      shopList: [
         {
            text: 'burro',
            done: true
         }
      ],

    }
  }
}).mount('#app')
