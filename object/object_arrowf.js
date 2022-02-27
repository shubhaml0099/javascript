
// differense use of arrow function and function expretion 


// if you have object and function expression inside an object ,
// scope of this is object itself , 
// but another function inside function expressions changes the scope of thid keyword to scope
// arrow functions takes the scope of its immediate parent

//program 1

// let shubham = {
//     fullName:'shubham langote',
//     rollNo:32,
//     age: 25,

//     display:function(){
//         console.log(this.fullName)
//         console.log(this.rollNo)
//     }
    

// }
// console.log(shubham)
// shubham.display()

//program 2

//var fullName = 'raju rede'

// yogiraj = {
//     fullName:'yogi patil',
//     age:35,
//     roll:55,

//     display:function(){
//         console.log(this.fullName)

//         function yogiraj2(){
//             console.log(this.fullName)
//         }
//      yogiraj2()

//     }

// }
// yogiraj.display()

//its conclude that when we use function in function with function decliration second function this. is refer to global value


// // program 3

let Person = {
    fullName:'yogi patil',
    age:35,
    roll:55,

    display: function(){
        console.log(this.fullName)

        yogiraj2= ()=>{
            console.log(this.fullName)
        }
     yogiraj2()

    }

}
Person.display()

var firstName='shubham '
var lastName='langote'

let Employ ={
    firstName:'shubham ',
    lastName:'langote',
    age: 25,

    display: function(){
        console.log(this.firstName)

        dip1=()=>{
            console.log(this.lastName)
        }
        dip1()
    }
}
console.log(Employ)
Employ.display()