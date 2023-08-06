const time = document.querySelectorAll(`.number`);
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
const futureDate = new Date(tempYear, tempMonth, tempDay + 8, 12, 32, 0);
const futureTime = futureDate.getTime();

function getRemainingTime() {
	const today = new Date().getTime();
	const t = futureTime - today;

	const oneDay = 24 * 60 * 60 * 1000;
	const oneHour = 60 * 60 * 1000;
	const oneMin = 60 * 1000;

	let days = Math.floor(t / oneDay);
	let hours = Math.floor((t % oneDay) / oneHour);
	let minutes = Math.floor((t % oneHour) / oneMin);
	let seconds = Math.floor((t % oneMin) / 1000);
	const values = [days, hours, minutes, seconds];

	function format(item) {
		if (item < 10) {
			return (item = `0${item}`);
		}
		return item;
	}

	time.forEach((item, index) => {
		item.innerHTML = format(values[index]);
		//
	});

	if (t < 0) {
		clearInterval(cowntdown);
	}
}
// cowntdown
let cowntdown = setInterval(getRemainingTime, 1000);
getRemainingTime();

const secondAnimation = document.querySelector(`.seconds`);
let flip = true;

function flipAnimation(item) {
	if (flip) {
		item.style.backgroundPosition = "0% 50%";
	} else {
		item.style.backgroundPosition = "0% 0%";
	}
	flip = !flip;
}
setInterval(flipAnimation, 500, secondAnimation);
