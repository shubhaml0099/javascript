

// apply()

// call()

// bind()

// let shubham = {
//     firstName : "shubham",
//     lastName: "langote",
//     display:function(){
//         console.log(`${this.firstName} ${this.lastName}`)
//     }
// }
// console.log(shubham)
// shubham.display()

// let ganesh ={
//     firstName:"ganesh ",
//     lastName:"mahanvar"
// }
// console.log(ganesh)
// let rr = shubham.display.bind(ganesh)
 
// rr()



// // i am not attending this session so i not inderstand 


// let personOne = {
//     firstName:'john',
//     lastName:'Doe',
//     printName:function(){
//         console.log(`${this.firstName} ${this.lastName}`)
//     }
// }


// personOne.printName()

// let personTwo = {
//     firstName:'Ram',
//     lastName:'Sham',
// }

// personTwo.printName2 = personOne.printName
// personTwo.printName2()

// var firstName = "ad"
// var lastName = "cd"


// let amolOne = {
//     firstName:"amol",
//     lastName:"rao",
//     display:function(){
//         console.log(this.firstName,this.lastName)
//     }
// }
// amolOne.display()

// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }

// let fn = amolOne.display.bind(chinmay) // this ===> chinmay
// // console.log(fn)
// fn()

// Apply , bind , call

// let fn = function(){
//     console.log(chinmay.firstName,chinmay.lastName)
// }





// chinmay.fn = amolOne.display
// chinmay.fn()

let amol2 = {

    fn:"amol",
    ln:"rao",
    display:function(){
        console.log(this.fn, this.ln)
    }

}
amol2.display()

let chinmay2 = {
    fn:"c",
    ln:"d",
}

let j = amol2.display.bind(chinmay2)
j()

// let j = function(){
//     console.log(this.fn, this.ln)
// }

// call 
function greeting(){
    console.log(`Hi i am new to javascript I am ${this.age} years old and my name is id ${this.firstName}`)

}
let poorva = {
    firstName:"poorva vyas",
    age:23
}
let rasika = {
    firstName:"rasika kulkarni",
    age:25
}

greeting.call(poorva)
greeting.call(rasika)



// Apply()
function greeting(a,b){
    console.log(`Hi i am new to javascript I am ${this.age} years old and my name is id ${this.firstName}
    ${a} ${b}`)

}

let poorva2 = {
    firstName:"poorva vyas",
    age:23
}
let rasika2 = {
    firstName:"rasika kulkarni",
    age:25
}

greeting.apply(poorva2,[23,"pv"])




function printName(Cname){
    console.log(this.firstName,this.lastName)
    console.log(Cname)
}


let hari = {
    firstName:"hari",
    lastName : "prasad"
}

//printName.call(hari,"hariprasad2")

printName.apply(hari,["hariprasad2"])


// apply()

// call()

// bind()


class Bank {
    constructor(fn){
        this.firstName = fn 
    }

    static displayName(){
        console.log(this.firstName)
    }

}

let sbi = new Bank("SBI")

Bank.displayName.bind(sbi)()
Bank.displayName.call(sbi)
Bank.displayName.apply(sbi)