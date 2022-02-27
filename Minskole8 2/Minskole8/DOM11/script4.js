let ul = document.querySelector('ul')
let buttonOne = document.querySelector('#one')
let inputText = document.querySelector('input')

buttonOne.addEventListener('click',function(){
    let text = inputText.value
    let newEle = document.createElement('li') // <li></li>
    newEle.textContent = text  // <li>Chiku</li>
    CreateButton(newEle)
    ul.appendChild(newEle)
})

function CreateButton(li){
    let remove = document.createElement('button') // <button></button>
    remove.textContent = "remove" // <button> remove</button>
    remove.className = "remove"    // <button class = "remove">remove</button>
    li.appendChild(remove)

    let up = document.createElement('button') // <button></button>
    up.textContent = "up" // <button> up</button>
    up.className = "up"    // <button class="up">up</button>
    li.appendChild(up)


    let down = document.createElement('button') // <button></button>
    down.textContent = "down" // <button> remove</button>
    down.className = "down"    // <button class = "remove">remove</button>
    li.appendChild(down)

}