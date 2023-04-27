//you can manually put in percent discounts to entice more customers.
/////////////////////////////////////////
//should have a weird function name like: cookie0r87430534u
function deal(){
var p=document.createElement("p");
document.body.appendChild(p);
var t="10% off your next purchase!"
p.innerHTML=t;
p.style.background="Lime";
p.style.fontSize="xx-large";
}
///////////////////////
function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
//////////////////////////////////////
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
///////////////////////////
function getCookieCheck(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return true;
    }
  }
  return "";
}
////////////////////////////

function deleteCookie1(){
document.cookie = "name=10%offLesliesPricingIn1; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

///////////////////

function ALL15678fghf6rsthrt6(){
var d=new Date();
var t=d.getHours();


if(getCookieCheck("name")==true){}
else{
createCookie(t,t,"0.1");
 }
}

createCookie("name","name","0.1");

for(i=0;i<=24;i++){

if(isNaN(parseInt(getCookie(i)))){
 }
else{
if(t>2+i){
deal();
   }

 }
}

}

////////////////////////////

ALL15678fghf6rsthrt6();
