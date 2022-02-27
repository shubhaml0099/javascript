
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
let buttonA = document.querySelector('button')
let inputtext = document.querySelector('input')

console.log(ulList)
console.log(buttonA)
console.log(inputtext)

buttonA.addEventListener('click',function(){
   let str =  inputtext.value
   let li = document.createElement('li') // <li></li>
   li.textContent = str   // <li>chinmay</li>
   ulList.append(li)
   inputtext.value = " "

})