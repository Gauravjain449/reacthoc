var Mobile = function () {
    this.a = 10;
}

var laptop = function () {
    // Wrong m.call(this);
    Mobile.call(this);
    this.b = 20;
}

Mobile.prototype.z = 30;

var m = new Mobile();
console.log(m.a);




var l = new laptop()
console.log(l.b);
console.log(l.a);

// For l.z set before crete the object
laptop.prototype = Object.create(Mobile.prototype);
laptop.prototype.constructor = laptop; // That is for good practic

l = new laptop();

console.log(l.z);

var Desktop = function () {
    this.c = 100;
}

Desktop.prototype =Object.create(Mobile.prototype);

let desktop = new Desktop();
console.log(desktop.c);


console.log(desktop.a);

var TV = function () {
    laptop.call(this);
    this.d = 1000;
}
let tv = new TV();
console.log(tv.d);
console.log(tv.a);
