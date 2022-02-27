
let ulList = document.querySelector('ul')
let addButton = document.querySelector('#add')
let inputText = document.querySelector('input')
let liList = document.querySelectorAll('li')// nodeList [li,li,li]
for(let i = 0 ; i < liList.length ;i++){
    //console.log(liList[i])
    CreateButton(liList[i])
}

addButton.addEventListener('click',function(){
    let text = inputText.value
    let li = document.createElement('li') // <li></li>
    li.textContent= text // <li>Red</li>
    CreateButton(li)
    ulList.appendChild(li)

})
ulList.addEventListener('click',function(event){
    if(event.target.tagName === "BUTTON"){
        if(event.target.className === "remove"){

            let li = event.target.parentNode
            let ul = li.parentNode
            ul.removeChild(li)

        }
        if(event.target.className === "up"){

            let li = event.target.parentNode
            let ul = li.parentNode
            let prev = li.previousElementSibling 
            if(prev){
                ul.insertBefore(li,prev)

            }
              
            
        }
        if(event.target.className === "down"){
            let li = event.target.parentNode
            let ul = li.parentNode
            let nextLi = li.nextElementSibling
            if(nextLi){
                ul.insertBefore(nextLi,li)
            }
            
 
        }



    }

})

// Sets and maps








function CreateButton(li){
    let remove = document.createElement('button') // <button></button>
    remove.textContent = "remove" //<button>remove</button>
    remove.className = "remove" //<button class ="remove">remove</button>
    li.appendChild(remove)

    let down = document.createElement('button') // <button></button>
    down.textContent = "down" //<button>down</button>
    down.className = "down" //<button class ="down">down</button>
    li.appendChild(down)

    let up = document.createElement('button') // <button></button>
    up.textContent = "up" //<button>up</button>
    up.className = "up" //<button class ="up">up</button>
    li.appendChild(up)

}