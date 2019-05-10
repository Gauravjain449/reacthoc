function foo() {
    console.log(this.name);
}

foo();
/* ******************************************** */
var name = "Gaurav Jain";
function _foo() {

    console.log(this.name); // Output should be Gaurav Jain 
}
_foo();

/* ******************************************** */


function foo1() {

    console.log(this.name);
}
foo1.call({ name: "Gaurav Jain" });

/* ******************************************** */

function foo2(param1, param2) {

    console.log(this.name);
    console.log(param1);
    console.log(param2);
}
foo2.call({ name: "Gaurav Jain" }, "Rajinder Kumar Jain", "Neelam Rani Jain");

/* ******************************************** */

function foo3() {
    this.name = "Jain Gaurav";
    foo1.call(this);
}
foo3();
/* ******************************************** */

function foo4(...args) {

    console.log(this.name);
    console.log(args[0]);
    console.log(args[1]);
    args.map(item => {
        console.log(item);
    })
    console.log(typeof (args));
}
foo4.apply({ name: "Gaurav Jain" }, ["Rajinder Kumar Jain", "Neelam Rani Jain"]);



/* ******************************************** */
function foo5(...args) {
    console.log(this.name);
    console.log(args[0]);
    console.log(args[1]);

}
foo5.call({ name: "Gaurav Jain" }, ["Rajinder Kumar Jain", "Neelam Rani Jain"]);

/* ******************************************** */


function foo6(args1, args2) {
    console.log(this.name);
    console.log(args1);
    console.log(args2);

}
foo6.apply({ name: "Gaurav Jain" }, ["Rajinder Kumar Jain", "Neelam Rani Jain"]);

/* ******************************************** */
console.log("BIND Method");

function foo7() {
    console.log(this.name);
}
let foo7_func = foo7.bind({ name: "Gaurav Jain" });
foo7_func();
/* ******************************************** */

function foo8(first, second, ...args) {
    console.log(this.x + ' , ' + this.y);
    console.log(first + second);
    console.log(args);
    args.map(item => {
        console.log(item);
    })
    console.log(typeof (args));
}
let c1 = {
    x: 10,
    y: 20
};
let foo8_func = foo8.bind(c1, 8, 20, 10, 20, 30, 40);
foo8_func();

/* ******************************************** */
console.log("Call Method");
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
//  not work let foo_Call_func = foo9.call(c1);
// foo_Call_func();


/* ******************************************** */
console.log("Apply Method");
function foo10() {
    console.log(this.x + ' , ' + this.y);
    // console.log(first + second);
    // console.log(args);
    // args.map(item => {
    //     console.log(item);
    // })
    // console.log(typeof (args));
}
foo10.apply(c1);
//let foo_apply_func = foo10.apply(c1);
//foo_apply_func();
/* ******************************************** */
console.log("Apply Method");
function foo11(f, s, ...args) {
    console.log(this.x + ' , ' + this.y);
    console.log(f + s);
    console.log(args);
    args.map(item => {
        console.log(item);
    })
    // console.log(typeof (args));
}
foo11.apply(c1, [8, 20, 10, 20, 30, 40]);
//let foo_apply_func = foo10.apply(c1);
//foo_apply_func();