// DOM is object 
// type for queary selection 

// 1> by tag name 2> by class(.), by id (#)

// <h1 class ='shub', id ='yogi',class='rede' >hello india</h1>

// 1> tag name  
let dd1 = document.querySelector('h1')
console.log(dd1)

// 2> css selector 

// tagName[atribute = value]
let dd2 = document.querySelector('h1[class=shub]')
console.log(dd2)

// css selector by id
let dd3 = document.querySelector('#yogi')
console.log(dd3)

// css by getElement by id
let dd4 = document.getElementById('yogi')
console.log(dd4)

// css element by class
let dd5 = document.querySelector('.shub')
console.log(dd5)

//---------------------------------------->>----------------------------------------
dd1.addEventListener('click',function(){
    dd1.style.color = 'red'
    dd1.style.backgroundColor = 'indigo'
})
console.log(dd1['textContent'])

//------------------------------------------->>-------------------------------------------

let buttonOne = document.querySelector('button')
buttonOne.addEventListener('click',()=>{
    dd1.textContent = 'shubham langote'
    dd1.style.backgroundColor = 'yellow'

})
console.log(buttonOne)

// update atribute values

dd1.textContent = 'MSR INDIA'

console.log(dd1['textContent'])

document.querySelector('p').textContent = 'update values'

// retrive atribute values

console.log(dd2['textContent'])

// delete atribute  ???
// add atribute ????


//delete dd1.textContent


