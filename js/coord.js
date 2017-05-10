

var isOk = function () {
    var CIRCLE_CONTAINER = 150;
    var CIRCLE_RADIUS = CIRCLE_CONTAINER - 50;
    var Rtarget = 25;
    fi = Math.random() * 2 * Math.PI;
    X1 = CIRCLE_RADIUS + CIRCLE_RADIUS * Math.cos(fi);
    Y1 = CIRCLE_RADIUS - CIRCLE_RADIUS * Math.sin(fi) + Rtarget;
    var X = X1 + Rtarget;
    var Y = Y1 + Rtarget;
    X0 = 150;
    Y0 = 150;
    var Re = Math.sqrt( Math.pow( (X0 - X), 2) + Math.pow( (Y0 - Y), 2) );
    console.log(Re);
    if (Re > 125) {
        return 0;
    } else {
        return 1;
    }
};
module.exports = isOk;

