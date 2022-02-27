
//let buttonOne = document.querySelector('button')
let buttonA = document.querySelector('.add')
let ulList = document.querySelector('ul')
let liList = document.querySelector('li')
let input = document.querySelector('input')
//console.log(buttonOne)
console.log(ulList)
console.log(liList)
console.log(buttonA)

buttonA.addEventListener('click', function () {
    let li = document.createElement('li')   //  <li></li>
    li.textContent = input.value            //  <li>textContent</li>
    CreateButton(li)       // --------->>---- for this button we need to creat another function
    ulList.append(li)
    input.value = ''
})

function CreateButton(li) {
    let up = document.createElement('button')  //<button></button>
    up.className = 'up'                   //<button class='up'></button>
    up.textContent = 'Up'                 //<button class='up>up</button>
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


let bodyElement = document.querySelector('body')

bodyElement.addEventListener('click',(event)=>{
    console.log(event.target.tagName)
})



let hedOne = document.querySelector('h1')
hedOne.addEventListener('click',()=>{
    hedOne.style.color = 'red'
})