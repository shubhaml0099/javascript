// arry method // forEach(),every(),some(),reverse(),joint(),split(),concat(),sort(),flat(),find(),findindex(),fill(),splice(),slice(),ndexOf()


// forEach method------------->>-----  

let cal = [12, 32, 47, 29, 43, 65, 87, 97, 80,]
cal.forEach(function (el, index, arry) {
    console.log('numbers   ' + el)           //------forEach function not retun any value so we dyrectly print inside call back function         
})

//-------------------------------->>>------------------------->>---------
// every(),some()------->>both methode giving boolen value true/false
let cal1 = cal.every(function (el, index, arry) {
    return el > 10                               //---if every element is >10 then true 
})
console.log(cal1)
let cal2 = cal.every(function (el) {
    return el > 23
})
console.log(cal2)

//-------------------------------------------------
//some()-------->>
let cal3 = cal.some(function (el) {
    return el == 31                   // if some element is availabe then also its working 
})
console.log(cal3)


//------------------------------>>>_--------------------------------------->>>-------------
// reverse() , concat(), join(),split()
//---------------------->>----------------
// reverse 
let a = cal.reverse()
console.log(a)

let boy = ['rahul', 'amol', 'raj', 'ravi', 'ranvir', 'pratiksha']
let aa = boy.reverse()
console.log(aa)

let a2 = boy.some(function (el) {
    return el == 'rahul'
})
console.log(a2)

//-------------------------------------->>---------------------
// join()--------->> joining arry element and give new string 
let a3 = boy.join('_')
console.log(a3)           // ask about why reverse string print

//------------------------------------>>------------------
//split()--------->>---used to split string and give new arry 
let a4 = a3.split('_')
console.log(boy)

//----------------concat()---------
//concat ()  ---------->> this is used for joining two or more than two arry
let r = [1, 2, 3, 'rahul', 5, 6, 7]
let rr = [12, 13, 45, 67, 'yogi']
let r1 = r.concat(rr).concat(['shubham', 'ravi', 'krishna', 'rani'])
console.log(r1)

//sort ------------->>------
//sort method is used for sorting arry element by alphabetical order
 let ram=['shub','rahul','onkar','avi','sagar','baji','pornima','champ','krushna']
 let ram1=ram.sort()
 console.log(ram1)

 //flat ----------------------->>-----------
 //flat method used to joint sub arry in one singal big arry 
 let raj = [['shub',123,'ram',544,0055],[12,54,87,099,65,],['rahul','shubham','yogiraj']]
 let raj1=raj.flat()
 console.log(raj1)

//find --------------------------->>------------------>>
// find is used to find the element which is give in condition only one first arry element is print which is fullfill condition
let rahul=[12,64,42,45,65,47,]
let rahul1=rahul.find(function(el){
    return el>40
})
console.log(rahul1)

//findIndex--------------------------->>---------------
// findIndex is same as find method, only change is finded element index value is print
let rahul2=rahul.findIndex(function(el){
    return el<46
})
console.log(rahul2)

//-------------->>------------------
//fill--------->>----
//fill is used to adding the element in arry 
let shub3=['raj',23,65,'yahu',56]
let ss=shub3.fill('rahul',1,3).reverse()  //------------two method used by chainlink
console.log(ss)

// splice -------------->>----------------->
// splice mehod is used to replace the arry element and return delet element
let shub4=['raj',23,65,'yahu',56]
let ssc=shub4.splice(1,4,'ram','avi','67',001)
console.log(ssc)
console.log(shub4)



