//var mainContainer = document.getElementById('mainContainer');
var mainRow = document.getElementById('mainRow');
var page=document.getElementById('page');
var urlSearch;
var nexPage = false;


document.getElementById('btnSearch').addEventListener('click', getMovieData);

var xhr = new XMLHttpRequest();
function getMovieData(){
    if (nexPage) {
    while (mainRow.firstChild) mainRow.removeChild(mainRow.firstChild);
}
    urlSearch = 'https://api.themoviedb.org/3/movie/now_playing?api_key=e530dbf87d3f35fe1c14ace5c962084a&page=' + page.value;
    
    xhr.open("GET", urlSearch);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          data = JSON.parse(xhr.responseText);
          setTimeout(displayMovie, 1000);
          nexPage=true;
        }
    }
    xhr.send();
    
}

function displayMovie(){
    for (var i=0; i<data.results.length; i++){
        var movieCard = document.createElement('div');
            movieCard.classList.add('col-lg-4', 'col-md-6', 'col-sm-12', 'col-12', 'mt-3', 'pl-0', 'pr-0');
        var imgDataRow = document.createElement('div');
            imgDataRow.classList.add('row');
        var posterBlock = document.createElement('div');
            posterBlock.classList.add('col-lg-8', 'col-md-12', 'col-sm-12', 'col-12');
        var poster = document.createElement('img');
            poster.style.width='100%';
        var dataBlock = document.createElement('div');
            dataBlock.classList.add('col-lg-4', 'col-md-12', 'col-sm-12', 'col-12', 'pl-0', 'pr-0');
        var dataRow = document.createElement('div');
            dataRow.classList.add('row');
        var titleBlock = document.createElement('div');
            titleBlock.classList.add('col-lg-12', 'col-md-4', 'col-sm-9', 'col-9', 'pl-0', 'pr-0', 'pl-md-3', 'pl-lg-0', 'pl-sm-3');
        var titleItem = document.createElement('span');
            titleItem.innerHTML = 'Title: ';
        var titleP = document.createElement('p');
            titleP.classList.add('d-flex', 'justify-content-md-start', 'justify-content-sm-end', 'justify-content-end');
        var dateBlock = document.createElement('div');
            dateBlock.classList.add('col-lg-12', 'col-md-4', 'col-sm-6', 'd-none', 'd-sm-none', 'd-md-block', 'pl-0', 'pr-0');
        var dateItem = document.createElement('span');
            dateItem.innerHTML = 'Date: ';
        var dateP = document.createElement('p');
            dateP.classList.add('d-flex');
        var ratingBlock = document.createElement('div');
            ratingBlock.classList.add('col-lg-12', 'col-md-4', 'col-sm-3', 'col-3', 'pl-0', 'pr-0');
        var ratingItem = document.createElement('span');
            ratingItem.innerHTML = 'Rating: ';
        var ratingP = document.createElement('p');
            ratingP.classList.add('d-flex', 'justify-content-md-start', 'justify-content-sm-end', 'justify-content-end');
        var descriptionRow = document.createElement('div');
            descriptionRow.classList.add('row');
        var descriptionBlock = document.createElement('div');
            descriptionBlock.classList.add('d-flex', 'col-12', 'd-none', 'd-sm-none', 'd-md-block');
        var descriptionItem = document.createElement('span');
        descriptionItem.classList.add('pl-3');
            descriptionItem.innerHTML = 'Description: ';
            
       
        if (data.results[i].poster_path==null) 
            posterBlock.classList.add('posterError');
            else poster.src = 'https://image.tmdb.org/t/p/w500_and_h282_face' + data.results[i].poster_path;
        poster.alt = "Poster didn't load.";

        titleP.innerHTML = '"' + data.results[i].title + '"';
        dateP.innerHTML = data.results[i].release_date;
        
        descriptionBlock.innerHTML = data.results[i].overview; 
        if(data.results[i].vote_average<3)
            ratingP.style.color='red';
            else if (data.results[i].vote_average>=3 && data.results[i].vote_average<7) ratingP.style.color='#ffcc00';
            else ratingP.style.color='green';

        ratingP.innerHTML = data.results[i].vote_average;
        mainRow.appendChild(movieCard);
        movieCard.appendChild(imgDataRow);
        imgDataRow.appendChild(posterBlock);
        posterBlock.appendChild(poster);
        imgDataRow.appendChild(dataBlock);
        dataBlock.appendChild(dataRow);
        dataRow.appendChild(titleBlock);
        titleBlock.appendChild(titleItem);
        titleBlock.appendChild(titleP);
        dataRow.appendChild(dateBlock);
        dateBlock.appendChild(dateItem);
        dateBlock.appendChild(dateP);
        dataRow.appendChild(ratingBlock);
        ratingBlock.appendChild(ratingItem); 
        ratingBlock.appendChild(ratingP);
        movieCard.appendChild(descriptionRow);
        descriptionRow.appendChild(descriptionItem);
        descriptionRow.appendChild(descriptionBlock);
        
    }

}