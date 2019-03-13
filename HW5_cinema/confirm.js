var outFields = document.querySelectorAll('#dataConf > p:nth-child(n)>span');
var allOrders = [];
var search = document.getElementById('search');
var orderSearch = document.getElementById('search').value;
var orderList = document.getElementById('orderList');
document.getElementById('btnDel').setAttribute('disabled', 'disabled');;
document.getElementById('btnSearch').setAttribute('disabled', 'disabled');

window.addEventListener("load", orderData, false);

var outData = window.sessionStorage.getItem(sessionStorage.key(0));
var order = JSON.parse(outData);

function clearData(){
    for (var i=0; i<outFields.length; i++){
        outFields[i].innerHTML = ' ';
    }
}

function orderData(){
    var i=0;
    for (orderKey in order){
        outFields[i].innerHTML = order[orderKey];
        i++;
    }
}

document.getElementById('back').onclick = function(){ 
    history.back();
}

document.getElementById('sub').onclick = function toLocalStor(){
    localStorage.setItem(sessionStorage.key(0), JSON.stringify(order));
    alert('Thank you! \r\n Your tickets have been send to email.');
    // location.href='index.html';
   }

   function allOrd(){
    for (var i = 0; i < localStorage.length; i++) {
        allOrders[i] = localStorage.key(i);
     } 
     return allOrders;
   }
document.getElementById('btnSearch').onclick = function(){ 
    var orderSearch = document.getElementById('search').value;
    var outData = window.localStorage.getItem(orderSearch);
    var order = JSON.parse(outData);
    allOrd(); 
    var i=0;
    if (allOrders.indexOf(orderSearch)!= -1){ 
        clearData();
        for (orderKey in order){
            outFields[i].innerHTML = order[orderKey];
         i++;
        }
    }else
        alert('Order with this phone number is not registered.');
}

document.getElementById('btnDel').onclick = function(){
    var orderSearch = document.getElementById('search').value;
    localStorage.removeItem(orderSearch);
} 

search.onchange = function(){
    var allowedText =/\+38\(\d{3}\)\d{3}-\d{2}-\d{2}/;        
       if (allowedText.test(search.value)){
         search.style.border = '2px solid green';
         errorFl = false;
         document.getElementById('btnSearch').removeAttribute('disabled');
         document.getElementById('btnDel').removeAttribute('disabled');
       }else {
         search.style.border = '2px solid red';
         errorFl = true;
       }  
}

document.getElementById('btnAllOrders').onclick = function(){
    orderList.innerHTML='';
    var orderArr = [];
    for (var i = 0; i < localStorage.length; i++) {
        var currentKey=localStorage.getItem(localStorage.key(i));
        var currentOrder = JSON.parse(currentKey);
        orderArr[i]=currentOrder.name;
           
     } orderArr.sort();
     for (var i = 0; i < orderArr.length; i++) {
     orderList.innerHTML += orderArr[i] + '\r\n';
}
}

