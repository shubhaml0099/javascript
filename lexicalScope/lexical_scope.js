
// lexical scope 
// every childfunction take parent function referance value 
// but parent function can not take child function valuexs

//  addition = function(){
//     x=10
//     y=20
//     console.log(x+y)

//     function addition2(){
//             a=10
//             b=35
//             console.log(a+b)

//             function addition3(){
//                 console.log(a+b+x+y)
//             }
//             addition3()
//     }
//     addition2()
// }
// addition()











// lexical scope 

let ram = function(){
    x=10
    y=20
    console.log(x+y)

    function ram2(){
        console.log(x+10)

        function ram3(){
            z=30
            r=40
            console.log(x+y+z+r)
        }
        ram3()
    }
    ram2()
}
ram()