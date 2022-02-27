

let ulList = document.querySelector('ul')
let liList = document.querySelectorAll('li')

// ulList.addEventListener('mouseover',()=>{

//     ulList.textContent = ulList.textContent.toUpperCase()

// })

ulList.addEventListener('mouseover',()=>{
   for(let i = 0 ; i < liList.length ;i++){
    liList[i].textContent = liList[i].textContent.toUpperCase()

   }

})

ulList.addEventListener('mouseout',()=>{
    for(let i = 0 ; i < liList.length ;i++){
     liList[i].textContent = liList[i].textContent.toLowerCase()
    }
})