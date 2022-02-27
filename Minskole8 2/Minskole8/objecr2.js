// string  array --- revise , object

//let amol = ["amol","rao",23,24]

// object -- properties and methods

// object literal 


let amol = {
    firstName:"amol",
    lastName:"rao",
    age:23,
    rollNo:34
}

// dot notation does not work inside the loop 
for(let key in amol){
    console.log(key,amol[key])

}




// Retirve  (dot notation/ Bracket notation)

console.log(amol.firstName)
console.log(amol['firstName'])
// Update 

amol.firstName = "amol R"
amol['firstName'] =  "ram"

// Del 
delete amol['age']
delete amol.age

// Add
amol.language = "Hindi"
console.log(amol)

//-------------------------------->



let students = [

    {
        fullName:"chinmay deshpabde",
        marks:34,
        city:"pune",
        skills:["python","js","html","css"]

    },

    {
        fullName:"poorva vyas",
        marks:30,
        city:"ujjain",
        skills:["jquery","html3","css3"]

    },

    {
        fullName:"amit bhure",
        marks:40,
        city:"nagpur",
        skills:["python","jquery","ruby"]

    },

    {
        fullName:"amol",
        marks:42,
        city:"pune",
        skills:["python","MSBI"]

    }

]

//console.log(students[0]['fullName'])
students.forEach(function(el,index){
    console.log(`student info ${index+1}`)
    console.log(el.fullName)
    console.log(el.marks)
    console.log(el.city)
    console.log(el.skills)

})

// program --- number of skill


// amol : 3

students.forEach(function(el){
    console.log(`${el.fullName}: ${el.skills.length}`)
})

// Add country = "India" to all objects 

students.forEach(function(el){
    el.country = "India"
})


students.forEach(function(el){
    el.marks = el.marks + 2
 })

 students.forEach(function(el){
    console.log(el)
 })

 // -------------------------->
 // user belong to pune city 

 console.log('----------')
 let arr = students.filter(function(el){
     return el.city === "pune"
 })
 arr.forEach(function(el){
     console.log(el['fullName'])
 })

 // user with skill python
 let tyy = students.filter(function(el){
    return el.skills.includes('python')
})
console.log(tyy)


tyy.forEach(function(el){
    console.log(el.fullName)
})

// average marks of all students 


let marksAddition = students.reduce(function(acc,el){

    return acc + el.marks

},0)

console.log(marksAddition/students.length)



























