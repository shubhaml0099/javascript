

// ------------->>-----------
// onject class

let sham = {
    fullName:'sham kumar',
    class: 10,
    age:17,
    colour:'white'
}

// update 
sham.fullName='shubham langote'
console.log(sham)

//add properties
sham.friend='yogiraj'
console.log(sham)

// delete proporties
delete sham.friend
console.log(sham)

// retrive 
console.log(sham.fullName)


///----------------------------------->>>-------------------------

//   class -------------

class person {
    fullName = undefined
    class = undefined
    age = undefined
    phoneNo = undefined
}
let shubham = new person()
console.log(shubham)

// now we can update all person data  or values

shubham.fullName = 'shubham langote'
shubham.class = 'BE MECH'
shubham.age = 25
shubham.phoneNo = 9923547239
console.log(shubham)

// adding properties

shubham.colour = 'white'
console.log(shubham)

shubham.friend = 'yogi'
console.log(shubham)

//  delete properties

delete shubham.friend
console.log(shubham)



// new class --------->>-----------

class employs {
    fullName = undefined
    workProfile = undefined
    experence = undefined
    basicSallery = undefined

}

let ram = new employs()

console.log(ram)

// update ram information 
ram.fullName =' ram sharma'
ram.experence = '3 year '
ram.workProfile = 'manager'
ram.basicSallery = 50000

console.log(ram)

ram.phoneno = 9923547239
console.log(ram)

// ----------->
let yogi = new employs

yogi.fullName = 'yogi patil'
yogi.experence = '20 years'
yogi.phoneNo = 1234567890
yogi.basicSallery = 30000
yogi.workProfile = 'machin operator'

console.log(yogi)
console.log(yogi.fullName)


//----------------------------->>>-------------------------
// setting properties of class object 
// 1> outside class 
// 2> at the time of creation of class 
// 3> set method


// 1>  Outside class

class Shubham {
    fullName = undefined
    age = undefined
    rollNo = undefined
}

let shubham1 = new Shubham

// adding values
shubham1.fullName = 'shubham langote'
shubham1.age = 25
shubham.rollNo = 32
shubham1.hight = 5.10

// update value 
shubham1.rollNo = 22

// delete propreties
delete shubham1.hight

console.log(shubham1)



// 2> at the time of creation -------->> by using constructor

class shubhamA {
    constructor(fn,ag,rn){
    
      this.fullName = fn
      this.age = ag
      this.roll=rn
    
    }
}

let shubham2 = new shubhamA('shubham langote',25,32)
console.log(shubham2)

// update values & add proporties

shubham2.fullName = 'rahul patil'
shubham2.hight = 5.10
console.log(shubham2)

// delite & retrive 

delete shubham2.hight
console.log(shubham2)
console.log (shubham2.roll)


// 3>  set method   
// in this method we can not add properties from outside   

class ShubhamB {
    setfullName(fn){
        this.fullName = fn
    }
    setage(ag){
        this.age = ag
    }
    setrollNo(rn){
        this.rollNo = rn
    }
}

let shubham3 = new ShubhamB()

shubham3.setfullName('shubham langote')
shubham3.setage(25)
shubham3.setrollNo(32)

console.log(shubham3)

 shubham3.setfullName('rahul patil')
console.log(shubham3)



// --------------->>-----------------------------------------
// bank class 

// acountName, accountNo,balance, withdrol,deposit 
class bank {
  constructor(accn,accno,bl){
      this.accountNumber = accno
      this.accountName = accn
      this.balance = bl
      this.trangection = []
  }
  deposit(amount){

      this.balance = this.balance + amount
      console.log(`current balance is = ${this.balance}`)
      this.trangection.push(amount)
                }
  withDrol(amount){
     if (this.balance > amount){
         this.balance = this.balance - amount
         console.log(`current balance is = ${this.balance}`) 
        }else{
            console.log(`your balance is insufficent ${this.balance}`)
        }
        this.trangection.push(-amount)
    
    }        
}

let cash = new bank('shubham langote',4850,100000)
console.log(cash)
cash.deposit(100000)
//console.log(cash)
cash.withDrol(50000)
console.log(cash.trangection)
console.log(cash)





// for in loop
let raj = {
    fullName:'shubham shane',
    class: 'BE MECH',
    age : 25,
}
raj.hight=5.10

for (key in raj ){
    raj.hight=5.10
    console.log(key,raj[key])
}


// class object 
//1> outside class  2> innside class by using constractor  3> set method 

class Labour {

    setfullName(fn){
        this.fullName = fn
    } 
    setvillage(vl){
        this.village = vl
    }
    setage(ag){
        this.age = ag
    }
    setrollNo(no){
        this.rollNo=no
    }
   
}
let rama = new Labour()
rama.setfullName('subham')
rama.setvillage('tisangi')
rama.setage(30)
rama.setrollNo(120)
console.log(rama)

// rahul = new Labour('amol raut','pandharpur',38)

// rahul.fullName = 'rahul raut'
// rahul.age = 38
// rahul.experance = '10 year'
// rahul.village = 'mahud'
// rahul.jobprofile = 'welder'

// console.log(rahul)



cash.withDrol(1000000)


