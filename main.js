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

//animations

//top row
TweenMax.to('.html', 1, { marginLeft: 0 });
TweenMax.to('.css', 2, { marginLeft: 0 });
TweenMax.to('.sass', 3, { marginLeft: 0 });
TweenMax.to('.javascript', 4, { marginLeft: 0 });

//bottom row
TweenMax.to('.jquery', 1, { marginLeft: 0 });
TweenMax.to('.react', 2, { marginLeft: 0 });
TweenMax.to('.gsap', 3, { marginLeft: 0 });
TweenMax.to('.git', 4, { marginLeft: 0 });

// third row
TweenMax.to('.vue', 1, { marginLeft: 0 });
TweenMax.to('.bootstrap', 2, { marginLeft: 0 });
