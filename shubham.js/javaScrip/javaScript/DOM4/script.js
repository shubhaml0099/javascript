/* <h1>Head</h1>
    <input type="text" name="hello" id="hello2">
    <button>buttonA</button> */

    let buttonA = document.querySelector('button')
    let inputText = document.querySelector('input[name="hello"]')
    let headOne = document.querySelector('h1')

    buttonA.addEventListener('click',()=>{

        let cl = inputText.value
        headOne.style.color = cl
        inputText.value =""

    })