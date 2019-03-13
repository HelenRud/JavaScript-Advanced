window.onload = function(){

    var btnArr = document.getElementsByTagName('button');
    var img = document.getElementById('img');
    img.src = 'img/car.jpg';
    img.classList.add('show');
    var prev = img.src;
    for (var i=0; i<btnArr.length; i++){
         btnArr[i].addEventListener('click', showImg);
     }
     function showImg(e){
        //img.classList.toggle('show');
        img.classList.toggle('hide');
    
        switch (e.target.id){
             case 'carBtn': 
                img.classList.toggle('show');
                setTimeout(()=>{img.src = 'img/car.jpg'; img.classList.toggle('show');img.classList.toggle('hide');}, 800);
                break;
             case 'animBtn':
                img.classList.toggle('show');
                setTimeout(()=>{img.src = 'img/anim.jpg';img.classList.toggle('show');img.classList.toggle('hide');}, 800);   
                break;
             case 'foodBtn': 
                img.classList.toggle('show');
                setTimeout(()=>{img.src = 'img/food.jpg'; img.classList.toggle('show');img.classList.toggle('hide');}, 800);
                break;
        } 
     }
}