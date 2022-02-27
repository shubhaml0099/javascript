let g = 10 
console.log(typeof g)

let n = "chinmay deshpande"
console.log(typeof n)

let m = true 
console.log(typeof m)

let j = [1,2,3,5]
console.log(typeof j)

let person = {

    age:12,
    skills:[11,22,33]


}
console.log(typeof person)

// let headingOne = document.querySelector('h1')
// console.log(typeof headingOne)

class Person {

    constructor(fname,roll,age){
        this.fname = fname
        this.roll = roll 
        this.age = age
    }

    display(){
        console.log(this.display)
    }


}

let amol = new Person("chinmay",12,13)
console.log(typeof amol)
console.log(amol instanceof Person)
amol.display()


// object --- property and method



// Map and object 

// They both stores the data in key , value 

let r = {
    fullName:"chinmay deshpande",
    rollNo:23
}

// map -- array , boolean , object 

let a = new Map() // Map

// let ra = new Array(); // array

// let ray = new String("Ram")

// let a = [1,2,3]
// let abc = "chinmay"

let aaa = ["birthPlace","currentCity"]
let bbb = {admin:"chinmay",leader:"chaitanye"}

let mapOne  = new Map()
mapOne.set("name","chinmay")
mapOne.set(true,"Married")
mapOne.set(aaa,["chandrapur",'pune'])
mapOne.set(bbb,"Employee")
console.log(mapOne)


// obj 

let persona = {
    fullName:"ram sharma",
    age:23

}

// set 
persona.language = "Hindi"
// get in object
console.log(persona)
console.log(persona.fullName)

// get  in map 

console.log(mapOne.get(true))
console.log(mapOne.get(aaa))
console.log(mapOne.get(bbb))

// set and get 


// method ===> action and return 

console.log(mapOne.get(true))
console.log(mapOne.set(1,2))
console.log(mapOne.values())
console.log(mapOne.keys())
console.log(mapOne.entries())

// Destructure..........
// Maps 


//let roles = new Map()

//myMap.set(1, "Rohan").set(2, "Sohan").set(3, "Trojan");
//roles.set('john',"admin")

let roles = new Map([
    ['john','admin'],
    ['chinmay','teacher'],
    ['daksha','student']
])

console.log(roles)

//------------>


for(let key of roles.keys()){
    console.log(key)
}

for(let val of roles.values()){
    console.log(val)
}

for(let [key,value] of roles.entries()){
    console.log(key,value)
}

console.log(roles.size)
//roles.clear()
console.log(roles)

roles.delete('john')
console.log(roles)

// set get values() , keys() , entries() ,clear() , delete()
// size 














