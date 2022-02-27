
let headingOne = document.querySelector('h1')
let headingTwo = document.querySelector('h2')

headingOne.addEventListener('click', () => {

    headingOne.style.color = 'red'
    headingOne.style.backgroundColor = 'blue'
    headingTwo.style.backgroundColor = 'blue'
    headingTwo.style.color = 'red'

})
let headingthree = document.querySelector('h4')
    headingthree.addEventListener('click', function () {
    headingthree.style.color = 'white'
    headingthree.style.backgroundColor = 'blue'
})
