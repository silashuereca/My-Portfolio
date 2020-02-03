// Creating type effect
// let i = 0;
// let words = "Hello, my name is Silas Huereca. I'm a Front End Developer living in Oklahoma City, OK.";
// let speed = 40;

// function typeWriter() {
// 	if (i < words.length) {
// 		document.getElementById('introText').innerHTML += words.charAt(i);
// 		i++;
// 		setTimeout(typeWriter, speed);
// 	}
// }

//animations

let time = 2;

//top row
TweenMax.to('.html', time, { marginTop: 0 });
TweenMax.to('.css', time, { marginTop: 0 });
TweenMax.to('.sass', time, { marginLeft: 0 });
TweenMax.to('.javascript', time, { marginTop: 0 });

//bottom row
TweenMax.to('.jquery', time, { marginLeft: 0 });
TweenMax.to('.react', time, { width: '100%' });
TweenMax.to('.gsap', time, { marginTop: 0 });
TweenMax.to('.git', time, { width: '100%' });

// third row
TweenMax.to('.vue', time, { height: '100%' });
TweenMax.to('.bootstrap', time, { marginLeft: 0 });
