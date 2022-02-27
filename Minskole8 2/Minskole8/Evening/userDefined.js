
// let amol = {
//     fullName:"amol rao",
//     age:12,
//     skill:["python","javascript","css"]
// }

// let chinmay = {
//     fullName:"chinmay",
//     age:33,
//     skill:["python","java","css3"]
// }
// // object literals
// // 10 -12

// class Person {

//     fullName = undefined
//     age = undefined
//     skill= []

// }


// let amol2 = new Person()
// let chinmay2 = new Person()
// console.log(amol2)
// console.log(chinmay2)


// // updating the property value outside the class

// // update
// amol2.fullName = "amol rao"
// amol2.skill = ["python","java"]
// amol2['age'] = 23

// // add 
// amol2.language = "hindi"
// console.log(amol2)
// console.log(chinmay2)



// // upating chinmay2
// chinmay2.fullName = "chinmay deshpande"
// chinmay2.skill = ["python3","java"]
// chinmay2['age'] = 25
// console.log(chinmay2)


// console.log(amol)
// console.log(chinmay)


// 2 

// Updating the property values at the time of object creation

// class Person3{

//     constructor(fn,roll,age){
//         this.fullName = fn
//         this.rollNumber = roll
//         this.age = age 

//     }


// }


// // current address
// let chinmay3 = new Person3("chinmay deshpade",23,29)
// let amol3 = new Person3("amol",26,30)

// console.log(chinmay3)
// console.log(amol3)


// // using set method

// class Person4{

//     setAge(ag){
//         this.age = ag
//     }

//     setFullName(fn){
//         this.fullName = fn
//     }

//     setRoll(roll){
//         this.roll = roll
//     }


// }

// let amol4 = new Person4()

// amol4.setAge(12)
// amol4.setFullName("chinmay")
// amol4.setRoll(23)
// console.log(amol4)


//================================> 

//class -- outside the class
// using constructor 
// using set method



// class Vehicle {

//     color = undefined
//     regNo = undefined

// }


// let audi = new Vehicle()
// let bmw = new Vehicle()

// console.log(audi)
// console.log(bmw)
// // outside 

// audi.color = "red"
// audi.regNo = 777
// console.log(audi)



// 2  at time  of object creation  using contructor
// class Vehicle2 {

//     constructor(cl,regN){
//         this.color = cl
//         this.regNo = regN
//     }
// }

// let audi = new Vehicle2("red",777)
// let bmw = new Vehicle2("black",888)

// console.log(audi)
// console.log(bmw)

//--------------------------------

class Vehicle3 {

   setColor(cl){
       this.color = cl
   }

   setRegNo(no){
    this.regNo = no
}
}

let audi3 = new Vehicle3()
let bmw3 = new Vehicle3()


audi3.setColor("red")
audi3.setRegNo(111)

console.log(audi3)





























