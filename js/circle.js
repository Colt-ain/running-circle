'use strict';

var container = document.querySelector('.container');
var target = container.querySelector('.target');

var CICLE_RADIUS = 150 - 50;
var jumpTarget = function () {
    var fi = Math.random() * 2 * Math.PI;
    console.log('evt');
    target.style.top = (25 + CICLE_RADIUS + CICLE_RADIUS * Math.cos(fi)) + 'px';
    target.style.left = (25 + CICLE_RADIUS - CICLE_RADIUS * Math.sin(fi)) + 'px';

};

target.addEventListener('mouseover', jumpTarget);

