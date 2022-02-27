// arry ------> 

//  push -------> add last element of arry 
let car = ['honda', 'benili', 'wagnora', 'hundai', 'audi']
console.log(car)
let dd = car.push('nissan')
console.log(dd)
console.log(car)
console.log(typeof dd)

// pop method 
let d1 = car.pop()
console.log(d1)
console.log(car)

// shift-------> remove 1st elementof arry
let d2 = car.shift()
console.log(d2)
console.log(car)

// unshift --------> adding 1st element in arry 
let d3 = car.unshift('indover')
console.log(d3)
console.log(car)

// indexof and include method used on arry 
let surname = ['yelpale','rede','kale','patil','langote',]
let sur = surname.includes('yelpale')
console.log(sur)
console.log(typeof sur)//----------> boolen because value comes in true or false

//indexOf----------->

let sdr = surname.indexOf('rede')
console.log(sdr)
console.log(typeof sdr)

//slice--------------->
let zz = surname.slice(0)
console.log(zz)
let dd5 = surname.slice(-4,4)
console.log(dd5)
let dd7 = surname.slice(-2,-4)//---------------> output is blank arry because starting value should be smaller smaler
console.log(dd7)

// methods on arry--------> push,pop,shift,unshift,indexOf,include,slice.
