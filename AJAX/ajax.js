

// why call back hell required 


function sum(){
    console.log('hello one')
}

function sum2(){
    console.log('hello two')
}

// sum2()
// sum()


// async ==>> sync ==> by using set time out 

function genrator(){
    setTimeout(()=>{
        console.log('get id ')
        setTimeout(() => {
            console.log('get Information')
            setTimeout(() => {
                console.log('get first name ')
                setTimeout(() => {
                    console.log('get middal name ')
                    setTimeout(() => {
                        console.log('get last name ')
                        setTimeout(() => {
                            console.log('get the end value ')
                            
                        },1000);
                    },2000);
                },2000);
            },8000);
        },2000);
    },1000)
}

//genrator()


function sum(){
    console.log('hello one')
}

function sum2(){
    setTimeout(()=>{

    
        console.log('hello two')
    })
}

sum2()
sum()


// API asinc call 
// API ==> creat user id 
// API ==> get id retrive data 
// API ==> delet user 

function calapi(){
    setTimeout(() => {
        console.log('Creat user')
    },1000);
    setTimeout(() => {
        console.log('get user id')
    },5000);
    setTimeout(() => {
        console.log('delete user')
    },4000);
}
calapi()


// function getuser(pageNumber){
//    let obj = new XMLHttpRequest() 
//    obj.open('GET',`https://reqres.in/api/users?page=${pageNumber}`)
//    obj.send()
//    obj.addEventListener('load',function(){
//     let data = JSON.parse(this.responseText)
//     console.log(data)
//     let id = data.data[4].id
//     console.log(id)

//     let obj = new XMLHttpRequest()
//     obj.open('GET',`https://reqres.in/api/users/${id}`)
//     obj.send()

//     obj.addEventListener('load',function(){
//         let data = JSON.parse(this.responseText)
//         console.log(data.data)
//        // renderHtml(data)
//     })
//    })
// }

// getuser(1)


// what is promiss 

let reqe = new Promise((resolve,reject)=>{
    a = 10 ;
    b = 20 ;
    if(a == b ){
        resolve('i am same')
    }
    else{
        reject('i am rejected')
    }
})

reqe.then((str)=>{
    console.log(str)
})
.catch((str)=>{
    console.log(str)
})
.finally((str)=>{
    console.log(str)
})




let  x= 10;
let  y = 20 ;
let  z = 30;
// Output : a = 30, b = 10 and c = 20
// swap them without temporary variable.

// z=y
// y=x;
// x=z+y
x=y+x
y=x-y
z=x-y

console.log(x,y,z) ////30 10 20