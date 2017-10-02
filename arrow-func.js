function squ (x){
    return x*x
}

/*var squ = function(x){
    return x*x
}*/

/*const squ = function(x){
    return x*x
}*/

/*const squ = (x)=>{
    return x*x
}*/

/*
const squ = (x)=> x*x
*/

//console.log(squ(2))



/* =============== Default Values ============ */ 

/*
function foo(gender){
    return gender = gender || 'male'
}
*/

function foo(gender = 'male')
{
    return gender
}


console.log(foo())