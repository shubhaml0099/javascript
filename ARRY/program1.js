// program for finding age//  by using loop

let birthyear = [2003,2005,2007,2009,2000]
// 2021-2003=18,
//let currentage=[]
let ages=[]
for(let i=0;i<birthyear.length;i++){
    //console.log(birthyear[i])
    let age=(2021-birthyear[i])// [18,16,14,12,21]
    //currentage.unshift(age)
    ages.push(age)
}
//console.log(currentage)
console.log(ages)

//program 2

let age=[38,25,81,35,44,65,27,82,78]
 let above40=[]
 let below40=[]
for (let i=0;i<age.length;i++){
    if(age[i]>40){
        above40.push(age[i])
    }
    else if(age[i]<=40){
        below40.push(age[i])
    }
    //else{
     //   console.log('give currect age')  //-------> for ask
   // }

}
console.log(above40)//[ 81, 44, 65, 82, 78 ]
console.log(below40)//[ 38, 25, 35, 27 ]


//program3
let sum = [1,2,3,4]
let total=0
for(let i=0;i<sum.length;i++){
    total=total+sum[i]

}
console.log(total)

//let shu=['20','25','47']
let shu=[20,25,47]
//console.log(shu)
total=0
for (let i=0;i<shu.length;i++){
    //console.table(i)
    total=total+shu[i]

}
console.log(total)


let raj = [1919,1921,1934,'shubham',1992,1955]
todayage=[]
for(let i=0;i<raj.length;i++){
    let age=2021-raj[i]
    todayage.push(age)
}
console.log(todayage)  //-------------> ask for output

// program for finding odd numbers in string //


let numbers = [2,3,6,5,7,8,9,11,24,33,56,87,99,100,101]
oddnumber = []
for (let i=0;i<numbers.length;i++){
    if(numbers[i]%2 !=0){
    oddnumber.push(numbers[i])}
}
console.log(oddnumber)  
console.log(typeof oddnumber)