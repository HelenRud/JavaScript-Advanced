var body = document.getElementsByTagName('body')[0];

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.themoviedb.org/3/movie/now_playing?api_key=e530dbf87d3f35fe1c14ace5c962084a");
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
          data = JSON.parse(xhr.responseText);
    }
}
xhr.send();
setTimeout(displayMovie, 1000);
function displayMovie(){
    for (i=0; i<data.results.length; i++){
        var mainBlock = document.createElement('div');
        var poster = document.createElement('div');
        var posterImg = document.createElement('img');
        var title = document.createElement('div');
        var date = document.createElement('div');
        var description = document.createElement('div');
        var rate = document.createElement('div');
        var hrLine = document.createElement('div');
        mainBlock.classList.add('mainBlock');
        poster.classList.add('poster');
        poster.appendChild(posterImg);
        posterImg.classList.add('posterImg');
        title.classList.add('data');
        date.classList.add('data');
        description.classList.add('data');
        rate.classList.add('data');
        hrLine.classList.add('hrLine');
        body.appendChild(mainBlock);
        posterImg.src = 'https://image.tmdb.org/t/p/w500_and_h282_face' + data.results[i].poster_path;
        title.innerHTML = 'Title: ';
        title.innerHTML += data.results[i].title;
        date.innerHTML = 'Date: ';
        date.innerHTML += data.results[i].release_date;
        description.innerHTML = 'Description: ';
        description.innerHTML += data.results[i].overview;
        rate.innerHTML = 'Rate: ';
        rate.innerHTML += data.results[i].vote_average;
        mainBlock.appendChild(poster);
        mainBlock.appendChild(title);
        mainBlock.appendChild(date);
        mainBlock.appendChild(description);
        mainBlock.appendChild(rate);
        body.appendChild(hrLine);   
    }
 
}