// // function substraction


// let div = function (x, y) {
//     return x / y
// }

// //function in function

// function div1(x, y, fn) {
//     r = fn(x, y)
//     return r
// }
// let ss = div1(2, 3, div)
// console.log(ss)
// console.log(2 / 3)

// // filter ------>
// let count = [1200, 23, 50, 877, 354, 290, 657, 34, 100, 20, 277, 10, 59]
// console.log(count)
// let bigAmount = count.filter(function (el) {           //  ------------filter
//     return el >= 100
// })
// console.log('Big Amount >=100  =' + bigAmount)
// let smallAmount = count.filter(function (el) {
//     return el < 100
// })
// console.log('Small Amount <100  =' + smallAmount)
// let discountedBigamount = bigAmount.map(function (el) {  //--------------map
//     return el * 0.10
// })
// console.log('Discounted Amount for >=100  = ' + discountedBigamount)
// let totaldiscountedamount = discountedBigamount.reduce(function (acc, el, index, arry) {  //---------reduce 
//     return acc + el
// })
// console.log('Total Discounted Amount   =' + totaldiscountedamount)
// let payAmount = count.reduce(function (acc, el) {
//     return (acc + el)//-totaldiscountedamount
// })
// console.log('Pay Amount  =' + payAmount)
// //  let totalpayment= payAmount.map(function(el,index,arry){
// //     return el-totaldiscountedamount
// //  })
// //  console.log('Total Payment with Discount  ='+totalpayment)


// ww1 = 'shubham_langote'
// for (let i = 0; i < ww1.length; i++) {
//     console.log(ww1[i] + '  indian')
// }
// ssd = ww1.split('_')
// console.log(ssd)
// ssd1 = ssd.some(function (el) {
//     return el == 'shubham'
// })
// console.log(ssd1)

// // // program


// // // skills of person who name starts with 'a'

// // // let a = students.filter(function(el){
// // //     return el.fullName[0] === "a" || el.fullName[0] === "A"
// // // })

// // // a.forEach(element => {
// // //     console.log(`${element.fullName} : ${element.skills}`)
// // // });


// // // string new method

// // // let b = "abhisha".startsWith('a')
// // // console.log(b)

// // // program 2

// // let b = students.filter(function(el){
// //     return el.fullName.startsWith('a') || el.fullName.startsWith('A')
// // })

// // b.forEach(element => {
// //     console.log(`${element.fullName} : ${element.skills.length}`)
// // });

// // // explanation

// // let firstName = "chinmay"
// // let lastName = "deshpande"

// // // Hello  chinmay deshpande !
// // console.log("Hello "+firstName+" "+lastName+" "+"!")
// // console.log(`Hello  ${firstName} ${lastName} !`)

// // // program 3 
// // // username -- "chinmay deshpande" // 
// // // add user name for all users 


// // students.forEach(function(el){
// //     //console.log(el)
// //     el.username = el.fullName.split(' ')[0][0]+el.fullName.split(' ')[1][0]
// // })

// // console.log(students)


// // // program 4

// // let r = students.reduce(function(acc,el){

// //     return acc + el.age

// // },0)/students.length
// // console.log(r)


// // // program 5 
// // // first user more than 3 skills 

// // let e = students.find(function(el){
// //     return el.skills.length >= 3
// // }).fullName

// // console.log(e)


// // // program 6

// // // pune and python

// // let ra = students.filter(function(el){
// //     return el.city === "pune" && el.skills.includes('python')
// // }).forEach(function(el){
// //     console.log(el.fullName)
// // })



// // let ca = students.filter(function(el){
// //     return el.city === "pune" && el.skills.indexOf('python') > 0
// // }).forEach(function(el){
// //     console.log(el.fullName)
// // })

// // //program 7 

// // let ia = [11,22,33,44,55,66,77,11,22]
// // let notDuplicate = [] // [11]



// // for(let i = 0 ; i < ia.length ;i++){

// //     if(notDuplicate.indexOf(11) < 0){
// //         notDuplicate.push(ia[i])
// //     }

// // }

// // // program 8

// // let y = [22,33,44,22]
// // // [22,33,44]
// // ia.filter(function(el,index,arr){

// //     return arr.indexOf(el) === index

// // })

// //duplicate no find

// let srk = [12, 24, 57, 87, 12, 24]
// let dd = srk.filter(function (el, index, arry) {
//     return arry.indexOf(el) !== index
// })
// console.log(dd)


// // loop on object 

// let shubham = {
//     fullName: 'shubham langote ',
//     age: 25,
//     colour: 'white'

// }

// //now loop 
// for (key in shubham) {
//     console.log(key, shubham[key])
// }
// //console.log(shubham)

// let ddlg = srk.map(function (el, index, arry) {
//     return el * 2
// })
// console.log(ddlg)

// // function expration 
// let kumar = function (x,y){
//     return x*y
// }
// let mm = kumar(2,4)
// console.log(mm)




//loop on arry 

// let shubhamaa = [12, 34, 57, 77, 68, 25, 23, 57, 64]

// for (let i = 0; i < shubhamaa.length; i++) {
//     if(shubhamaa[i]===77){
//         console.log('india')
//         continue;
//     }
//     console.log([shubhamaa[i]])

// }



// let shu = function(x,y){
//     x=10
//     y=20
//     return
//     console.log (x+y)

// }

// console.log(shu)



// class ShubhamB {
//     setfullName(fn){
//         this.fullName = fn
//     }
//     setage(ag){
//         this.age = ag
//     }
//     setrollNo(rn){
//         this.rollNo = rn
//     }
// }

// let shubham3 = new ShubhamB()

// shubham3.setfullName('shubham langote')
// shubham3.setage(25)
// shubham3.setrollNo(32)

// console.log(shubham3)

//  shubham3.setfullName('rahul patil')
// console.log(shubham3)

// shubham3.fullName('langote')
// console.log(shubham3)



// When('User Enter  UserName',()=>{
//     cy.get('#txtUsername').type('Admin')
// });

 
// # When User Enter  UserName
// # And User Enter  Password
// # And Click on Submit Button
// # Then User Should see DashBoard Logo

// #   @focus
// # Scenario: Verify login with invalid credentials
// #   Given User on Login in Page
// #   When User Enter  UserName
// #   And User Enter  Password
// #   And Click on Submit Button
// #   Then User Should Valid message


// # Feature: Google Main Page

// #   I want to open a search engine

// #   @focus
// #   Scenario: Opening a search engine page
// #     Given I open Google page
// #     Then I see "Google" in the title

// When('User Enter  Password',()=>{
//     cy.get('#txtPassword').type('admin12')
// });

// When('Click on Submit Button',()=>{
//     cy.get('#btnLogin').click()
// });

// Then('User Should see DashBoard Logo',()=>{
//     cy.get('img[alt="OrangeHRM"]').should('be.visible')
// });

// Then('User Should Valid message',()=>{
//     cy.get('#spanMessage').should('have.text','Invalid credentials')
// });




date = new Date

let sss = date.getFullYear()
console.log(sss)