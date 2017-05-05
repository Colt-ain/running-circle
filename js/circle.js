'use strict';

var container = document.querySelector('.container');
var target = container.querySelector('.target');
var CICLE_RADIUS = 150 - 50;
var jumpTarget = function () {
    var fi = Math.random() * 2 * Math.PI;
    target.style.transition = '200ms';
    target.style.transform = 'rotate(' + (fi * 100) + 'deg)';
    target.style.top = ( CICLE_RADIUS + CICLE_RADIUS * Math.cos(fi)) + 'px';
    target.style.left = ( 25 + CICLE_RADIUS - CICLE_RADIUS * Math.sin(fi)) + 'px';
    target.addEventListener('mousemove', jumpTarget);
};
target.addEventListener('mouseover', jumpTarget);

