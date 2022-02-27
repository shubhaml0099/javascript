// // program One
// class Person {

//     skills = undefined
//     age= undefined
//     rollNo= undefined
    

// }
// // outside the class 
// let amol = new Person()
// console.log(amol)
// amol.age = 23
// amol['skills'] = ["python","html","css"]
// amol.rollNo = 23
// console.log(amol)

// // program 2 
// // Setting the values using construtor 

// class Person2 {
//     constructor(fullName,age,rollNo){
//         this.fullName = fullName
//         this.age = age ,
//         this.rollNo = rollNo
//     }

// }

// let chinmay = new Person2("chinmay deshpande",23,34)
// console.log(chinmay)

// // program 3 
// // using set function 


// class Person3 {

//     setAge(age){

//         this.age = age

//     }

//     setFullName(fullName){
//         this.fullName = fullName
        
//     }
//     setRoll(rollNo){
//         this.rollNo = rollNo
        
//     }


// }

// let poorva = new Person3()
// poorva.setAge(12)
// poorva.setFullName("poorva vyas")
// poorva.setRoll(12)
// console.log(poorva)

// Every in js is obj
// obj have property and methods 
// method - action and return 

// to create object we have classes
// Bank class --- > accName , accNo , Bal, transactions
// withdrawl and depoist


class Bank{

    constructor(accName, accNo , Bal){
        this.accName = accName
        this.accNo = accNo
        this.Bal = Bal
        this.transactions = []

    }

    depoist(amount){
        this.transactions.push(amount)
        this.Bal = this.Bal + amount
        console.log(`The current bal is ${this.Bal}`)
        return this.Bal
    }
    withDrawl(amount){
        if(amount < this.Bal){
            this.transactions.push(-amount)
            this.Bal = this.Bal - amount
            console.log(`The current bal is ${this.Bal}`)
            return this.Bal 
        }
        else {
            console.log(`In sufficient funds`)
        }
    }
    lastFivetransactions(){
        console.log(this.transactions.slice(-5).reverse())

    }


    totalTransactionSum(){

        let total = this.transactions.reduce(function(acc,el){
            return acc + Math.abs(el)
        })
        console.log(total)
        return total

    }


}


// Five object

let accounts = [
    new Bank("chinmay",1,10000),
    new Bank("ram",2,2000),
    new Bank("sham",2,2000)
]


// forEach

accounts.forEach(function(el){
    el.Bal = el.Bal + 2000
})

accounts.forEach(function(el){
   console.log(el)
})

let totalVal = accounts.reduce(function(acc,el){
    return acc + el.Bal
},0)
console.log(totalVal)

// add companyName = "Minskole"


accounts.forEach(function(el){
    el.companyName = "Minskole"
})

accounts.forEach(function(el){
    console.log(el)
})

 // MIN1

 accounts.forEach(function(el){
    el.accNo = `MIN${el.accNo}`
})

accounts.forEach(function(el){
    console.log(el)
})









// let daksh = new Bank("Daksh D",123,100000)
// daksh.depoist(1000)
// daksh.withDrawl(500)
// daksh.depoist(10000000000)
// daksh.withDrawl(5000)
// daksh.depoist(100000000000)
// daksh.withDrawl(300)
// daksh.lastFivetransactions()
// daksh.totalTransactionSum()



// Math.abs(-122) // 122
// Math.abs(122)// 122












