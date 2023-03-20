// 'use strict';

// a = 1;
// console.log(a);

// b = 2;
// console.log(b);

import SimpleLightbox from 'simplelightbox';

const d = document.querySelector('body');

const randomColor = require('randomcolor');
const color = randomColor();
d.style.backgroundColor = randomColor();

console.log(color);
