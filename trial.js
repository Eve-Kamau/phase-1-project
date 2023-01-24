const url_API = 'https://my-json-server.typicode.com/Eve-Kamau/phase-1-project/drivers';
const container = document.querySelector('.container');
//const post= document.getElementById("feedback");
//const listItems = [];

document.addEventListener('DOMContentLoaded',() => {
    getDriverData();
})

//Upload Driver Data from API
function getDriverData() {
    fetch(url_API)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      showDrivers(data)
    })
    .catch(error =>  {
     console.log('Error!');
     })
     }


function showDrivers(data){
data.forEach(driver => {
  const div = document.createElement('div');
  const image = document.createElement('img');
  const type = document.createElement('h2');
  const city = document.createElement('h3');
  const description = document.createElement('h4')
  const rate = document.createElement('h1')
  const like = document.createElement('button');
  const view = document.createElement('button');
  
  div.classList = 'card'
  image.classList = 'card-img'
  like.classList = 'empty'
  view.classList = 'empty'
 
  image.src = `${driver.image_url}`
  type.innerHTML = `Driver Type: ${driver.drivertype}`
  city.innerHTML =`City: ${driver.city}`
  description.innerHTML =`${driver.description}`
  rate.innerHTML = `Rate:  ${driver.rate}`

  like.textContent = 'VIEW MORE'
  view.textContent = 'BOOK DRIVER'

  div.appendChild(image)
  div.appendChild(type)
  div.appendChild(city)
  div.appendChild(description)
  div.appendChild(rate)
  div.appendChild(like)
  div.appendChild(view)
  container.appendChild(div)
})
}

//Add Review
document.getElementById('subbtn').addEventListener('click', function(e) {
  addComment(e)
})

function addComment(e){
//e.preventDefault()
let data = null
let name = document.getElementById("userName")
let email = document.getElementById("userEmail")
let comment = document.getElementById("userComment")
data = "Name : " + name.value + "<br/>Email : "+email.value+ "<br/> Review : "+comment.value
console.log(data);
document.getElementById("data").innerHTML =  data
}
