

let person = ["chinmay","deshpande",12,14]

// Array stores the value by index

// Retrive the value 
console.log(person[0])
console.log(person[0])

// Updating the value 
person[0] = "amol"
console.log(person)

// push and unshift (add)
person.push("Hindi")
person.unshift('Mr')
console.log(person)

// pop and shift 
person.shift()
person.pop()
console.log(person)

// Retrive // Update // Delete / Add

//------------------------


let person2 = {
    firstName:"chinmay",
    lastName:"deshpande",
    rollNo:12,
    age:14

}

//---------------------->
// Retrive --->
console.log(person2.firstName)
// Bracket notation
console.log(person2['firstName'])





// update (.notation/ bracketnotation)

console.log(person2)
person2['firstName'] = "ram"
console.log(person2)
person2.firstName = "sham"
console.log(person2)

// adding the new value (.notation, bracket)

person2.language = "Hindi"
console.log(person2)
person2['language'] = "Marathi"
console.log(person2)
person2['skills'] = ["python","html","css"]
console.log(person2)
// delete  (item)

delete person2.skills
console.log(person2)

//delete person2['skills']
//--------------------->

let amol = {

    fullName:"amol rao",
    age:34
}

// retrive
// (objectName.propertyName)
// (objectName['propertyName'])

console.log(amol.fullName)

// update 
amol.fullName = "chinmay"
console.log(amol)

// add 
amol.lastName = "deshpande"
console.log(amol)

// delete 

delete amol.lastName
console.log(amol)


// let arr = [11,22,33]
// for(let i = 0 ; i < arr.length ;i++){
//     console.log(arr[i]+2)
// }


let nilam = {
    fullName:"nilam",
    age:30,
    skills:["python","javascript"]
}
//console.log(nilam['fullName'])
// . notation does not work inside object


// syntax
for(let property in amol){
    console.log(property,amol[property])
}


let namei = ["chinmay","deshpabde",7709192441]
let aaaa = namei.join("-")
console.log(aaaa)
console.log(typeof aaaa)

let rrrr = aaaa.split('-')
console.log(rrrr)