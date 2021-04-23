var i=0;
var images=[];
var time=10000;
var base=window.location.pathname;
console.log(base);
console.log(window.location.pathname);
for (j=0; j < 15; j++) {
    uj=j+1;
    url="resources/cats/bear/dogs/bark/"+uj+".png";
    images[j]=url;
    console.log (images[j]);
}
function slideToTheLeft(){
    I=i
    II=i+1
    III=i+2
    if (typeof images[III] != "undefined") {
        document.getElementsByClassName("photo")[2].style.backgroundImage="url("+window.location.origin+""+window.location.pathname+""+images[III]+")";
        document.getElementsByClassName("photo")[2].style.boxShadow="5px 5px 5px black, -5px -5px 5px black, -5px 5px 5px black, 5px -5px 5px black";
    } else {
        document.getElementsByClassName("photo")[2].style.backgroundImage="url("+window.location.origin+""+window.location.pathname+""+images[1]+")";
    }
    if (typeof images[II] != "undefined") {
        document.getElementsByClassName("photo")[1].style.backgroundImage="url("+window.location.origin+""+window.location.pathname+""+images[II]+")";
    } else {
        document.getElementsByClassName("photo")[1].style.backgroundImage="url("+window.location.origin+""+window.location.pathname+""+images[0]+")";
    }
    document.getElementsByClassName("photo")[0].style.backgroundImage="url("+window.location.origin+""+window.location.pathname+""+images[I]+")";
    if (i <images.length-1) {
        i++;
    } else {
        i=0;
    }
    setTimeout("slideToTheLeft()", time);
}
window.onload = slideToTheLeft;