

// arry method // forEach(),every(),some(),reverse(),joint(),split(),concat(),sort(),flat(),find(),findindex(),fill(),splice(),slice(),ndexOf()

// for each method

let shub = [10,20,30,40,50,60,70,80,90]
let ee = shub.forEach(function(el){
    console.log (el+ 'number')    ///  forEach do no return any thing thats why we dyrectly console
})
console.log(ee)

let every = shub.every(function(el){
    return el > 50    // every() method give responce in boolen form true/false  every el should be within condition 
})
console.log(every)  

let some = shub.some(function(el){
    return el > 50    // some() method give responce in boolen form true/false  
})
console.log(some)

let reverse = shub.reverse()   // reversing the arry 
console.log(reverse)

let joint = shub.join('_')  // join()  method used to joining arry and give string 
console.log(joint)

let split = joint.split('_')  // split()  method used on string and give arry
console.log(split)

