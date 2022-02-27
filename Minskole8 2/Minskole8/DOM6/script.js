

//{/* <h1 id="head" class="name">HeadingOne</h1>
//<button>Click  text color</button> */}

let headOne = document.querySelector('h1')
let buttonOe = document.querySelector('button')

// console.log(headOne)
// console.log(buttonOe)





buttonOe.addEventListener('click',function(){
    // textContent, style.color , style.background (htmlElement)
    console.log(headOne.textContent)
    console.log(headOne['textContent'])
    headOne.textContent = "new new new new"
    console.log(headOne['textContent'])

    headOne.style.color  = "red"
    headOne.style.background = "yellow"
    console.log(headOne.style.background)    
    //headOne.textContent = "hello i am updated from js"



})









// refe
// let human = {

//     fullName:"chinmay deshpande",
//     age:30,
//     display:function(){
//         console.log('hello')
//     }

// }

// human.display()
// human obj --- property

// retrive

// human.fullName
// human['fullName']


// update 

// human.fullName = "updateName"
// human['fullName'] = "updatedValue"

// delete 

// delete human.fullName
// delete human['fullName']

// add

// human.lang = "Hindi"
// human['lang'] = "Marathi"


// let human = {

//     fullName:"chinmay deshpande",
//     age:30,
//     parent:{

//         father:"shirish",
//         mother:"kanchan"

//     },
//     display:function(){
//         console.log('hello')
//     }

// }

//human.parent.mother = "kanchan deshpande"