

// <p>Paragraph</p>
//     <input type="text">
//     <button>Click to change color!</button>
//     <script src = "script.js"></script>

let para = document.querySelector('p')
let button = document.querySelector('button')
// tagName[attribute='value']
let inputA = document.querySelector('input[type="text"]') // green

console.log(para)
console.log(button)
console.log(inputA)

button.addEventListener('click',function(){
    //let color = inputA.value
    para.style.color = inputA.value
    para.textContent  = "New"
    para.style.background = "blue"

})