// https://hackernoon.com/how-to-build-your-own-reactivity-system-fc48863a1b7c

import { walk } from './observer';
import { Watcher } from './Watcher';

const data = {
  name: 'World',
  feeling: 'like'
}

walk(data) // adds reactivity to the data objects

new Watcher(
    () => `Hello, ${data.name}. I ${data.feeling} Vue.js.`, // the value getter we're watching
    (val, oldVal) => console.log(val) // the callback, fired on changes to dependencies of the value getter
  ) // logs 'Hello, World. I like Vue.js'

data.name = 'Universe' // logs 'Hello, Universe. I like Vue.js'
data.feeling = 'love' // logs 'Hello, Universe. I love Vue.js'