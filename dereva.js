const url_API = 'https://my-json-server.typicode.com/Eve-Kamau/phase-1-project/drivers';
const drivercontainer = document.querySelector('#container');
//const filter =  document.getElementById('filter');
//const listItems = [];

document.addEventListener('DOMContentLoaded',() => {
    getDriverData()
    showDrivers()
})


    
//Upload Driver Data from API
function getDriverData() {
    fetch(url_API)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        showDrivers(drivers);
    })
.catch((error) =>  {
    console.log('Driver Not Available!')
    })
    }