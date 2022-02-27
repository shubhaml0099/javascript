
//in java script eavery thing is object //
//eavery object as proporty and method //

let city = "pune"
console.log(city)
console.log(city.length)

// for loop //

for (let i = 0; i < 4; i++) {
    console.log(i)
    console.log([city[i]])

}
for (let i = 3; i >= 0; i--) {
    console.log(i)

    console.log([city[i]])

}


let fruit = "mango"
let r = fruit.length
let s = fruit.toUpperCase()
console.log(s)
console.log(r)
console.log(typeof r)
console.log(fruit[3])
console.log(fruit[fruit.length - 2])


/*for (let i = 0; 5 > i; i++) {
    //console.log(i)
    console.log([fruit[i]])

}

for (let i = 4; i >= 0; i--) {
    console.log([fruit[i]])
}
console.log("loop")

//for (let i=2;i<4;i++){
//console.log(i)
//}
//for (let i=22;i>20;i--){
//console.log(i)
//}*/


//--------------------------------->>>--------------------


let bike ="honda"
let x = bike.length
console.log(x)
console.log(typeof x)
console.log(bike[3])
console.log(bike[bike.length-2])
let dd=bike.toUpperCase()
   console.log(dd)

for (let i=4;i>=0;i--){
console.log([bike[i]])
console.log(i)
}
for (let i=0;i<=4;i++){
    console.log([bike[i]])
    console.log(i)
}

//for loop under loop//

for (let i=20;i>=0;i--){
    if (i % 2 == 0){
        console.log(i)
    }
}

console.log("loop in loop")

for (let a=1;a<=4;a++){
    for(b=a;b<=4;b++){
        console.log(a)
    }
}


function a(number){
    console.log(number*number)
}
    let cc=a(10)
    console.log(a)

/* by using loop finding odd & even number */

console.log('finding odd number')

for (let x=0; x<=100;x++){
if (x%2 !=0)
console.log(x)
}

console.log('finding even number')
for (let b=100; b<=110;b++){
    if (b%2==1)
    console.log(b)
}

let firstname='shubham'
console.log(firstname.length)
for (a=0;a<7;a++){
    console.log(a)
}

let shub='shubham'
for (let a=0;a<=7;a++){
   // qq=(shub[a])
   // console.log(a)
   if (a==7){                  //brake and continue statement in loop//
       console.log('shubham')
    continue;
   }
    console.log([shub[a]])
}


