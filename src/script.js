function displayAbout(){
    var arrow = document.getElementById('animation');
    arrow.classList.toggle('rotate');
    var display = document.getElementById('about');
    display.classList.toggle('active');
}

var myVideo = document.getElementById("video"); 
    function playPause() { 
        if (myVideo.paused) 
            myVideo.play(); 
        else 
            myVideo.pause(); 
    } 

    function makeBig() {
        myVideo.width = 600;
    } 

    function makeNormal() { 
        myVideo.width = 350;
    } 
