///< reference type = "cypress"/>
// push() ,pop(), shift(),unshift()

let student = ['shubham','yogiraj','krishna','vishvajit']

let std = student.push('sanjay')
console.log(std)

console.log(student)

console.log(student.pop())
console.log(student.shift())
console.log(student.unshift('krishna'))
console.log(student)//[ 'krishna', 'yogiraj', 'krishna', 'vishvajit' ]

let rr = student.slice(1,3)
console.log(rr)
console.log(student)
let rr1 =student.splice(1,3,'shubham','sanjay','rani')
console.log(rr1)
console.log(student)  //[ 'krishna', 'shubham', 'sanjay', 'vishvajit' ]

let rrr= ['shubham','snjay','rani','raj','rahul']
console.log(rrr.splice(1,3,'rr','rr','rr'))
console.log(rrr)


let yogi =['shubham','snjay','rani','raj','rahul']

console.log(yogi.slice(1,4))
console.log(yogi)


let string = 'india hello iam shubham guys'
console.log(string.split(' '))

let number = [10,28,36,46,93]

let ss = number.fill( [ 230, 120 ],1,3)
console.log(ss)


let number2 = [10,28,36,46,93]
console.log(number2.indexOf(40))   // if value is available in arry then iot print index valu other whise it print -1 valus 

console.log(number2.includes(28))   // 

let everr = number2.every(function(el){
    return el>8
})

console.log(everr)
let ever22 = number2.some(function(el){
    return el>20
})

console.log(ever22)


//findIndex()
let number44 = [10,36,46,28,93,28]
console.log(number44.findIndex(el=>{   //Returns the index of the first element in the array where predicate is true, and -1 otherwise.
    return el == 280
})) 

console.log(number44.find(function(el){ //Returns the value of the first element in the array where predicate is true, and undefined otherwise.
    return el == 28
}))

//sort()

console.log(number44.sort())   // Sorts an array in place. This method mutates the array and returns a reference to the same array.

sort(function(a,b){a-b})


// concat()

let arrya = ['shubham','raju','rahul']
let arrya2 = [10,20,30,20]

console.log(arrya2.concat(arrya))

let names = [2,13,15,17,18,191,101]
names.forEach(function(el){                      // for each donot return any thing 
console.log(el==2)
})

//console.log(ww)

let values = [10,30,26,73,73,89,24,46,72,85,29]

let qq =  values.map(function(el,index,arr){
    return el + " hello"
})
console.log(qq)

// filter 

let qqq = values.filter((el,index,arr)=>{
    return el==24
})
console.log(qqq)

let dd = values.reduce(function(acc,el,index,arr){
    return (acc+el)+10
})
console.log(dd)


// count numbers of pairs available 

let ww = [1,2,3,4,5,1,1,1,3,3,3,2,2,5,5,5,2,]
let count = {}
ww.forEach((el)=>{
    if(count[el] === el){
        count[el]++
    }else{
        count[el] = 1
    }

})
console.log(count)






let arr = [0,14,3,4,0,2,0]
  // [14,4,3,0,0,0,]

  let vv = arr.sort(function(a,b){return a-b})  // [ 0, 0, 0, 14, 3, 4 ]
console.log(vv)
  //arr.sort(function(a,b){a-b})
  

  arr.sort(function(a,b){return a-b})