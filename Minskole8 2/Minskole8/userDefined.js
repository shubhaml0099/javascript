

// string // regular expression 

// array 

// objects

// functions

// Html element 

// user defined ()====>

// sets 

// maps 

// object literals 

// let amol = {
//     fullName:"amol rao",
//     age:23,
//     rollNumber:23,
//     skills:["c","python"]
// }

// let chinmay = {
//     fullName:"chinmay deshpabde",
//     age:30,
//     rollNumber:15,
//     skills:["c","python"]
// }

// let gauri = {
//     fullName:"gauri kanhe",
//     age:30,
//     rollNumber:15,
//     skills:["c","python"]
// }

// // Retrive  Update  Create and delete


// class Person {

//     fullName= undefined
//     rollNumber= undefined
//     age= undefined
//     skills= undefined

// }

// let amol2 = new Person()
// console.log(amol2)
// let chinmay2 = new Person()
// amol2.age = 10

// console.log(amol2)
// console.log(chinmay2)

// chinmay2.lang = "Marathi"
// console.log(chinmay2)


//================================================>


class Person2{

    fullName = undefined
    age= undefined

    display(){
        console.log("Hello "+this.fullName)
    }


}

// setting the properties outside the class

let shraddha = new Person2()
// property ??
// method??

shraddha.age = 40
shraddha.fullName = "shraddha"
//-----------------
console.log(shraddha.fullName)
console.log(shraddha['fullName'])
shraddha.display()


let chi = new Person2()
chi.fullName = "chinmay"
chi.age = 34
chi.display()


//---------------------------------------------->
//setting the property at the time of object creation

class Person3 {

    // constructor 
    constructor(a,b,c){
        this.fullName = a
        this.age = b
        this.rollN = c

    }

    display(){
        console.log(this.fullName)
    }


}

let amol5 = new Person3("chinmay",12,33)
let amol6 = new Person3("amollll",122,333333)

console.log(amol5)
console.log(amol6)

amol5.display()
console.log(amol5.age)


//- using set method
class Person4 {

    setAge(age){
        this.age = age
    }

    setRoll(rn){
        this.roll = rn
    }

    setName(str){
        this.fullName = str
    }



}

let sam = new Person4()
sam.setAge(30)
sam.setRoll(300)
sam.setName("ram")
console.log(sam)

// outside the class 
// at the time object creation // constructor 
// using set method










