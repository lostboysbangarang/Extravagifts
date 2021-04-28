var slip = [];
var scared=[];
var urls=[];
var critters=[];
var daScript=[];
var cages=[];
var idk=[];
var tryScript=[];
var timer;
var time= 5000;
var xhr=new XMLHttpRequest();
const card=document.getElementsByClassName("photo");
const cardTxt=document.getElementsByClassName("text");
var R=0;





urls[0]="bear";
urls[1]="dub";










function slideImproved() {
    for (j=0; j<urls.length; j++) {
        urls[j]="resources/cats/"+urls[j]+"/dogs/bark/";
        for (k=0; k<1000; k++) {
            kj=k+1;
            url=""+urls[j]+""+kj+".png";
            txt=""+urls[j]+""+kj+".JSON";
            xhr.open("HEAD",url,false);
            xhr.send();
            if (xhr.status !== 404){
                daScript[k]=txt;
                critters[k]=url;
                // console.log(critters[k]);
                // console.log(daScript[k]);
            } else {
                k=1001;
                // console.log("Nice try kid");
                // console.log("Script:     "+daScript);
                cages[j]=critters;
                critters=[];
                tryScript[j]=daScript;
                daScript=[];
            }
        }
    }
    for (k=0; k<urls.length; k++) {
        idk=cages[k];
        why=tryScript[k];
        hug(idk,slip);
        // console.log("why:   "+why);
        hug(why,scared);
        // console.log(slip[0]);
        // console.log("K:   "+k);
    }
    // console.log("Scared:  "+scared);
    sigh(scared);
}
function hug(you, me){
    for(let y=0, len=you.length; y< len; y++){
        me.push(you[y]);
    }
    // console.log(me);
    return me;

}
function sigh(daGoods) {
    // console.log("K:  "+k);
    if (dezzies.length < scared.length){
        $.getJSON(""+window.location.origin+""+window.location.pathname+""+daGoods[R]+"", function(data){
            reUp(data,R);
        });
    } else {
        timer=setInterval(slideToTheLeft(slip, 0),time);
    }
}
var dezzies=[];
function reUp(daGoods, r){
    // console.log("First R:  "+r)
    if (R<scared.length){
        dezzies[r]=[
            daGoods.category,
            daGoods.itemName,
            daGoods.itemDesc,
            daGoods.price
        ];
        R++;
        sigh(scared);
    }
    return dezzies;
}
async function slideToTheLeft(kennel, i){
    // console.log(kennel.length);
    if (i==kennel.length){
        i=0;
    }
    // console.log("I:   "+i);
    I=i;
    II=i+1;
    III=i+2;
    if (typeof kennel[I] != "undefined") {
        // console.log(kennel.length);
        // console.log(kennel.length);
        document.getElementsByClassName("photo")[0].style.backgroundImage="url("+window.location.origin+""+window.location.pathname+""+kennel[I]+")";
        document.getElementById("pur").innerHTML="&emsp;&emsp;"+dezzies[I][2]+"";
        document.getElementById("his").innerHTML=""+dezzies[I][1]+"";
        if (I>=0) {
            var element=document.getElementsByClassName("photo");
            element.item(0).style.animation = "none";
            void element.offsetWidth;
            element.item(0).style.animation = "flippero 10000ms ease-in-out "+time+"ms forwards";
        }
        if (typeof kennel[II] != "undefined") {
            document.getElementsByClassName("photo")[1].style.backgroundImage="url("+window.location.origin+""+window.location.pathname+""+kennel[II]+")";
            // console.log(window.location.origin+""+window.location.pathname+""+kennel[II]);
            document.getElementById("meow").innerHTML=""+dezzies[II][0]+"";
            document.getElementById("purr").innerHTML="&emsp;&emsp;"+dezzies[II][2]+"";
            document.getElementById("hiss").innerHTML=""+dezzies[II][1]+"";
        } else {
            document.getElementsByClassName("photo")[1].style.backgroundImage="url("+window.location.origin+""+window.location.pathname+""+kennel[0]+")";
            document.getElementById("meow").innerHTML=""+dezzies[1][0]+"";
        }
        if (typeof kennel[III] != "undefined") {
            document.getElementsByClassName("photo")[2].style.backgroundImage="url("+window.location.origin+""+window.location.pathname+""+kennel[III]+")";
            // console.log(window.location.origin+""+window.location.pathname+""+kennel[III]);
            document.getElementById("purrr").innerHTML="&emsp;&emsp;"+dezzies[III][2]+"";
            document.getElementById("hisss").innerHTML=""+dezzies[III][1]+"";
        } else {
            document.getElementsByClassName("photo")[2].style.backgroundImage="url("+window.location.origin+""+window.location.pathname+""+kennel[1]+")";
        }
        // console.log(window.location.origin+""+window.location.pathname+""+kennel[I]);
        if (i<kennel.length) {
            i=II;
            setTimeout(slideToTheLeft, time, kennel, i);
        } else {
            i=0;
            slideToTheLeft(kennel, i);
        }
        for(x=0;x<card.length;x++){

            delayShow(x);
        }
    }
}
function delayShow(xx){
    // console.log("Time:    "+time);
    // console.log("XX:       :"+xx);
    card[xx].style.transformStyle="preserve-3d;";
    card[xx].style.transformOrigin="30% 100%";
    card[xx].style.animation="flippero "+time+"ms ease-in-out "+time+"ms forwards";
    card[xx].style.animationIterationCount= "infinite";
    cardTxt[xx].style.transformStyle="preserve-3d;";
    cardTxt[xx].style.transformOrigin="30% 100%";
    cardTxt[xx].style.animation="flippero "+time+"ms ease-in-out "+time+"ms forwards";
    cardTxt[xx].style.animationIterationCount= "infinite";
    // if (xx<card[xx].length){
    //     setTimeout(delayShow, time*.33,xx);
    // }
}



window.onload = slideImproved();