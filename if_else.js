//day7==> split ==> slice method //
//if and else method//



let shub = 'shubham langote'
for (let i = 0; i < shub.length; i++) {
    console.log(shub[i])

}

for (let i = shub.length - 1; i >= 0; i--) {
    console.log(shub[i])
}

let shr = 'pandharpur'
for (let i = 0; i < shr.length; i++) {
    console.log(shr[i])
}
for (let i = shr.length; i >= 0; i--) {
    console.log(shr[i])
    if (i == 10) {
        console.log('pandharpur')

    }
}

// split comand ====> split use
let car = 'rengrover'
//-9 -8 -7 -6 -5 -4 -3 -2 -1 //
// r  e  n  g  r  o  v  e  r //
// 0  1  2  3  4  5  6  7  8 //
let c = car.slice(2, 8)
console.log(c)
let ca = car.slice(0)
console.log(ca)
let cad = car.slice(-7, -2)
console.log(cad)

// if or else used in loop //
// if or else used in loop / /

    let zz = 'apple'
for (i = 0; i < zz.length; i++) {
    console.log(zz[i])
    if (i == 1) {
        console.log('papple')
    }
}

// if or else used in logic way//
/*  if (condition){statement    
}
else{
    starement
}*/

let MXage = '30'
let MIage = '23'
if (MXage >= 25, MIage <= 25) {
    console.log('you are eligible ')
}
else {
    console.log('not eligible')
}

let lapi = 20000
if (lapi >= 30000) {
    console.log('discount is available 50%')
}
else {
    console.log('you need to pay extra 10%')
}

let pr='pandharpur'
for (i=0;i<pr.length;i++){
    
}


let name='karan'
let gender='male'
if (gender=='male'){
    console.log( 'Hello Mr. ' +name)
}else if(gender=='female'){
    console.log('Hello Ms. ' + name)
}else{
    console.log('hello gental man   '+name)
}


// ------------ practice on if and else -----------//

// // if and else //


// let wwx='200'
// if(wwx=='200'){
//     console.log('THISS SAME VALUE')
// }else{
//     console.log('thi is not same value')
// }

// //slice===> slice//
// let dd='raghu rajan'
// let dD=dd.slice(2,7)//naw giving 2=is first index ,7=is last index(last index value/word not show) //
// console.log(dD)
// let d1=dd.slice(5)  // if only one index no is giving then print start from that index up to end//
// console.log(d1)
// let d2=dd.slice(0,20)
// console.log(d2)

// // split by negative values or negative index no//
// let A='shubham'
// let a1=A.slice(-3,-1)
// console.log(a1)
// let a2=dd.slice(1,-2)// at the time of giving negative index no we shud give starting no first or smallest no first//
// console.log(a2)

let car_prise=20001
let x=car_prise
if(x>20000 && x<40000){
    console.log('lowrange car')
}else if (x>=40000){
    console.log('high range car')
}else{
    console.log('this range car is not available')
} 