// Creating type effect
let i = 0;
let words = "Hello, my name is Silas Huereca. I'm a Front End Developer living in Oklahoma City, OK.";
let speed = 40;

function typeWriter() {
	if (i < words.length) {
		document.getElementById('introText').innerHTML += words.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}

// Putting 3D effect in motion
let carousel = document.querySelector('.carousel');
let cellCount = 8;
let selectedIndex = 0;

function rotateCarousel() {
	let angle = (selectedIndex / cellCount) * -360;
	carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
}

function setTime() {
	selectedIndex++;
	rotateCarousel();
}

setInterval(setTime, 3000);
