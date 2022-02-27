//OBJECT 
//methods of object--------->>----
let person = {
    firstName :'shubham',
    lastName :'langote',
    rollNo : 32,
    age : 25
}
console.log(person.firstName)


// update ------------>>
// update by using .notation , 
// update by using bracket[]notation 
person.firstName='rahul' 
console.log(person)   // by using .notation
person['firstName']='shubham'
console.log(person)

// add 
// add the new keys
person.girlfriend='pc'
//console.log(person)
person['friend']='yogi'
console.log(person)

// delete keys------------->>_
delete person.girlfriend
console.log(person)
delete person['friend']
console.log(person)

// add the key -------->>
person.bouys='rahul'
person['bouys']='ram'
delete person.bouys
console.log(person)