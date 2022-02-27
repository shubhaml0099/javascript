
// Object literal

// DOM
let amol = {
    fullName:"amol rao",
    age:23,
    roll:34
}

let chinmay = {
    fullName:"chinmay deshpande",
    age:22,
    roll:33
}

// update 
chinmay.fullName = "chinmay shishish deshpande"
// add
chinmay.lang = "marathi"
// retrive
console.log(chinmay['lang'])
// delete 
delete chinmay.age
//-------------------------------------------->




// setting the object values outside the class
class Person {
    // class Name should always start from capital letters 
    fullName = undefined
    roll= undefined
    age= undefined

}

let amol2 = new Person() // constructor
console.log(amol2)

// update amol2 

amol2['fullName'] = "amol rao"
amol2.roll = 23
amol2.age = 23
console.log(amol2)

// adding  the new property 
amol2.lang = "marathi"
console.log(amol2)

// retrive
console.log(amol2['fullName'])
// del 
delete amol2.lang
console.log(amol2)

// every object will have different property values 
//setting the object  values at the time of object creation



class Person2 {


    constructor(fn,ag,rn){
        this.fullName = fn
        this.age = ag
        this.rollNo = rn
    }

    display(){
        console.log(this.fullName)
    }

    // similar to function 
    // return objects with return keyword
}

let amol3 = new Person2("amol3 rao",12,23)
let poojaN = new Person2('pooja kale',23,45)  // constructor function call
console.log(amol3)
console.log(poojaN)
amol3.display()

// amol3
amol3.fullName = "amol rao"



// setting the property of class object 

//1) outside the class 
//2) At the time of object creation 
//3) set Method

class Person4 {

    setAge(a){
        this.age = a
    }

    setFullName(fn){
        this.fullName = fn
    }

    setRollNumber(rn){
        this.rollNo = rn
    }


}

let amol4 = new Person4()
console.log(amol4)
amol4.setAge(12)
console.log(amol4)
amol4.setFullName("chinmay deshpande")
amol4.setRollNumber(34)
console.log(amol4)

// amol4 
amol4.setFullName('am rao')
console.log(amol4)

// class Bank 

// bank 

// accName , accNo , bal 
// depoist(), withdrawls(), transactions() // last 5 transactions

class Bank {

    constructor(fn, accn, bal){

        this.fullName  = fn
        this.accNumber = accn
        this.bal = bal
        this.transaction =[]
    }

    depoist(amount){

        this.transaction.push(amount)
        this.bal = this.bal + amount
        console.log(`The current bal is  ${this.bal}`)
        return this.bal
    }

    withDrawl(amount){

        if(this.bal > amount){
            this.transaction.push(-amount)
            this.bal = this.bal - amount
            console.log(`The current bal is  ${this.bal}`)
            return this.bal
        }
        else{
            console.log('Insufficient funds')
        }


    }

}

let pooja = new Bank("pooja kale",1,10000000)
console.log(pooja)

pooja.depoist(10000000)
console.log(pooja)

pooja.withDrawl(10000000)
console.log(pooja)










































