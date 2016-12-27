// ./play/index.js
import {play} from 'vue-play'
import Hello from './../src/components/Hello.vue'

play('Hello', module)
  .add('Standard behaviour', h => h(Hello))

