var video;

video = document.querySelector("#player1")


window.addEventListener("load", function() {
	console.log("Good job opening the window")


});

document.querySelector("#play").addEventListener("click", function() { 	console.log("Play Video");
video.play(); 
console.log});

document.querySelector("#pause").addEventListener("click", function() { 	console.log("Pause Video");
video.pause(); });

document.querySelector("#slower").addEventListener("click", function() { 	
video.playbackRate = video.playbackRate * 0.95;
console.log( 'New video speed is ${video.playbackRate}');
});

document.querySelector("#faster").addEventListener("click", function(){
	
	video.playbackRate = video.playbackRate / 0.95 ;
	console.log( 'New video speed is ${video.playbackRate}');
});

document.querySelector("#skip").addEventListener("click", function(){
		console.log('Start position is ${video.currentTime}');
		video.currentTime += 15;
		if (video.currentTime >= video.duration){
		console.log('Back to beggining')
		video.currentTime = 0;	
		}
		console.log('New position: ${video.currentTime}');

		
	

});
//document.querySelector("#mute").addEventListener("click", function(){
	//console.log("Video duration is" + video.duration)
	//alert(video.duration)

//}); I used this to find the duration of the video for skip ahead 🥴
//var mutebtn;
//mutebtn = document.querySelector("#mute")

document.querySelector("#mute").addEventListener("click", function(){
		if (video.muted == true){
			video.muted = false;
			
			
		}
		else {
			video.muted = true;
			
			
		}

});




let volume =document.querySelector("#slider");
	volume.addEventListener("change", function(e) {
  	 video.volume = e.currentTarget.value / 100;
		console.log(slider.value)
	
  
})

var slider = document.getElementById("slider");
var output = document.getElementById("volume");
output.innerHTML = slider.value;

slider.oninput = function() {
	output.innerHTML = this.value;
  }