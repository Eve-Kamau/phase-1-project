const url_API = 'https://my-json-server.typicode.com/Eve-Kamau/phase-1-project/drivers';
const result = document.getElementById('result')
const filter =  document.getElementById('filter')
const listItems = []

document.addEventListener('DOMContentLoaded',() => {
    getDriverData()
})

//Check Input, Fire Event
filter.addEventListener('input', (e) => filterData (e.target.value));
    
//Upload Driver Data from API
function getDriverData() {
    fetch(url_API)
    .then(response => response.json())
    .then(data => {
        console.log(data);

    //Clear result 
    result.innerHTML = ''
    //console.log(result);
    data.forEach(driver => {
        console.log(driver);

    //Fill data to result
    const li = document.createElement('li')
   
    listItems.push(li)

    li.innerHTML = `
    <img src= ${driver.image_url} alt="Driver Image" title ="Dereva">
    <div class ="driver-info">
        <h4> ${driver.name}</h4>
        <p> EXP: ${driver.experience} </p>
        <p>${driver.city} </p>
    </div> 
    `
    result.appendChild(li)
    })
})
.catch((error) =>  {
    console.log('Driver Not Available!')
    })
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove('hide')
        }else {
            item.classList.add('hide')
        }
        })
    }

//  //<p>${driver.description}</p>
//Experience: ${driver.experience}