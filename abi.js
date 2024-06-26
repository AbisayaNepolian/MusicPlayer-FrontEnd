var pbtn=document.querySelector("#play")
var song=document.querySelector("#song")
var state ="play"
var photo=document.querySelector("#photo")
var slider=document.querySelector(".slider")
var x=1;
var frwd=document.querySelector("#forward")
var bcwd=document.querySelector("#backward")
var curt=document.querySelector("#cur")
var maxt=document.querySelector("#max")
slider.max=song.duration;
function start(){
    var b=Number(slider.max)/60
    var minutes= Math.floor(song.duration / 60);  
    var seconds = Math.floor(song.duration % 60);
    maxt.textContent=minutes + ":" + seconds;  
}
start();


slider.value=song.currentTime;


pbtn.addEventListener("click",function(){
    if(state=="play"){
        pbtn.innerHTML='<i class="fa fa-pause" >'
        song.play()
        state="pause"
        player()
        
    }
    else{
        pbtn.innerHTML='<i class="fa fa-play" >'
        state="play"
        song.pause()
        player()
        
        
    }
})
slider.addEventListener("change",function(){
    console.log("abhi");
    song.currentTime=slider.value
})
slider.onchange=function(){
    song.currentTime=slider.value
}
function player(){
    if(state=="pause"){
        setInterval(function(){
            timer()
        },900)
        var abhi=setInterval(function(){
            photo.style.transform="rotate("+x+"deg)"
            color()
            console.log(x)
            x+=10
            if(state=="play"){
                clearInterval(abhi)
            }
        },100)  
    }
}
function timer(){
    slider.value=song.currentTime
            var minutes= Math.floor(song.currentTime / 60);  
            var seconds = Math.floor(song.currentTime % 60);
            if(seconds<10){
                curt.textContent=minutes + ":0" + seconds;  

            }
            else{
                curt.textContent=minutes + ":" + seconds;  
            }
}
frwd.addEventListener("click",function(){
    song.currentTime=song.currentTime+10
    slider.value=song.currentTime
    timer()
})
bcwd.addEventListener("click",function(){
    song.currentTime=song.currentTime-10
    slider.value=song.currentTime
    timer()
})
var spot=document.querySelector("#spotify h1")
function color(){
    var r=Math.floor(Math.random()*1000)
    var g=Math.floor(Math.random()*1000)
    var b=Math.floor(Math.random()*1000)
    console.log(r,g,b)

    spot.style="mix-blend-mode: normal; transition: none"
    spot.style.color="rgb("+r+","+g+","+b+")"
}


