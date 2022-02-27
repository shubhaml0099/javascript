



let pro = new Promise(function(reject,resolve){

    let a = 10 
    let b = 20 

    if(a == b){
        resolve([11,22,33])
    }
    else {
        reject([22,44,55])
    }


})

pro.then(function(arr){
    return arr[0]

}).then((a)=>{
    console.log(a)
})


