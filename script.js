const API = 'zbnn++vX8dQeiuPs+6Ba1A==HEH3HxAWoXOUavts'
const input = document.querySelector('input')
const passwordResult = document.querySelector('span')
const img = document.querySelector('img')
const button = document.querySelector('button').addEventListener('click', passwordGen)
let pswd;



function passwordGen(){

    let length = input.value 
    
    fetch(`https://api.api-ninjas.com/v1/passwordgenerator?length=${length}`, {
    
        method: 'GET',
        headers: {
            'X-Api-key': API
        }    
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        pswd = data.random_password
        passwordResult.innerText = ` \n ${length} character password: ${data.random_password}`

        return fetch(`https://quickchart.io/qr?text=Password123` , {
            method: 'GET',
        })
        .then(res => res.blob())
        .then(data => {
            console.log(data)

            const url = URL.createObjectURL(data)
            console.log(url)
            img.src = url
        })
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

}

