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
var $time=5;
var $timeFade=$time*.25;
var $timeStay=$time*.75;
var timeAdj=time-1;
var xhr=new XMLHttpRequest();
const card=document.getElementsByClassName("photo");
const cardTxt=document.getElementsByClassName("text");
var R=0;





urls[0]="bear";
urls[1]="dub";










function slideImproved() {
    FFS();
    for (j=0; j<urls.length; j++) {
        urls[j]=window.location.pathname+"resources/cats/"+urls[j]+"/dogs/bark/";
        for (k=0; k<1000; k++) {
            kj=k+1;
            url=""+urls[j]+""+kj+".png";
            txt=""+urls[j]+""+kj+".JSON";
            xhr.open("HEAD",url,false);
            xhr.send();
            if (xhr.status !== 404){
                daScript[k]=txt;
                critters[k]=url;
            } else {
                k=1001;
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
        hug(why,scared);
    }
    sigh(scared);
}
function hug(you, me){
    for(let y=0, len=you.length; y< len; y++){
        me.push(you[y]);
    }
    return me;

}
function sigh(daGoods) {
    if (dezzies.length < scared.length){
        $.getJSON(""+window.location.origin+""+daGoods[R]+"", function(data){
            reUp(data,R);
        });
    } else {
        timer=setInterval(slideToTheLeft(slip, 0),time);
    }
}
var dezzies=[];
function reUp(daGoods, r){
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
    if (i==kennel.length){
        i=0;
    }
    I=i;
    II=i+1;
    III=i+2;
    if (typeof kennel[I] != "undefined") {
        document.getElementsByClassName("photo")[0].style.backgroundImage="url("+window.location.origin+""+kennel[I]+")";
        document.getElementById("pur").innerHTML="&emsp;&emsp;"+dezzies[I][2]+"";
        document.getElementById("his").innerHTML=""+dezzies[I][1]+"";
        if (I==0) {
            card[0].style.transformStyle="preserve-3d;";
            card[0].style.transformOrigin="30% 100%";
            card[0].style.animation="flippero "+time+"ms ease-in-out "+timeAdj+"ms forwards";
        }
        
        
        if (typeof kennel[II] != "undefined") {
            document.getElementsByClassName("photo")[1].style.backgroundImage="url("+window.location.origin+""+kennel[II]+")";
            document.getElementById("meow").innerHTML=""+dezzies[II][0]+"";
            document.getElementById("purr").innerHTML="&emsp;&emsp;"+dezzies[II][2]+"";
            document.getElementById("hiss").innerHTML=""+dezzies[II][1]+"";
            if (I==0) {
                card[II].style.transformStyle="preserve-3d;";
                card[II].style.transformOrigin="30% 100%";
                card[II].style.animation="flippero "+time+"ms ease-in-out "+timeAdj+"ms forwards";
            }
        } else {
            document.getElementsByClassName("photo")[1].style.backgroundImage="url("+window.location.origin+""+kennel[0]+")";
            document.getElementById("meow").innerHTML=""+dezzies[1][0]+"";
        }
        if (typeof kennel[III] != "undefined") {
            document.getElementsByClassName("photo")[2].style.backgroundImage="url("+window.location.origin+""+kennel[III]+")";
            document.getElementById("purrr").innerHTML="&emsp;&emsp;"+dezzies[III][2]+"";
            document.getElementById("hisss").innerHTML=""+dezzies[III][1]+"";
            if (I==0) {
                card[III].style.transformStyle="preserve-3d;";
                card[III].style.transformOrigin="30% 100%";
                card[III].style.animation="flippero "+time+"ms ease-in-out "+timeAdj+"ms forwards";
            }
        } else {
            document.getElementsByClassName("photo")[2].style.backgroundImage="url("+window.location.origin+""+kennel[1]+")";
        }
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
    Promise.resolve(card[xx])
        .then(prepareAnimation)
        .then(playAnimations);
    Promise.resolve(cardTxt[xx])
        .then(prepareAnimation)
        .then(playAnimations);
}





var animations = {
    flippy: (element, done) => {
        TweenMax.set(element, {autoAlpha:0, rotationY: "-90deg", translateY: "0vw"});
        TweenMax
            .to(element, $timeFade, {autoAlpha: 1, rotationY: "0deg", translateY: "0vw", onComplete: done});
    }
}


function animate(element, animation) {
    return new Promise(resolve => animation(element, resolve));
}

async function playAnimations(element) {
    await animate(element, animations.flippy);
}


function prepareAnimation(element) {
    TweenLite.set(element, { clearProps: "scale" });
    return element;
}


window.onload = slideImproved();

function FFS() {
    const itatchi= document.querySelectorAll(".anime");
    // observer= new IntersectionObserver((entries) => {
    //     console.log(entries);
    //     if()
    // })
    // observer.observe(images)
    const niisan= {
        threshold: .5
    }
    const hide= {
        threshold: .1
    }
    const sauske= new IntersectionObserver(function(entries, sauske){
        // console.log(entries);
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                // console.log("Entry OUB:     "+entry);
                // if(entry.target.style.)
                // entry.target.style.animation= "none";
                // entry.target.style.opacity= "0";
                return;
            } else {
                // console.log("Entry INB:     "+entry);
                
                entry.target.style.animation= entry.target.dataset.anime+" 3500ms forwards ease-in-out";
                console.log(entry);
            }
        })
    }, niisan);
    const senpai= new IntersectionObserver(function(entries, sauske){
        // console.log(entries);
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                console.log("Entry OUB:     "+entry);
                // if(entry.target.style.)
                entry.target.style.animation= "none";
                entry.target.style.opacity= "0";
                return;
            } else {
                // console.log("Entry INB:     "+entry);
                
                // entry.target.style.animation= "anime 3500ms forwards ease-in-out";
                // console.log(entry);
            }
        })
    }, hide);
    itatchi.forEach(death=> {
        sauske.observe(death);
        senpai.observe(death);
    });
}