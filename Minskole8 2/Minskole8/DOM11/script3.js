/* <ul>
<li>Apple</li>
<li>Banana</li>
</ul>
<input type="text">
<button>Add me</button>
<script src="script3.js"></script> */


// select the elements
// read the value from input text box -- chiku
// <li>chiku<li>
// append li tag to ul 


let ul = document.querySelector('ul')
let buttonOne = document.querySelector('button')
let inputText = document.querySelector('input')

buttonOne.addEventListener('click',function(){
    let text = inputText.value
    let newEle = document.createElement('li') // <li></li>
    newEle.textContent = text  // <li>Chiku</li>
    ul.appendChild(newEle)

})