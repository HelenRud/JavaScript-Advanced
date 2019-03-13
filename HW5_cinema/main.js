window.addEventListener("load", init, false);
var order = document.getElementById('orderName');
var address = document.getElementById('address');
var phone = document.getElementById('phone');
var dateOrder = document.getElementById('date');
var timeOrder = document.getElementById('time');
var sum = 0;
var ticketNum = 0;
var snacksArr = [];
var disc = document.querySelector('#centerForm > h3');
var discFl = false;
var errorFl = false;
var bill = document.getElementById('bill');
document.getElementById('submitBtn').setAttribute('disabled', 'disabled');

function init(){
    order.addEventListener("keypress", nameFilter, false);
    function nameFilter(order){
        var allowedText = order.target.dataset.charsAllowed;
        var symbol = String.fromCharCode(order.charCode).toLowerCase();
        if (allowedText.search(symbol) == -1){
            document.getElementById('orderName').style.border = '2px solid red';
            errorFl = true;
            order.preventDefault();
            return false;
        }else {
            document.getElementById('orderName').style.border = '2px solid green';
            errorFl = false;
        }    
    }
    
    address.addEventListener("keypress", addressFilter, false);
    function addressFilter(address){
        var allowedText = address.target.dataset.charsAllowed;
        var symbol = String.fromCharCode(address.charCode).toLowerCase();
        if (allowedText.search(symbol) == -1){
            document.getElementById('address').style.border = '2px solid red';
            errorFl = true;
            address.preventDefault();
            return false;
        }else {
            document.getElementById('address').style.border = '2px solid green';
            errorFl = false;
        }    
    }
}

order.onchange = function(){
    checkFill();
}
address.onchange = function(){
    checkFill();
}
dateOrder.onchange = function(){
    checkFill();
}
timeOrder.onchange = function(){
    checkFill();
}

phone.onchange = function(){
     var allowedText =/\+38\(\d{3}\)\d{3}-\d{2}-\d{2}/;        
        if (allowedText.test(phone.value)){
            document.getElementById('phone').style.border = '2px solid green';
            errorFl = false;
        }else {
            document.getElementById('phone').style.border = '2px solid red';
            errorFl = true;
        }  
    checkFill();  
}

var places = document.querySelectorAll('#places> div> div:nth-child(n)');
for (var i = 0; i < places.length; i++){
    var e = places[i];
    e.addEventListener("click", selectPlace, false);
    checkFill(); 
}
function selectPlace(e){
    if (getStyle(e.target, "backgroundColor") == 'rgb(0, 128, 0)'){
        ++ticketNum; 
        sum += 50; 
        e.target.style.backgroundColor = 'red';
    }
    else if (getStyle(e.target, "backgroundColor") == 'rgb(255, 0, 0)'){
        sum -= 50; 
        --ticketNum;
        e.target.style.backgroundColor = 'green';
    }
    if (ticketNum == 6 && !discFl){
        sum -= 50;
    }
    if (ticketNum == 5 && discFl){
        sum += 50;
        discFl=false;
    }
    if (ticketNum >= 6) {
        disc.style.visibility = "visible"; 
        discFl=true;
    }else if (ticketNum < 6) {
        disc.style.visibility = "hidden"; 
    }
    bill.innerHTML = sum;
    checkFill();
}
function getStyle(element, styleName) {
    if (element.currentStyle) { // получение доступа к Computed стилям для IE
        return element.currentStyle[styleName];
    }
    else if (window.getComputedStyle) { 
        return window.getComputedStyle(element, null)[styleName];
    }
}
function checkFill(){
    if (order.value == '' || address.value == '' || phone.value == '' || dateOrder.value == '' || timeOrder.value == '' || sum == 0 || errorFl==true || ticketNum == 0){
     document.getElementById('submitBtn').setAttribute('disabled', 'disabled');
    }
    else{ document.getElementById('submitBtn').removeAttribute('disabled');
}
}

var snacks = document.querySelectorAll('#snacks> div> input:nth-child(n)');
for (var i = 0; i < snacks.length; i++){
    var e = snacks[i];
    e.addEventListener("click", snacksAdd, false);
}

function snacksAdd(e){
        if(e.target.checked){
            sum += Number(e.target.value);
            snacksArr.push(e.target.dataset.snackName);
        }
        else sum -= Number(e.target.value);
    bill.innerHTML = sum;
} 

    document.getElementById('submitBtn').addEventListener('click', orderPreview, false);
    sessionStorage.clear(); 
    function orderPreview(){
           if (localStorage.getItem(phone.value)){
            alert('Order with this phone number is already registered');
            
        }else{
            var newOrder ={
                name: order.value,
                address: address.value,
                phone: phone.value,
                dateOrder: dateOrder.value,
                timeOrder: timeOrder.value,
                ticketNum: ticketNum, 
                snacks:  snacksArr,
                sum: sum,
            }
            sessionStorage.setItem(phone.value, JSON.stringify(newOrder));
            // localStorage.setItem(phone.value, JSON.stringify(newOrder));
            location.href = "confirm.html";
                    
        }

     }  
    
   
    
    
     



       
   

   
  



