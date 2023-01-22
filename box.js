var titlearray =["css","js","python","java"];
var descriptionarray =["css style","js program","python code","java objects"];

var dynamic = document.querySelector('.container');  

for (var i = 0; i < titlearray.length; i++) {
  var fetch = document.querySelector('.container').innerHTML;

  dynamic.innerHTML = `<div id="cards${i}" class="boxes">
      <div class="box-content">
        <h2>${titlearray[i]}</h2>
        <p>
          ${descriptionarray[i]}
        </p>
        <a class="showmore" href="#">VIEW</a>
      </div>
    </div>` + fetch ; 
    var bgimg = document.getElementById(`cards${i}`);
    bgimg.style.backgroundImage = `url('img/${titlearray[i]}.jpg')`;
} 