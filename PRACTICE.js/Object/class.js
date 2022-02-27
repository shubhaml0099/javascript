

// by using simpal object we can creat object but for creating user defining object we need for class 
// user defined object 

class shub{
    fullname="shubham"
    lastname="langote"
    age=25
}

let raj = new shub()
raj.fullname="raj patil"
raj.lastname="patil"
raj.age=30

console.log(raj)

// types of class base on set properties 
//1> set properties outside the class 
//2> set properties at the time of creation of class
//3> set property by using set method 



//1> set properties outside the class 

class ram {
    fullname=undefined
    lastname=undefined
    age=undefined
}
let ram1 = new ram()
ram1.fullname="ram singh"
ram1.lastname="singh"
ram1.hight=10
console.log(ram1)

//2> set properties at the time of creation of class by using constructor

class raju{
    constructor(fn,ln,ag,){
        this.fullname=fn
        this.lastname=ln
        this.age=ag
    }
}
let raju1 = new raju('shubham','langote',25)
console.log(raju1)
raju1.hight=8.0
console.log(raju1)
delete raju1.hight
console.log(raju1)

//3> set property by using set method 

class rani{
    setfullname(fn){
        this.fullname='shubham'
    }
    setage(ag){
        this.age=34
    }

}
let rani1 = new rani()
rani1.setfullname='shubham'
rani1.hight=10
 rani1.setage=78
 delete rani1.setfullname

console.log(rani1)
