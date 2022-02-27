let person = ["amol","rao",12,34,12]

// Retrive
console.log(person[0])

// Update 
person[0]= "chinmay"
//["chinmay","rao",12,34]

// Addition ---Push or unshift
person.push('Marathi')

console.log(person)

// we can store duplicate value in array 



let personA = {
    fullName:"amol",
    lastName:"rao",
    age:12,
    rollNo:34
}

// Object does not store the value by index

// retrive

// .dot notation and bracket notation

//syntax

//objName.propertyName (dot notation)
//objName['propertyName'](bracketnotation)

let yy = personA.fullName
let yy2 = personA['fullName']
console.log(yy)
console.log(yy2)

// update --- dot notation and bracket notation 
personA.fullName = "chinmay"
console.log(personA.fullName)
personA['fullName'] ="poorva" 
console.log(personA.fullName)

// addition dot notation and bracket notation 

personA.language = "Marathi"
personA['city'] = "pune"
console.log(personA)

// deleting the value 

delete personA['language']
delete personA.city

console.log(personA)

//------------------------------->


let vehicle = {
    color:"red",
    reNo:23,
    color:"green"
}
// retrive

// console.log(vehicle.color)
// vehicle.color = "blue"
// vehicle.company = "Audi"
// console.log(vehicle)
// delete vehicle.company
// console.log(vehicle)

console.log(vehicle)

// does not  store duplicate value if methioned twice consider later as updated value 


let vehicle2 = {
    color:"red",
    reNo:23,
    color:"green"
}

//------------------------>

let k = [1,2,3]

for(let i = 0 ; i < k.length ;i++){
    console.log(k[i])
}



console.log('========>')

vehicle2 = {
    color:"red",
    reNo:23,

}

// dot notation does not work inside loop
//console.log(vehicle2['color'])

// Loop 

for(let key in vehicle2){
    console.log(key,vehicle2[key])
}

//---------------------------------->



let amol = {

    fullName:"amol rao",
    rollNo:34,
    age:22,
    skills:["python","javascript","c"],
    parents:{
        father:"shirish",
        mother:"kanchan"

    },
    isMarried:true

}

for(let key in amol){
    console.log(key,amol[key])
}



































// Retrive -- facebook

//retrive  --- amol
// create --- post / signup
// update -- profile pic
// delete -- post