var Mobile = function () {
    this.a = 10;
}

var Laptop = function () {
    this.b = 20;
}

Mobile.prototype.sum = function (a, b) {
    console.log(a + b);
}

Laptop.prototype = Object.create(Mobile.prototype);

var mob = new Mobile();
mob.sum(100,200);

var lap = new Laptop();
lap.sum(10,20);