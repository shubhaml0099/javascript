// map or normal object 



let person = {
    fullName:"chinmay",
    age:23
}

person.size
// update 

person.age = 34

// delete 

delete person.fullName

// retrive

console.log(person.fullName)

// add 

person.language = "Marathi"

// Map and Object 

// Map keys can be any data type 


let mapA = new Map()
// let names = new Array()
// let firstName = new String("Hello")


let numbers = [22,33,44,55,66,77]
let person2 = {
    fullName:"chinmay",
    age:2021,
    skills:[11,22,33,44,55]
}

// set 
// action -- to set the key value for a map 
// returns the map only

mapA.set(11,"ram")
mapA.set(true,"isAdult")
mapA.set(numbers,"marks")
mapA.set(person2,"info")
let rr = mapA.set("chinmay","info")
console.log(rr)

// get ---> 

// get ---
// actions the value for passed key

mapA.get(11)
mapA.get(true)
mapA.get(numbers)
mapA.get(person2)
let g = mapA.get('chinmay')
console.log(g)

// get and set 

console.log(mapA.keys())
console.log(mapA.values())
console.log(mapA.entries())

// mapA.delete(true)
// console.log(mapA)

// mapA.clear()
// console.log(mapA)




// set() , get() , keys() , values(), entries(), delete() ,clear()
console.log(mapA.size)

// let arr = ["chinmay","admin"]
// let [key,value] = arr
// console.log(a)


let roles = new Map([

    ["chinmay","admin"],
    ["amol","CA"],
    ["poorva","CS"],
    ["Ram","Dr"],


])

console.log(roles)


// array
for(let key of roles){
    console.log(key)
}

// keys 

for(let key of roles.keys()){
    console.log(key)
}

// values 

for(let key of roles.values()){
    console.log(key)
}

// key and value (item)

for(let [key,val] of roles.entries()){
    console.log(key,val)
}

// Sets

let a = new Set()
a.add('ram')   
console.log(a)




















// roles.set('admin',"chinmay")
// console.log(roles)





// person = {
//     fullName:"chinmay",
//     age:23
// }


// let counter = 0 
// for(let key in person){
//     counter = counter + 1
//     console.log(key,person[key])
// }

// console.log(counter)


