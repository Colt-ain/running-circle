'use strict';


var X1;
var Y1;
var fi;
var X0 = 150;
var Y0 = 150;
var CIRCLE_CONTAINER = 150;
var CIRCLE_RADIUS = CIRCLE_CONTAINER - 50;



var coordGen = function () {
    var Rtarget = 25;
    fi = Math.random() * 2 * Math.PI;
    X1 = CIRCLE_RADIUS + CIRCLE_RADIUS * Math.cos(fi);
    Y1 = CIRCLE_RADIUS - CIRCLE_RADIUS * Math.sin(fi) + Rtarget;
    var X = X1 + Rtarget;
    var Y = Y1 + Rtarget;
    var Re = Math.sqrt( Math.pow( (X0 - X), 2) + Math.pow( (Y0 - Y), 2) );
    window.isOk = function () {
        if (Re > 125 ) {
            return false;
        } else {
            return true;
        }
    };
};

var jumpTarget = function () {
    var container = document.querySelector('.container');
    var target = container.querySelector('.target');
    window.coordGen();
    target.style.transition = '200ms';
    target.style.transform = 'rotate(' + (fi * 100) + 'deg)';
    target.style.top = Y1 + 'px';
    target.style.left = X1 + 'px';
    target.addEventListener('mousemove', jumpTarget);
};

var runingBug = function () {
    var container = document.querySelector('.container');
    var target = container.querySelector('.target');
    target.addEventListener('mouseover', jumpTarget);
};
runingBug();

