
// creat element         <li><li>
// add new text          <li>text<li>
// element add at end 

let buttonA = document.querySelector('button')
let ullist = document.querySelector('ul')
let lilist = document.querySelectorAll('li')
let input = document.querySelector('input')

buttonA.addEventListener('click',function(){
    ullist.style.color = 'red'
    let zz = input.value
    let li = document.createElement('li')
       //  li.style.color = 'red'
        li.textContent = zz
        ullist.append(li)          // problem ask not run  
        input.value = ''
})
// buttonA.addEventListener('click',function(){
//     let str =  inputtext.value
//     let li = document.createElement('li') // <li></li>
//     li.textContent = str   // <li>chinmay</li>
//     ulList.append(li)
//     inputtext.value = " "
 
//  })



// method TARGET for finding tagname 

// let bodyElement = document.querySelector('body')

// bodyElement.addEventListener('click',(event)=>{
//     console.log(event.target.tagName)

// })