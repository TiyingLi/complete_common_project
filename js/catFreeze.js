
document.querySelector("header").addEventListener('click', function() {
   
    if(this.style.animationPlayState == "paused"){
        console.log("release cat")
        this.style.animationPlayState = "running"
    } else{
        console.log("freeze cat")
        this.style.animationPlayState = "paused"
    }
    
});

