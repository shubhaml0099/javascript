

// //let person = ["chinmay","deshpande",23,44]

// // object 


// let person = {
//     firstName: "chinmay", // item 
//     lastName: "deshpande",
//     rollNo: 23,
//     age: 44
// }

// // retrive 
// // .notation and bracket notation
// console.log(person.firstName)
// console.log(person['firstName'])

// // update .notation and bracket notation

// person.firstName = "amol"
// person['firstName'] = "poorva"
// console.log(person)


// // add 
// person.language = "marathi"
// person['skills'] = "python"
// console.log(person)

// // delete 

// delete person.age
// delete person['language']

// console.log(person)


// //----------------------------------->


// // sort --> 
// let names = ["banana","apple","chiku","apqlle"]
// let avb = names.sort()
// console.log(avb)
// console.log([22,33,44,111,333,444,566,77].sort())

// // flat  
//        //    0        1      2
//         //   0 1 2         // 0 1 2
// let arry = [[1,2,3],[4,5,6],[7,8,9]]
// console.log(arr[0][1]) // [1,2,3]
// console.log(arr[2][2])
// let qa = arry.flat()
// console.log(qa)

// // flatmap()


// // find , findIndex
// //        0  1  2  3  4  5
// let nm = [33,44,55,77,88,99]

// let rrr = nm.filter(function(el){
//     return el > 40
// })
// //[44,55,77,88,99]

// let rrry = nm.find(function(el){
//     return el > 40
// })
// console.log(rrry)

// // findIndex

// let rrrye = nm.findIndex(function(el){
//     return el > 40
// })
// console.log(rrrye)

// // splice, fill 

//      //  0   1  2 3  4  5   6  7  8
// let arrj = [22,33,44,55,66,77,88,99,100]
// let ghgh = arrj
// .fill("chinmay",-3)
// .fill('a',3,4) // endpoint not included
// console.log(ghgh)

// // splice

// arrj = [22,33,44,55,66,77,88,99,100]
// //Array.splice(startposition,numberOfele,re,re)
// let zaq = arrj.splice(1,2,"mark","mark2")
// console.log(zaq)
// console.log(arrj)


//----------------------------------------->


let obj = {
    "page": 1,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 1,
            "email": "george.bluth@reqres.in",
            "first_name": "George",
            "last_name": "Bluth",
            "avatar": "https://reqres.in/img/faces/1-image.jpg"
        },
        {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "first_name": "Janet",
            "last_name": "Weaver",
            "avatar": "https://reqres.in/img/faces/2-image.jpg"
        },
        {
            "id": 3,
            "email": "emma.wong@reqres.in",
            "first_name": "Emma",
            "last_name": "Wong",
            "avatar": "https://reqres.in/img/faces/3-image.jpg"
        },
        {
            "id": 4,
            "email": "eve.holt@reqres.in",
            "first_name": "Eve",
            "last_name": "Holt",
            "avatar": "https://reqres.in/img/faces/4-image.jpg"
        },
        {
            "id": 5,
            "email": "charles.morris@reqres.in",
            "first_name": "Charles",
            "last_name": "Morris",
            "avatar": "https://reqres.in/img/faces/5-image.jpg"
        },
        {
            "id": 6,
            "email": "tracey.ramos@reqres.in",
            "first_name": "Tracey",
            "last_name": "Ramos",
            "avatar": "https://reqres.in/img/faces/6-image.jpg"
        }
    ],
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
}



console.log(obj['data'][0]['email'])




obj['data'].forEach(function(el){

    console.log(el.id)
    console.log(el.email)
    console.log(el.first_name)
    console.log(el.last_name)
    console.log(el.avatar)

})



















// object does not stores the value by index



// person = ["chinmay","deshpande",23,44]

// // retrive

// console.log(person[0])

// // update 

// person[0] = "Harshal"

// // delete 
// person.pop()

// person.shift()

// // push(),unshift()










