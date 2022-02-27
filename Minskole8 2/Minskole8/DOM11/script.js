

let para = document.querySelector('p')
let buttonOne = document.querySelector('button')
let inputText = document.querySelector('input')

// <p>paragraph</p>


console.log(para)
console.log(buttonOne)
console.log(inputText)


// call back function
buttonOne.addEventListener('click',function(){
    let colortext = inputText.value
    para.style.color = colortext
    
})


let human = {
    age:10,
    fullName:"chinmay deshpande"
}

// retrive 

// dot notation or bracket no0tation 

console.log(human.age)

// update 

human.age = 45

// add

human.lang = "marathi"

// del 

delete human.age