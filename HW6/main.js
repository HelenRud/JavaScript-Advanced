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





// window.onload = function(){
//     var btnArr = document.getElementsByTagName('button');
//     var img = document.getElementById('img');
//     // for (var i=0; i<btnArr.length; i++){
//     //      btnArr[i].addEventListener('click', showImg);
//     //  }
//     document.getElementById('carBtn').onclick = function(){
//         img.classList.toggle('show');
//         setTimeout(function(){img.src = 'img/car.jpg'}, 1000);
//         setTimeout(function(){ img.classList.add('show')}, 1000);
//     }
//     document.getElementById('animBtn').onclick = function(){
//         img.classList.toggle('show');
//         setTimeout(function(){img.src = 'img/anim.jpg'}, 1000);
//         setTimeout(function(){img.classList.toggle('show')}, 1000);
//     }
//     document.getElementById('foodBtn').onclick = function(){
//         img.classList.toggle('show');
//         setTimeout(function(){img.src = 'img/food.jpg'}, 1000);
//         setTimeout(function(){ img.classList.toggle('show')}, 1000);
//     }


    // function showImg(e){
    //     img.classList.remove('show');
    //     img.classList.add('imgHide')
    //     switch (e.target.id){
    //         case 'carBtn': img.src = 'img/car.jpg'; break;
    //         case 'animBtn': img.src = 'img/anim.jpg'; break;
    //         case 'foodBtn': img.src = 'img/food.jpg'; break;
    //     } 
    //     setTimeout(function(){img.classList.add('show')}, 10);
        
    //     // document.getElementById('screen').appendChild(img);       
    // }
