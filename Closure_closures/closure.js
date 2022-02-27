

// closure  ---------------------->>>--------- 

// function addition(){
//     x=23
//     y=20
//     console.log(x+y)
//     //return (x+y)
// }
// addition()
// addition(20,20)

// function addition2(x,y){
//     x=23
//     y=20
//     console.log(x+y)
//     return (x+y)
// }
// addition2()
// addition2(2,20)



// closures ---------------------->>>--------------

function addition2(x, y) {
    x = 23
    y = 20
    console.log(x + y)
    return (x + y)                //-------->> problem for ask
    function add() {
        console.log(x + y)
        
    }
    add()

}
addition2()