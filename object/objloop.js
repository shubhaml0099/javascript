
// object loop --------->>

// in object  values store in keys 
// also object do not store duplicate value
let team = {
    teamName :    'rising star',
    teamMembar: 20,
    teamSlogan: 'every thing is possible',
   // teamMembar: 40                           //------->> object do nat store duplicate values like arry

}
console.log(team)

// loop on object ------------>>

for (let key in team){
    console.log(key)
    console.log(key,  team[key])
}

team.reng=32
console.log(team)

team.reng=34
console.log(team)

delete team.reng
console.log(team)


//now loop 
for (key in team){
    console.log(key,team[key])
}
