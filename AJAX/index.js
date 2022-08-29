// PROGRAM 1
// following program where we only show haw to add HTML elements in UI By using renderHTML and insertAdjesantHTML ElementS
// here we take all data from postman API by copy 

/*


let data = {
    "page": 2,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "shubham ",
            "last_name": "langote",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
    ],
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
}


let rr = data.data
//console.log(rr)

// for(let key in rr){
//     console.log(key,rr[key])
// }

function renderHtml(el) {
    let rr1 = document.querySelector('#R15')

    let html =
        `<div>
    <h1>${el.id}</h1>
    <h2>${el.email}</h2>
    <img src = ${el.avatar}  />
    <h3>${el.first_name}${el.last_name}</h3>
    </div>`
    rr1.insertAdjacentHTML('beforeend', html)
}

data.data.forEach(function (el) {

    renderHtml(el)

})


*/



// PROGRAM 2
// now program in this program we fetch API and show on UI 

function renderHtml(el) {
    let rr1 = document.querySelector('#R15')

    let html =
        `<div>
    <h1>${el.id}</h1>
    <h2>${el.email}</h2>
    <img src = ${el.avatar}  />
    <h3>${el.first_name}${el.last_name}</h3>
    </div>`
    rr1.insertAdjacentHTML('beforeend', html)
}

function getUser(pageNumber) {
    fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then(function (res) {
            return res.json()

        }).then(function (response) {
            //console.log(response)
            response.data.forEach(el => {
                renderHtml(el)
            });
        })

}
//getUser(1)
//getUser(2)



// PROGRAM 3

// in this program we use async & await to perform all step which is do in above two program for all users

// what is meen by async await ==>> 

function renderHtml(el) {
    let rr1 = document.querySelector('#R15')

    let html =
        `<div>
    <h1>${el.id}</h1>
    <h2>${el.email}</h2>
    <img src = ${el.avatar}  />
    <h3>${el.first_name}${el.last_name}</h3>
    </div>`
    rr1.insertAdjacentHTML('beforeend', html)
}


async function getUser(pageNumber) {
    let response = await fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    let res = await response.json()
    let user = res.data
    return user
}

getUser(1).then(function (user) {
    user.forEach(function (el) {
        renderHtml(el)
    })
})


//PROGRAM 4
// for singal user information 

async function getSingalusers(pageNumber) {
    let responce = await fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    //console.log(responce.json())  --------------------------------------------->>> in async await function we cant print value                                                                                  
    let resp = await responce.json()                                                // it says pending promiss    
    let id = resp.data[0].id
    let responce2 = await fetch(`https://reqres.in/api/users/${id}`)
    let res2 = await responce2.json()
    let user = res2.data
    renderHtml(user)
}
getSingalusers(1)