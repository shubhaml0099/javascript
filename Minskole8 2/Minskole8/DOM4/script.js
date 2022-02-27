// 1. Select the element 
// 2. Based on the user action, 

//  1) Create the element 
//  2) Retrive
//  3) Update the element 
//  4) Delete the element


//  <p  class="Head" id="headne" name ="Ename">Para</p>

// p[name="Ename"]

/////

//1) Add the attrbute  to element
//2) Update the value of attribute
//3) Delete the the attribute of the element 

//  We can change the HTML elements on the page 

// {/* <h1 id="headOne">Head</h1>
//     <h1 id="headOne">Head</h1>
//     <p>I am new  to javascript</p>
//     <ul>
//         <li class="red">Apple</li>
//         <li class ="green">Banana</li>
//         <li class ="red">Grapes</li>
//         <li class ="green">Mango</li>
//     </ul> */}

// Document is object

//document.querySelector(cssSelector)

// tagName[attribute=value]

// h1[id="headOne"]  // css selector
// h1                // tagName
// .red              // selecting by class name
// #headOne          // selecting by id

let headingOne = document.querySelector('h1')
console.log(headingOne)

// className 

let headingOneA = document.querySelector('.ny')
console.log(headingOneA)

// id

let headingOneC= document.querySelector('#headOne')
console.log(headingOneC)

// generic 
//    <h1 id="headOne" class ="ny" >Head</h1>

let headingOneD= document.querySelector('h1[class="ny"]')
console.log(headingOneD)

//----------------------------------
let liList = document.querySelectorAll('li') // returns a node list
console.log(liList)

let buttonA = document.querySelector('button')
console.log(buttonA)



headingOne.addEventListener('click',function(){

    console.log(headingOne.textContent)
    headingOne.textContent = "Tail" // update

})


// for(let i = 0 ; i < liList.length ;i++){
//     liList[i].style.color = "purple"
// }

buttonA.addEventListener('click',function(){

    for(let i = 0 ; i < liList.length ;i++){
        liList[i].style.color = "purple"
    }

})





// let a = {

        // style:{
        //     color:"blue"
        // }

// }


// Additon Css selector ----------------->

// let a = document.getElementById('headOne')
// console.log(a)


// let b = document.getElementsByClassName('ny')
// console.log(b)


// let li = document.getElementsByTagName('li')
// console.log(li)
