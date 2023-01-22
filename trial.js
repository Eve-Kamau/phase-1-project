const url_API = 'https://my-json-server.typicode.com/Eve-Kamau/phase-1-project/drivers';
var container = document.querySelector('#container');
const listItems = [];

document.addEventListener('DOMContentLoaded',() => {
    getDriverData()
})

//Upload Driver Data from API
function getDriverData() {
    fetch(url_API)
    .then(response => response.json())
    .then(data => {
        console.log(data);
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
})
.catch((error) =>  {
    console.log('Driver Not Available!')
    })
}

/*  
//data.forEach(driver => {
    //const li = document.createElement('li')
    //listItems.push(li)
     //container.innerHTML
*/
 //result.appendChild(li)