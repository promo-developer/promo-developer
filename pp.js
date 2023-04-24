var p=document.createElement("p");
document.body.appendChild(p);
var t="10% off your order today!";
p.innerHTML=t;
p.style.background="Lime";
p.style.fontSize="xx-large";

document.cookie = "username=promo; expires=Thu, 18 Dec 3013 12:00:00 UTC; path=/;";

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
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

alert(getCookie('promo'));

//password is promo123abc
