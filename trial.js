const url_API = 'https://my-json-server.typicode.com/Eve-Kamau/phase-1-project/drivers';
const container = document.querySelector('.container');
//const listItems = [];

document.addEventListener('DOMContentLoaded',() => {
    getDriverData()
})

//Upload Driver Data from API
function getDriverData() {
    fetch(url_API)
    .then(response => response.json())
    .then(data => {
      console.log(data)
showDrivers(data)
  });

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

  like.textContent = 'like'
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
.catch((error) =>  {
console.log('Driver Not Available!')
});
}
}
   /*   
    data.forEach((driver) => {
    container.innerHTML += `
    <div id="cards" class="boxes">
      <div class="box-content">
        <h2>${driver.type}</h2>
        <p>
          ${driver.description}
        </p>
        <a class="showmore" href="#">VIEW</a>
      </div>
    </div>`
   
    var bgimg = document.getElementById(`cards${i}`);
    bgimg.style.backgroundImage = `url('img/${driver.image_url}.jpg')`
    }
)
})*/


/*  
//data.forEach(driver => {
    //const li = document.createElement('li')
    //listItems.push(li)
     //container.innerHTML
*/
 //result.appendChild(li)