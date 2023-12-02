// require('./util/alert')

// const global = require('./util/global')
//
// console.log(global)

import { add } from './util/math';

let t = add(1, 2);
const div = document.createElement('div');
div.innerHTML = t;
document.body.appendChild(div);
