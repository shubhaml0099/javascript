
let headingOne = document.querySelector('h1')
let headingTwo = document.querySelector('h2')

headingOne.addEventListener('click', () => {

    headingOne.style.color = 'red'
    headingOne.style.backgroundColor = 'white'
    headingTwo.style.backgroundColor = 'white'
    headingTwo.style.color = 'red'

})
