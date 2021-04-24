var slip = [];
// var i=0;
var index=0;
var images=[];
var urls=[];
var critters=[];
var cages=[];
var sent=[];
var idk=[];
var timer;
var time=5000;
var timeOut=0;
var base=window.location.pathname;
var xhr=new XMLHttpRequest();
console.log(base);
console.log(window.location.pathname);
const card=document.getElementsByClassName("photo");
console.log(card);
// "use strict";

// $(document.body).addClass("built");
// var bod=document.getElementsByClassName("built");
// bod[0].addEventListener("animationend", function(e){
//     // e.preventDefault;
//     // card[0].classList.remove("photo");
//     // void card[0].offsetWidth;
//     // card[0].classList.add("photo");
//     card[0].style.animation="flippero 10000ms ease-in-out forwards";
// }, false);

urls[0]="bear";
urls[1]="dub"
function hug(you, me){
    for(let y=0, len=you.length; y< len; y++){
        me.push(you[y]);
    }
    console.log(me);
    return me;

}
function sigh() {
    console.log("K:  "+k);
    // slip=cages[k];
    // console.log(slip);
    timer=setInterval(slideToTheLeft(slip, 0),time);
    // slideToTheLeft(slip);
}
function sweet(){
    console.log("k:  "+k);
    if (timeOut<cages[k].length) {
        slideToTheLeft(slip);
    }
}
function slideImproved() {
    for (j=0; j<urls.length; j++) {
        urls[j]="resources/cats/"+urls[j]+"/dogs/bark/";
        for (k=0; k<100; k++) {
            kj=k+1;
            url=""+urls[j]+""+kj+".png";
            console.log(url);
            xhr.open("HEAD",url,false);
            xhr.send();
            if (xhr.status !== 404){


                critters[k]=url;
                console.log(critters[k]);
            } else {
                k=101;
                console.log("Nice try kid");
                cages[j]=critters;
                critters=[];
            }
        }

    }
    // slideToTheLeft(cages);

    for (k=0; k<urls.length; k++) {
        idk=cages[k];
        hug(idk,slip);
        // console.log(cages);
        console.log(slip[0]);
        console.log("K:   "+k);
        // sweet();
        // setTimeout("sigh()", time*cages[k].length);
        // setInterval(sweet, time);
        // slip=cages[k];
        // console.log(slip);
        // slideToTheLeft(slip);
    }
    // sweet();
    sigh();
}




// function slideToTheLeft(index){
//     console.log("index:   "+index)
//     if (l<kennel.length) {
//         l=0;
//     }
//     console.log(kennel.length);
//     console.log("l:   "+l)
//     // for (l=0; l<kennel.length; l++) {

//         I=i;
//         II=i+1;
//         III=i+2;
//         if (typeof kennel[I] != "undefined") {
//             console.log(kennel.length);
//             setTimeout (function() {
//                 console.log(kennel.length);
//                 if (typeof kennel[III] != "undefined") {
//                     document.getElementsByClassName("photo")[2].style.backgroundImage="url("+window.location.origin+""+window.location.pathname+""+kennel[III]+")";
//                     // document.getElementsByClassName("photo")[2].style.boxShadow="2.5px 2.5px 2.5px black inset, -2.5px -2.5px 2.5px black inset, -2.5px 2.5px 2.5px black inset, 2.5px -2.5px 2.5px black inset";
//                 } else {
//                     document.getElementsByClassName("photo")[2].style.backgroundImage="url("+window.location.origin+""+window.location.pathname+""+kennel[1]+")";
//                 }
//                 if (typeof kennel[II] != "undefined") {
//                     document.getElementsByClassName("photo")[1].style.backgroundImage="url("+window.location.origin+""+window.location.pathname+""+kennel[II]+")";
//                 } else {
//                     document.getElementsByClassName("photo")[1].style.backgroundImage="url("+window.location.origin+""+window.location.pathname+""+kennel[0]+")";
//                 }
//                 document.getElementsByClassName("photo")[0].style.backgroundImage="url("+window.location.origin+""+window.location.pathname+""+kennel[I]+")";
//                 if (i<kennel.length) {
//                     i++;
//                     // l++;
//                     // setTimeout("slideToTheLeft()", time);
//                 } else {
//                     i=0;
//                 }
//             },time);

//         }
//     // }
var w=0;
var timeAdj=time-.5;
function delayShow(xx){
    // timeAdj=timeAdj-1;
    console.log("Time:    "+timeAdj);
    console.log("XX:       :"+xx);
    card[xx].style.transition="all 2000ms";
    card[xx].style.transformStyle="preserve-3d;";
    card[xx].style.transformOrigin="30% 100%";
    card[xx].style.animation="flippero 5000ms ease-in-out "+timeAdj+"ms forwards";
    card[xx].style.animationIterationCount= "infinite";
    w++;
    if (xx<card[xx].length){
        setTimeout(delayShow, time*.33,xx);
    }
}


// }
async function slideToTheLeft(kennel, i){

        console.log("index:   "+index)
        // if (l<kennel.length) {
        //     l=0;
        // }
        console.log(kennel.length);
        if (i==kennel.length){
            i=0;
        }
        console.log("I:   "+i);
        // console.log("l:   "+l)
        // for (l=0; l<kennel.length; l++) {

        I=i;
        II=i+1;
        III=i+2;
        if (typeof kennel[I] != "undefined") {
            console.log(kennel.length);

            console.log(kennel.length);
            document.getElementsByClassName("photo")[0].style.backgroundImage="url("+window.location.origin+""+window.location.pathname+""+kennel[I]+")";


            // void card[0].offsetWidth;
            // card[0].style.transform="scale(2)";
            if (typeof kennel[II] != "undefined") {
                document.getElementsByClassName("photo")[1].style.backgroundImage="url("+window.location.origin+""+window.location.pathname+""+kennel[II]+")";
                console.log(window.location.origin+""+window.location.pathname+""+kennel[II]);
            } else {
                document.getElementsByClassName("photo")[1].style.backgroundImage="url("+window.location.origin+""+window.location.pathname+""+kennel[0]+")";
            }
            if (typeof kennel[III] != "undefined") {
                document.getElementsByClassName("photo")[2].style.backgroundImage="url("+window.location.origin+""+window.location.pathname+""+kennel[III]+")";
                console.log(window.location.origin+""+window.location.pathname+""+kennel[III]);
                // document.getElementsByClassName("photo")[2].style.boxShadow="2.5px 2.5px 2.5px black inset, -2.5px -2.5px 2.5px black inset, -2.5px 2.5px 2.5px black inset, 2.5px -2.5px 2.5px black inset";
            } else {
                document.getElementsByClassName("photo")[2].style.backgroundImage="url("+window.location.origin+""+window.location.pathname+""+kennel[1]+")";
            }


            console.log(window.location.origin+""+window.location.pathname+""+kennel[I]);
            if (i<kennel.length) {
                i=II;
                // l++;
                // timer=setInterval(slideToTheLeft(kennel),time);
                setTimeout(slideToTheLeft, time, kennel, i);
                // setTimeout(function() {
                //     slideToTheLeft(kennel, i);
                // }, time);
                // card[0].classList.remove("photo");
                // card[0].classList.add("photo");
            } else {
                i=0;
                slideToTheLeft(kennel, i);
            }
            for(x=0;x<card.length;x++){

                delayShow(x);
            }


        }


    // }




}
window.onload = slideImproved();