const url_API = '';

document.addEventListener('DOMContentLoaded',() => {
    getOneDriver();
})

//Obtain One Driver Details
function getOneDriver(id = 1){
    fetch(`${url_API}/${id}`)
    .then(response =>  response.json())
    .then(film  => {
    console.log(film);

    getFilm(film)
    }) 
    .catch((error) => {
    console.log('ERROR!')
    })
}