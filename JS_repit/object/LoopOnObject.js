// object loop


let student = {
    FullName: 'shubham langote',
    Age: '24',
    Skill: ['paython', 'js', 'cypress', 'postman']
}

// dot .  notation dos not work in side loop 

for (let key in student) {
    console.log([key])

    console.log(key, student[key])

}


let student2 = {
    fullName: "poorva deshpande",
    age: 12,
    skills: "python3"
}

for (let key in student2) {
    console.log(key, student2[key])
}

let studentSection = [
    {
        fullName: "chinmnay deshpande",
        age: 23,
        skills: ["python", "java", "javacript"]

    },
    {
        fullName: "poorva vyas",
        age: 32,
        skills: ["python", "html", "css"] // javascript

    },
    {
        fullName: "anjali rai",
        age: 33,
        skills: ["python", "c", "css"]
    }
]

console.log(studentSection[0]['age'])
console.log(studentSection[2].skills.push('java'))
console.log(studentSection[2].fullName = 'shubham langote')
console.log(studentSection[2])

  delete studentSection[1].skills[2]
  console.log(studentSection[1]) 
  studentSection[1].skills.push('java')
  console.log(studentSection[1])