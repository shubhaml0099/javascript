let arr = [11,22,33]

let a = arr[0]
let b = arr[1]
let c = arr[2]

console.log(a)
console.log(b)
console.log(c)

let [aa,bb,cc] = arr

console.log(aa)
console.log(bb)
console.log(cc)


let g = [[1,2,3],5]

let [[qq,ww,ee],ss] = g
console.log(qq)
console.log(ww)
console.log(ee)
console.log(ss)

let iii = [[33,44],[66,77],[88,99]]
let [[ii,oo],[aaa,eee],[ll,mm]] = iii
console.log(ii)


//--------------------------------->


// obj

let person = {
    fullname:"chinmay deshpande",
    age:12,
    skills:["java","python","javascript"]
}

let {fullname:xxx,age:yyy,skills:ppp} = person
// console.log(fullname)
// console.log(age)
// console.log(skills)

console.log(xxx)
console.log(yyy)
console.log(ppp)


//---------------------------------------------


let students = [
        {
            fullName:"chinmay",
            age:12

        },

        {
            fullName:"komal",
            age:22

        },
        {
            fullName:"poorva",
            age:12

        }
]

let [{fullName:fnOne,age:ageOne},{fullName:fnTwo,age:ageTwo},{fullName:fnThree,age:ageThree}] = students
console.log(fnOne)

let saa = {

    fullName:"chinmay deshpande",
    age:23,
    skills:["python","javascript","cpp"]

}

let {fullName,age,skills:[aaaaa,bbbbb,ccccc]} = saa
console.log(aaaaa)
console.log(bbbbb)
console.log(ccccc)

//----------------------------------------------------------------------------


//spread and rest operator


// function addition(a,...arr){
//     console.log(arr)
//     return arr.reduce(function(acc,el){
//         return el + acc
//     },a)

// }

// let rrrrr = addition(1,2,3,3,4,5,5,6,7,7)
// console.log(rrrrr)

function addition(a,...arr){
   return  arr.filter(function(el){
        return el > a

    })
}

let ray = addition(18,22,33,44,55,66,12,13,14)
console.log(ray)





//[1,2,3,3,4,45,5,66,77,8   =====> arr]  ====> rest
//[1,2,3,4,5,6,7] ========>  a,b,c,d,e,f,g  ==== > spread operator


let numbers = [11,22,33,44,55,66,77,88]


function printFirstFive(a,b,c,d,e){
    console.log(a+b+c+d+e)
}
printFirstFive(...numbers)














