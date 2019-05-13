function show() {
    const innerFun = function () {
        console.log("Inner Function");
    }
   innerFun();

}
show();

var arrayList =  ['a', 'b', 'c', 'd', 'e', 'f'];
//arrayList=[];
//arrayList.length = 0;
//arrayList.splice(0, arrayList.length);
// while(arrayList.length) {
//     arrayList.pop();
//   }
//console.log(arrayList);

// if(Object.prototype.toString.call(arrayList) === '[object Array]') {
//     console.log('Array!');
//   }

//console.log(Array.isArray(arrayList));
// var output = (function(x) {
//     delete x;
//     return x;
//   })(0);
//   //The code above will output 0 as output. delete operator is used to delete a property from an object. Here x is not an object it's local variable. delete operator doesn't affect local variables.
//   console.log(output);

// var x = { foo : 1};
// var output = (function() {
//   delete x.foo;
//   return x.foo;
// })();
// //The code above will output undefined as output. delete operator is used to delete a property from an object. Here x is an object which has foo as a property and from a self-invoking function, we are deleting the foo property of object x and after deletion, we are trying to reference deleted property foo which result undefined.
// console.log(output);

// var Employee = {
//     company: 'xyz'
//   }
//   //The code above will output xyz as output. Here emp1 object got company as prototype property. delete operator doesn't delete prototype property. emp1 object doesn't have company as its own property. you can test it console.log(emp1.hasOwnProperty('company')); //output : false However, we can delete company property directly from Employee object using delete Employee.company or we can also delete from emp1 object using __proto__ property delete emp1.__proto__.company.
//   var emp1 = Object.create(Employee);
//   delete emp1.company
//   console.log(emp1.company);


// var trees = ["redwood", "bay", "cedar", "oak", "maple"];
// delete trees[3];

// console.log(trees);

var trees = ["xyz", "xxxx", "test", "ryan", "apple"];
delete trees[3];
console.log(trees.length);



