var video;

//implementing a stack to save playback speed so that the speed up button can rever to the most recent one
playBackRates = [];


window.addEventListener("load", function() {
	console.log("Good job opening the window")
	//load the video
	video = this.document.querySelector('#player1');
    video.load();
	video.autoplay = false;
	video.loop = false;
	//video.muted = false;
	
});

document.getElementById('play').addEventListener("click", function() {
	console.log("play video");
	video.play();
	document.getElementById('volume').innerHTML = document.getElementById('slider').value + '%';
});

document.getElementById('pause').addEventListener("click", function() {
	console.log("pause video");
	video.pause();
});

document.getElementById('slower').addEventListener("click", function() {
	//console.log("slow down video");
	//console.log("orignal playback Rate " + video.playbackRate);
	//add original rate
	//playBackRates.push(video.playbackRate);
	video.playbackRate = 0.9 * video.playbackRate;
	console.log("speed is " + video.playbackRate);
});

document.getElementById('faster').addEventListener("click", function() {
	console.log("speed up video");
	//console.log("orignal playback Rate " + video.playbackRate);
	//video.playbackRate = playBackRates[playBackRates.length - 1];
	//playBackRates.pop();
	video.playbackRate = video.playbackRate * 1.1;
	console.log("speed is " + video.playbackRate);
});

document.getElementById('skip').addEventListener("click", function() {
	console.log("skip video");
	video.currentTime = video.currentTime +10;
	if(video.currentTime >= video.duration){
		console.log('reaced end');
		video.currentTime = 0;
		video.play();
	}
	console.log("video current time is " + video.currentTime);
});

document.getElementById('mute').addEventListener("click", function() {
	console.log("mute video");
	console.log(video.muted);
	
    if(video.muted === true){
		video.muted = false;
		document.getElementById('mute').innerHTML = "Mute";
	}
	else{
		video.muted = true;
		document.getElementById('mute').innerHTML = "Unmute";
	}
	
});

document.getElementById('slider').addEventListener("change", function() {
	console.log("volume video");
	
	document.getElementById('volume').innerHTML = document.getElementById('slider').value + '%';
});

let buttonArray = ['vintage','orig']
for(let i = 0; i < buttonArray.length; ++i){
	document.getElementById(buttonArray[i]).addEventListener("click", function() {
		console.log("change classes");
	document.querySelector('video').classList.toggle("oldSchool");
	});
		
}
