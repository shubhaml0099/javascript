//------------------->-------------->arry method 
// in arry 1>map,2>filter,3>reduce,4>foreach  this methods very important for API testing 

// // map---------->> this method used to done all ARITHMETIC operation on arry element and it give new arry

//let cost = [1200,2344,3500,1000,2500,6500]
let cost = [2, 3, 4, 5, 6, 7, 8, 1, 9, 0]
let w1 = cost.map(function (currentelement, index, arry) {
    return currentelement * 200

})
console.log(w1)

//filter----------->>----- by using filter method we can perform all COMPARATOR operation on arry element  and it give new arry

let w2 = cost.filter(function (currentelement, index, arry) {
    return currentelement < 2500
})
console.log(w2)

//reduce ----------->>----by using this method we can get SUM of all arrys element and TOTAL it and reduce give singal value
let w3 = cost.reduce(function (acc, el, index, arry) {
    return acc + el
})
console.log(w3)

//------------------------------>>--------now program----
let trangection = [200, 150, -300, 500, 1000, -500]

//     total diposit amount

let deposit = trangection.filter(function (el) {
    return el > 0
})
let totaldeposit = deposit.reduce(function(acc,el){
    return acc+el
})
console.log('TotalDeposit = '+ totaldeposit)

//total withdroll amount

let withdrol = trangection.filter(function(el){
    return  el < 0
})
let totalwithdrol = withdrol.reduce(function(acc,el,index,arry){
    return acc + el
})
console.log('TotalWithdrol  = '+totalwithdrol)

// ----------------->------ 
let bill=[12000,45000,68000,32000,10000,1000]
//if on this bill 10% discount is given then calculate 
let discountedamount=bill.map(function(el,index,arry){
    return el*0.10
})
console.log(discountedamount)