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
