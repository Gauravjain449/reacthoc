var Mobile = function (model_no) {
    // Instance members
    this.model = model_no;
    this.price = 30000;
}

var Apple = new Mobile('X10');
var Samsung = new Mobile('Galaxy');

// prototype member
Mobile.prototype.color = "White";

console.log(Apple.color);
console.log(Samsung.color);

// --------------------------------------------------------------------------------//

console.log(Object.keys(Apple));

for (var key in Apple) {
    console.log(key);
}

// --------------------------------------------------------------------------------//

console.log(Object.getPrototypeOf(Object.prototype));

var b1=new Array();
console.log(Object.getPrototypeOf(Array.prototype));

// --------------------------------------------------------------------------------//