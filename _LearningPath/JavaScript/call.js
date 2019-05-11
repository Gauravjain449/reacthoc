console.log("Call");
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

foo9.call(c1, 8, 20, 10, 20, 30, 40);
console.log('*****************************************')
foo9.call(c1, [8, 20, 10, 20, 30, 40]);
console.log('*****************************************')

function foo() {
    console.log(this);
}
foo.call(8);