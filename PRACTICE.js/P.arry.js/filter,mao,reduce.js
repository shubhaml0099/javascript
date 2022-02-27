
let shub = [12,13,14,15,16,17,18,19,20]
// map  --->> map used to we can perform arethmetic operation  
let map = shub.map(function(el,index,arr){
    return el+1
})
console.log(map)

// filter 
let filter = map.filter(function(el,index,arr){
     return el>20
})
console.log(filter)

//reduce 

let reduce = shub.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(reduce)



// let trangection 

let trangection = [255,-100,5000,400,-2000,-1000,500,-10,200]

let totaldeposit = trangection.filter((el,index,arry)=>{
    return el>0
})
console.log(totaldeposit)
let totalwithdrol = trangection.filter((el)=>{
    return el<0
})
let withdrolAmount = totalwithdrol.reduce((acc,el)=>{
    return acc+el
})
let depositAmount = totaldeposit.reduce((acc,el)=>{
    return acc+el
})
let currentBalance = depositAmount +  withdrolAmount

console.log(depositAmount)
console.log(totalwithdrol)
console.log(withdrolAmount)
console.log('current balance = '+currentBalance)



// if on the bill 10% descount 

let bill = [11000,1200,4000,200]
let discounted = bill.map((el)=>{
    return el*0.90
})
console.log(discounted)
let totalBill = discounted.reduce((acc,el)=>{
    return acc+el
})

let billAmount = bill.reduce((acc,el)=>{
    return acc+el
})

console.log('Bill With Discount ='+totalBill)
console.log('Bill Without Discount ='+billAmount)