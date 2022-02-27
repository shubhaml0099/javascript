
// in javascript avery object has some proporties and methods//

//methods type // each method working on string value//

//toUppercase method-- each string value dhown in capital letter //

let vegetable ="tomato"
let cc= vegetable.toUpperCase()
console.log(cc)


//methode toLower case// write in small later

let car="fourtuner"
let www=car.toLowerCase().toUpperCase().toUpperCase().length
console.log(www)

//methods indexOf// used for finding index value //

let comp="delol"
let dd=comp.indexOf('l')
console.log(dd)

//method include// used for finding inside string value if available ans--is true, not available ans--is fals //

let hotel='dremland'
let hhh=hotel.includes('d')
console.log(hhh)

// all four methods--toUppercase(),toLowercase(),indexOf,include, all are using togather //

let colleg ='sinhgad'
let clg=colleg.toUpperCase()
let a=colleg.toLowerCase()
let b=colleg.indexOf('h')// showing index value of 'h'
let g=colleg.indexOf('r')//ans=> is -1 due to thear in string no 'r' word is available//
let c=colleg.includes('d')
let d=colleg.includes('w')//ans=> is false due to thear is no 'w' 
console.log(clg)
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(g)



//problems in include type not running and not boolen value giving //

let city='pune'
let ddd=city.includes('d')
console.log(ddd)

