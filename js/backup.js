var slip = [];
var scared=[];
var index=0;
var images=[];
var urls=[];
var critters=[];
var daScript=[];
var cages=[];
var sent=[];
var idk=[];
var timer;
var time=50000;
var timeOut=0;
var base=window.location.pathname;
var xhr=new XMLHttpRequest();
console.log(base);
console.log(window.location.pathname);
const card=document.getElementsByClassName("photo");
console.log(card);
var w=0;
var timeAdj=time-.7;
var filez=[];

urls[0]="bear";
urls[1]="dub";



function hug(you, me){
    for(let y=0, len=you.length; y< len; y++){
        me.push(you[y]);
    }
    console.log(me);
    return me;

}
function sigh(daGoods) {
    console.log("K:  "+k);
    // filez=reUp(daGoods);
    timer=setInterval(slideToTheLeft(slip, daGoods, 0),time);
}
var dezzies=[];
// function reUp(daGoods){
//     console.log("DEZ:  "+dezzies)
//     console.log("DaGoods length:"+daGoods.length);
//     for (r=0;r<daGoods.length; r++){
//         $.getJSON(""+window.location.origin+""+window.location.pathname+""+daGoods[r]+"", function(data) {
//             console.log(data);
//             console.log(data.category);
//             console.log(data.itemName);
//             console.log(data.itemDesc);
//             console.log(data.price);
//             console.log("R:  "+r)
//             dezzies[r]=[
//                 data.category,
//                 data.itemName,
//                 data.itemDesc,
//                 data.price
//             ];
//             console.log("Descriptsionsads:   "+dezzies)
//         });
//     }
    
//     console.log()
//     return dezzies;
//     // // var fs=require("fs");
//     // // var fs;
//     // // var text=fs.readFileSync(daScript, "utf-8");
//     // // var textbyline=text.split("\n");
//     // // console.log(textbyline);
//     // if (window.XMLHttpRequest){
//     //     f = new XMLHttpRequest();
//     // } else {
//     //     f = new XMLHttpRequest("Microsoft.XMLHTTP");
//     // }
//     // f.onreadystatechange = function () {
//     //     if (f.readyState==4) {
//     //         if (f.status==200 || f.status==0) {
//     //             var docSig=f.responseText;
//     //             txtFiles=docSig.split(/\n|\r/g);
//     //         }
//     //     } 
//     // }
    
//     // f.open("GET", ""+daGoods+"", true);
//     // console.log("F:    "+f);
//     // console.log("F:    "+txtFiles);
//     // // f.send().catch(function(error){
//     // //     console.log(error);
//     // // });
    
    
    
// }
function sweet(){
    console.log("k:  "+k);
    if (timeOut<cages[k].length) {
        slideToTheLeft(slip);
    }
}
function slideImproved() {
    for (j=0; j<urls.length; j++) {
        urls[j]="resources/cats/"+urls[j]+"/dogs/bark/";
        for (k=0; k<1000; k++) {
            kj=k+1;
            url=""+urls[j]+""+kj+".png";
            txt=""+urls[j]+""+kj+".JSON";
            console.log(url);
            xhr.open("HEAD",url,false);
            xhr.send();
            if (xhr.status !== 404){

                daScript[k]=txt;
                critters[k]=url;
                console.log(critters[k]);
            } else {
                k=1001;
                console.log("Nice try kid");
                cages[j]=critters;
                critters=[];
            }
        }

    }

    for (k=0; k<urls.length; k++) {
        idk=cages[k];
        why=daScript;
        hug(idk,slip);
        hug(why,scared);
        // hug(daScript,scared);
        console.log(slip[0]);
        console.log("K:   "+k);
    }
    console.log("Scared:  "+scared);
    sigh(daScript);
}







function delayShow(xx){
    console.log("Time:    "+timeAdj);
    console.log("XX:       :"+xx);
    card[xx].style.transition="all 2000ms";
    card[xx].style.transformStyle="preserve-3d;";
    card[xx].style.transformOrigin="30% 100%";
    card[xx].style.animation="flippero 50000ms ease-in-out "+timeAdj+"ms forwards";
    card[xx].style.animationIterationCount= "infinite";
    w++;
    if (xx<card[xx].length){
        setTimeout(delayShow, time*.33,xx);
    }
}


function slideToTheLeft(kennel, daGoods, i){
    console.log("I:   "+i);
    console.log("path:   "+window.location.origin+""+window.location.pathname+""+daGoods[i]+"");
    $.getJSON(""+window.location.origin+""+window.location.pathname+""+daGoods[i]+"", function(data) {
        console.log("index:   "+index)
        console.log(kennel.length);
        if (i==kennel.length){
            i=0;
        }
        console.log("I:   "+i);

        I=i;
        II=i+1;
        III=i+2;
        if (typeof kennel[I] != "undefined") {
            console.log(kennel.length);

            console.log(kennel.length);
            document.getElementsByClassName("photo")[0].style.backgroundImage="url("+window.location.origin+""+window.location.pathname+""+kennel[I]+")";
            document.getElementById("pur").innerHTML="&emsp;&emsp;"+data.itemDesc+"";
            document.getElementById("his").innerHTML=""+data.itemName+"";

            if (typeof kennel[II] != "undefined") {
                document.getElementsByClassName("photo")[1].style.backgroundImage="url("+window.location.origin+""+window.location.pathname+""+kennel[II]+")";
                console.log(window.location.origin+""+window.location.pathname+""+kennel[II]);
                document.getElementById("meow").innerHTML=""+data.category+"";
                document.getElementById("purr").innerHTML="&emsp;&emsp;"+data.itemDesc+"";
                document.getElementById("hiss").innerHTML=""+data.itemName+"";
            } else {
                document.getElementsByClassName("photo")[1].style.backgroundImage="url("+window.location.origin+""+window.location.pathname+""+kennel[0]+")";
                document.getElementById("meow").innerHTML=""+1+"";
                
            }
            if (typeof kennel[III] != "undefined") {
                document.getElementsByClassName("photo")[2].style.backgroundImage="url("+window.location.origin+""+window.location.pathname+""+kennel[III]+")";
                console.log(window.location.origin+""+window.location.pathname+""+kennel[III]);
                document.getElementById("purrr").innerHTML="&emsp;&emsp;"+data.itemDesc+"";
                document.getElementById("hisss").innerHTML=""+data.itemName+"";
            } else {
                document.getElementsByClassName("photo")[2].style.backgroundImage="url("+window.location.origin+""+window.location.pathname+""+kennel[1]+")";
            }


            console.log(window.location.origin+""+window.location.pathname+""+kennel[I]);
            if (i<kennel.length) {
                i=II;
                setTimeout(slideToTheLeft, time, kennel, daGoods, i);
            } else {
                i=0;
                slideToTheLeft(kennel, i);
            }
            for(x=0;x<card.length;x++){

                delayShow(x);
            }


        }
    });






} 
window.onload = slideImproved();