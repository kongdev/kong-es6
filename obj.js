/*
var obj1 = { a: 1, b: 2 }
var obj2 = { a: 2, c: 3, d: 4}
var obj3 = Object.assign(obj1, obj2)
*/

/*
const obj1 = { a: 1, b: 2 }
const obj2 = { a: 2, c: 3, d: 4}
const obj3 = {...obj1, ...obj2}
*/

//console.log(obj3)

/*
let obj1 = { a: 1, b: 2 }
let obj2 = { c: 3, d: 4 }
console.log({ ...obj1, ...obj2 }) // {"a":1,"b":2,"c":3,"d":4}
*/

/*
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
console.log([...arr1, ...arr2]) // [1,2,3,4,5,6]
*/


// ES5
/*
const obj = {
    foo: function () { return 'kong-dev'}
}
*/

// ES6
/*
const obj = {
    foo() { return 'kong-dev'}
}
*/



//console.log(obj.foo())





// ES5
/*
const foo = 'foo'
const bar = 'bar'

const obj = {
  foo: foo,
  bar: bar
}
*/

// ES6
/*
const foo = 'foo'
const bar = 'bar'

const obj = {
  foo,
  bar
}
*/

//console.log(obj)

