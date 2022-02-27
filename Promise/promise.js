
// //  promiss --------------------->>---------->>

// let shub = new Promise(function(resolve,reject){
//     let x = 500
//     let y = 500

//     if(x==y){
//         resolve('i am resole')
//     }else{reject('i am reject')}
// })

// shub.then(function(sl){
//     console.log(sl)
// }).catch(function(sl){
//     console.log(sl)
// })


// asynchronus & synchronus

function add(x,y){
    setTimeout(function(){
        console.log('Hellow 1') 
        setTimeout(function(){
            console.log('Hellow 2')
            setTimeout(function(){
                console.log('Hellow 3')
                setTimeout(function(){
                    console.log('Hellow 4')
                },1000)
            },5000)
        },2000)       
    },1000)
    //console.log('hllow 1 ')
    
}
add()