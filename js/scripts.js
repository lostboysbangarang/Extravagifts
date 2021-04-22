var i=0;
var images=[];
var time=10000;
// const fs=require('fs');
// const dir ="../resources/cats/bear/dogs/bark/";
// files= new Array();
// srcFold=Folder("/resources/cats/bear/dogs/bark/");
// files=srcFold.getFiles();


for (j=0; j < 15; j++) {
    uj=j+1;
    // ujj=j+2;
    // ujjj=j+3;
    url="/resources/cats/bear/dogs/bark/"+uj+".png";
    // url2="/resources/cats/bear/dogs/bark/"+ujj+".png";
    // url3="/resources/cats/bear/dogs/bark/"+ujjj+".png";
    // url="url("+"'"+uurl+"'"+")"
    // url2="url("+"'"+uurl2+"'"+")"
    // url3="url("+"'"+uurl3+"'"+")"
    images[j]=url;
    // images[j+1]=url2;
    // images[j+2]=url3;
    // $.get(url)
    //     .done(function () {
    //         images[j]=url;
    //         images[j+1]=url2;
    //         images[j+2]=url3;
    //         console.log (url);
    //         console.log (url2);
    //         console.log (url3);
    //     }).fail(function() {
    //         // break;
    //     });
        // console.log (url)
        // console.log (url2)
        // console.log (url3)
        console.log (images[j])
        // console.log (images[j+1])
        // console.log (images[j+2])
}
// fs.readdir(dir, (err, files) => {
//     console.log(files.length)
// });
// function slideToTheLeft(){
//     document.container_poloroid_1.photo.style.setProperty
//     document.getElementsByClassName("container_poloroid_1").getElementsByClassName("photo").style.background-image=images[0];
// };
function slideToTheLeft(){
    I=i
    II=i+1
    III=i+2
    if (typeof images[III] != "undefined") {
        document.getElementsByClassName("photo")[2].style.backgroundImage="url('"+images[III]+"')";
    } else {
        document.getElementsByClassName("photo")[2].style.backgroundImage="url('"+images[1]+"')";
    }
    if (typeof images[II] != "undefined") {
        document.getElementsByClassName("photo")[1].style.backgroundImage="url('"+images[II]+"')";
    } else {
        document.getElementsByClassName("photo")[1].style.backgroundImage="url('"+images[0]+"')";
    }
    document.getElementsByClassName("photo")[0].style.backgroundImage="url('"+images[I]+"')";

    if (i <images.length-1) {
        i++;
    } else {
        i=0;
    }
    setTimeout("slideToTheLeft()", time);
}
window.onload = slideToTheLeft;
// document.getElementsByClassName("photo")[0].style.backgroundImage="url('"+images[0]+"')";
// document.getElementsByClassName("photo")[1].style.backgroundImage="url('"+images[1]+"')";
// document.getElementsByClassName("photo")[2].style.backgroundImage="url('"+images[2]+"')";