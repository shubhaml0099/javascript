let ulList = document.querySelector('ul')
let text = document.querySelector('input')
let button = document.querySelector('#add')


button.addEventListener('click',function(){
    // reading the text from input text box
    let elementText = text.value
    // create the element 
    let newElement = document.createElement('li')  // <li></li>
    newElement.textContent = elementText  // <li>Chiku</li>
    ulList.appendChild(newElement)
    text.value = " "

})

//

let remove = document.createElement('button') // <button><button>
remove.textContent = "remove" // <button>remove<button>
remove.classList = "remove" // <button class = "remove">remove</button>
li.appendChild(remove)
 
//

