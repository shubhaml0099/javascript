

let ulList = document.querySelector('ul')
let buttonA = document.querySelector('#add')
let text = document.querySelector('input')
let liList = document.querySelectorAll('li') // nodeList
let bodyA = document.querySelector('body')

for(let i = 0 ; i < liList.length ; i++){
        //console.log(liList[i])
        creatButtons(liList[i])
}

// <h1 class = "he">Hello</h1>
ulList.addEventListener('click',function(event){

    // object -- properties and method
    //console.log(event.target) // Htmlelement
    //console.log(event.target.tagName) // TagName --- capital
    //console.log(event.target.className)

    if(event.target.tagName === "BUTTON"){

        if(event.target.className === "remove"){
            let li = event.target.parentNode
            let ul = li.parentNode
            ul.removeChild(li)
        }
        else if(event.target.className === "up"){

            let li = event.target.parentNode
            let ul = li.parentNode
            let prev = li.previousElementSibling
            ul.insertBefore(li,prev) 
        }
        else if(event.target.className === "down"){
            let li = event.target.parentNode
            let ul = li.parentNode
            let next = li.nextElementSibling
            ul.insertBefore(next,li) 
            
        }
 
    }


})















buttonA.addEventListener('click',function(){
    let str = text.value
    let newE = document.createElement('li') // <li></li>
    newE.textContent = str // <li>Mango</li>
    //  Button add code
    creatButtons(newE)
    ulList.appendChild(newE)

})

function creatButtons(li){

    let remove = document.createElement('button') // <button></button>
    remove.textContent = "remove" //<button>remove</button>
    remove.className = "remove" // //<button class = "remove">remove</button>
    li.appendChild(remove)

    let up = document.createElement('button') 
    up.textContent = "up" 
    up.className = "up" 
    li.appendChild(up)

    let down = document.createElement('button') 
    down.textContent = "down" 
    down.className = "down" 
    li.appendChild(down)

}