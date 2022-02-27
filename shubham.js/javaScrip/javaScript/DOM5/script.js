
// for program one and tw0
let liList = document.querySelectorAll('li')
console.log(liList)
let buttonA = document.querySelector('button')
// console.log(liList)







//program One

buttonA.addEventListener('click',function(){
    for(let i = 0 ; i < liList.length ;i++){
        liList[i].style.color = "red"
        liList[i].textContent = liList[i].textContent.toUpperCase()
    }

})


// program 2
// buttonA.addEventListener('click',function(){
//     for(let i = 0 ; i < liList.length ;i++){
//         if(i % 2 == 0){
//             liList[i].style.color = "purple"
//         }
//         else {
//             liList[i].style.color = "yellow"
//         }
//     }

// })

// program3

// let liList =document.querySelectorAll('.red')
// let liList2 =document.querySelectorAll('.green')
// let buttonA = document.querySelectorAll('button')[0]


// buttonA.addEventListener('click',()=>{

//     for(let i = 0 ; i < liList.length ; i++){
//         liList[i].style.color = "red"
//     }
//     for(let i = 0 ; i < liList.length ; i++){
//         liList2[i].style.color = "green"
//     }

// })







// buttonA.addEventListener('click', function () {

//     for (let i = 0; i < liList.length; i++) {
//         if(liList[i].className === "red"){
//             liList[i].style.color = "red"
//         }
//         else{
//             liList[i].style.color = "green"
//         }
//     }




// })



