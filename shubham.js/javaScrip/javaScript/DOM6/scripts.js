
//   <ul>
//     <li>amol</li>
//     <li>ram</li>
//     <li>sham</li>
//     <li>sandeep</li>
// </ul>

// createElement <li></li>
// add the text  <li>chinmay</li>
// placed the element at the end

let ulList = document.querySelector('ul')
let buttonA = document.querySelector('#add')
let inputtext = document.querySelector('input')
let liList = document.querySelectorAll('li')

for(let i = 0 ; i < liList.length ; i++){
    //console.log(liList[li])

    CreateButton(liList[i])
}


console.log(ulList)
console.log(buttonA)
console.log(inputtext)

buttonA.addEventListener('click',function(){
   let str =  inputtext.value
   let li = document.createElement('li') // <li></li>
   li.textContent = str   // <li>chinmay</li>
   CreateButton(li)
   ulList.append(li)
   inputtext.value = " "

})


function CreateButton(li){

    let up = document.createElement('button') // <button></button>
    up.textContent = "Up" // <button>Up</button>
    up.className = "up" //  <button class = "up">Up</button>
    li.append(up)

    
    let down = document.createElement('button') // <button></button>
    down.textContent = "Down" // <button>Down</button>
    down.className = "down" //  <button class = "down">Down</button>
    li.append(down)

    let remove = document.createElement('button') // <button></button>
    remove.textContent = "Remove" // <button>Remove</button>
    remove.className = "remove" //  <button class = "remove">Remove</button>
    li.append(remove)


}