const images=["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg","img7.jpg","img8.jpg","img9.jpg"];
let currentindex=0;

const sliderimg=document.getElementById("sliderimg");
const nextbtn=document.getElementById("nextbtn");
const prevbtn=document.getElementById("prevbtn");

function updateimg(){
    sliderimg.src=images[currentindex];
}

prevbtn.addEventListener("click",()=>{
currentindex=(currentindex-1+images.length)%images.length;
updateimg();
     
});

nextbtn.addEventListener("click",()=>{
currentindex=(currentindex+1)%images.length;
updateimg();
     
});