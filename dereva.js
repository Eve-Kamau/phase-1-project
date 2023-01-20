const url_API = 'https://my-json-server.typicode.com/Eve-Kamau/phase-1-project/drivers';

getDriverData();

function getDriverData() {
    fetch(url_API)
    .then(response => response.json())
    .then(data => {
        console.log(data);

    data.innerHTML = ''
    data.forEach(driver => {
        console.log(driver);
    const li = document.createElement('li')

    listItems.push(li)

    li.innerHTML = `
    <img src="${driver.driver_image}" alt="${driver.name}"
    <div class ="driver-info">
        <h4>"${driver.name}"</h4>
        <p>${driver.driving_experience}, ${driver.description}, ${driver.city}</p>
        `
    })
})
.catch((error) =>  {
    console.log('Driver Not Available!')
    })

}