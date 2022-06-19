

//  logocal programs on object which is imp for interview

let sum = [11,22,33,44,55,55,66,77,88,99,99,12,99,11]
let count = 0 
for(let i = 0 ; i < sum.length;i++){
    if(sum[i] === 99){
        count = count + 1
    }

}
console.log(count)


// program 1 b
// let word  = ['b','o','o','k']
// let  result = {}
// console.log(result)

// // {
//         b:1,
//         o:2,
//         k:1
// // }

// for(let i = 0 ; i < word.length ;i++){

//   if(result[word[i]]){ 
//         result[word[i]] = result[word[i]] + 1
//   }
//   else {
//     result[word[i]] = 1
//   }
  
// }
// console.log(result)



// Program 1 b

// {
//     'b':1,
//     'o':2,
//     'k':3
// }


// let word =['b','o','o','k']
//  let result ={}
//  let countOfb=0
//  let countOfo=0
//  let countOfk=0

//  for (let i = 0; i <= word.length; i++) {
//     let XX = word[i]
//     switch (XX) {
//         case 'b':
//             countOfb++;
//             break;

//         case 'o':
//             countOfo++;
//             break;

//         case 'k':
//             countOfk++;
//             break;
//     }
// }

// result[word[0]]=countOfb
// result[word[1]]=countOfo
// result[word[2]]=countOfo
// result[word[3]]=countOfk

console.log('--------------------------------------------------------')

let word =['b','o','o','k']
let b = 0
let o = 0
let k = 0
for(let i=0;i<word.length;i++){
    if(word[i]==b){
        b = b + 1
    
    }
    else if(word[i]==o){
        o = o + 1
    } 
    else if(word[i]==k){
        k = k + 1
    }
}
console.log(b)
console.log(o) 
console.log(k)
// program 2

let numbers = {

    a:3,
    b:4,
    c:8


}

// let numbers2 = {

//     a:3,
//     b:4,
//     c:8,
//     a:7


// }



//console.log(numbers2)

// console.log(numbers['b'])
for(let key in numbers){
    numbers['a'] = numbers[key] *numbers[key]
}
console.log(numbers)

// numbers = {
//     a:3,
//     b:4,
//     c:8

// }

// program 3

let a = [22,33,44,11,22,17,88,99,11]
let eventCount  = 0 
let oddCount = 0


// for(let i = 0 ; i < a.length ; i++){
//         if(a[i] % 2 == 0){
//             eventCount ++
//         }
//         else {
//             oddCount ++
//         }
// }

// console.log(eventCount)
// console.log(oddCount)


// for(let i = 0 ; i < a.length ; i++){   
//     a[i] % 2 == 0 ? eventCount++:oddCount ++
// }

// console.log(eventCount)
// console.log(oddCount)


a = [22,33,44,11,22,17,88,99,11]

let evenCount = a.reduce(function(acc,el){
    let a = el % 2 === 0?1:0
    //console.log(a)
    return acc + a
},0)
console.log(evenCount)


// another way

let countt = 0
for(let i=0;i<a.length;i++){
    if(a[i]%2==0){
        countt = countt + 1
    }
} 
console.log(countt)

let oddCount2 = a.reduce(function(acc,el){
    let a = el % 2 !== 0?1:0
    //console.log(a)
    return acc + a
},0)
console.log(oddCount2)

let count1 = 0
for(let i=0;i<a.length;i++){
    if(a[i]%2!=0){
        count1 = count1 + 1
    }
} 
console.log(count1)

// program3
let r = ['red','red','green','red','blue','blue','red','red']
let result2 = {}

for(let i = 0 ; i < r.length ;i++){

  if(result2[r[i]]){ 
        result2[r[i]] = result2[r[i]] + 1
  }
    else {
         result2[r[i]] = 1
     }  
}
console.log(result2)

for(let key in result2){

    result2[key] = Math.floor(result2[key] /2)

}

//console.log(result2)



// writing table 2 no tabe


// for(let i=7;i<=70;i+=7){
//     console.log(i)
//     if(i%2==0){
//         console.log(i)
//     }
// }