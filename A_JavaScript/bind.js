console.log("Bind");
let c1 = {
    x: 10,
    y: 20
};
function foo9(first, second, ...args) {
    console.log(this.x + ' , ' + this.y);
    console.log(first + second);
    console.log(args);
    args.map(item => {
        console.log(item);
    })
    console.log(typeof (args));
}
// Same as below let obj1 = foo9.bind(c1,8, 20, 10, 20, 30, 40);
let obj1 = foo9.bind(c1);
obj1(8, 20, 10, 20, 30, 40);
console.log('*****************************************')
let obj2 = foo9.bind(c1);
obj2([8, 20, 10, 20, 30, 40]);

console.log('*****************************************')

function foo(parm) {
    console.log(this);
    console.log(parm);
}
let obj3 = foo.bind(this);
obj3(8);