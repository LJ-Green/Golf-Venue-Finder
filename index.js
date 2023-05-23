const url = 'https://golf-course-finder.p.rapidapi.com/courses?radius=10&lat=36.56910381018662&lng=-121.95035631683683';
const id = localStorage.getItem("id")
const usersData = document.querySelector(".array__container")

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e67dad275cmsh793f4bf9b581d6bp136650jsn60824e322b80',
		'X-RapidAPI-Host': 'golf-course-finder.p.rapidapi.com'
	}
};

async function renderVenues(id) {
	const response = await fetch(url, options);
	const result = await response.json();
  usersData.innerHTML = result.courses.map((response) => venues(response)).join("");
	console.log(result.courses);
} 

function venues(venue) {
    return `<div class="venue__array--container">
    <div class="venue__info">
      <h4 class="venue__name"> Name: ${venue.name}</h4>
        <div class="location__and--distance">
          <p class="venue__zip-code">Zip_code: <span class="bold"> ${venue.zip_code}</span></p>
          <h5 class="venue__distance">Distance: <span class="bold"> ${venue.distance}</span></h5>
        </div> 
    </div>
  </div>`
}

renderVenues(id);