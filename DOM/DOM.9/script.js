
let unList = document.querySelector("ul")
let liList = document.querySelector('li')
let inputText = document.querySelector('input')
let button =document.querySelector('#btn')

button.addEventListener('click',()=>{
    let li = document.createElement('li')
    li.textContent = inputText.value
    unList.append(li)
    CreateButton(li)
    inputText.value = ' '
})

function CreateButton(li){
    let up = document.createElement('button')
    up.className = 'up'
    up.textContent = 'Up'
    li.append(up)

    let down = document.createElement('button')
    down.className = 'down'
    down.textContent = 'Down'
    li.append(down)

    let remove = document.createElement('button')
    remove.className = 'remove'
    remove.textContent = 'Remove'
    li.append(remove)
}
