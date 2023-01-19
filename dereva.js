const url_API = 'https://my-json-server.typicode.com/Eve-Kamau/phase-1-project/drivers';

document.addEventListener('DOMContentLoaded',() => {
    getOneDriver();
})

//Obtain One Driver Details
function getOneDriver(id = 1){
    fetch(`${url_API}/${id}`)
    .then(response =>  response.json())
    .then(driver  => {
    console.log(driver);

    getDriver(driver)
    }) 
    .catch((error) => {
    console.log('ERROR!')
    })
}

function getDriver(driver){
    document.getElementById('id').textContent = drivers.id,
    document.getElementById('name').textContent = drivers.name,
    document.getElementById('experience').textContent = drivers.driving_experience
    document.getElementById('description').textContent = drivers.description
    document.getElementById('image').src = drivers.driver_image
}   

//FETCH ALL DRIVERS, DISPLAY MENU
function getAllDrivers(){
fetch(url_API)
.then(response => response.json())
.then(data => {
    console.log(data);
    const driverList = data.map(driver => drivers.name)
    addDrivers(driverList)
})
.catch((error) =>  {
console.log('Driver Not Available!')
})
getOneDriver();
}

function addDrivers(driverList){
    //console.log(filmList)
    films.innerHTML = null;
    document.getElementById('films').replaceChildren()
    const filmMenu = document.getElementById('films')
    filmList.forEach(film => {
        //console.log(film)
        const li = document.createElement("li")
        li.textContent = film
        filmMenu.appendChild(li)
    });
}
