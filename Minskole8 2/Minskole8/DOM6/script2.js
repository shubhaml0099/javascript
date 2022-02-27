let liList = document.querySelectorAll('li')
let buttonOne = document.querySelector('button')

//[liElement,liElement2,liElement3,liElement4]


// for(let i = 0 ; i < liList.length ; i++){
//     console.log(liList[i])

//     if(i % 2 == 0){
//         liList[i].style.color = "red";
//     }
//     else {
//         liList[i].style.color = "green";
//     }
// }

// console.log(0%2) //===> 0

buttonOne.addEventListener('click',function(){

    for(let i = 0 ; i < liList.length ; i++){
        console.log(liList[i])
    
        if(i % 2 == 0){
            liList[i].style.color = "red";
            liList[i].style.height = "100px";
            liList[i].style.width = "100px";
            liList[i].style.background = "green";
            
        }
        else {
            liList[i].style.color = "green";
            liList[i].style.height = "100px";
            liList[i].style.width = "100px";
            liList[i].style.background = "red";
            
        }
    }


})