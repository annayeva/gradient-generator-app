const picker1 = document.getElementById("picker-1");
const picker2 = document.getElementById("picker-2");
const gradient = document.getElementById("gradient");
const splitSlider = document.getElementById("split");
const surpriseBtn =document.getElementById("btn-surprise");

splitSlider.addEventListener('input', () => {
    updateGradient();
})

picker1.addEventListener('input', () => {
    updateGradient();
})

picker2.addEventListener('input', () => {
    updateGradient();
})

surpriseBtn.addEventListener('click', () => {
	randomiseColors();
})


function updateGradient () {
    const color1 = picker1.value;
    const color2 =  picker2.value;
    const color1Percent = splitSlider.value;
    const color2Percent = 100 - color1Percent;
    gradient.style.backgroundImage = `linear-gradient(90deg, ${color1} ${color1Percent}%, ${color2} ${color2Percent}%)`;
    checkTextContrast();
}

function randomiseColors () {
	picker1.value = generateRandomHex();
	picker2.value = generateRandomHex();
	updateGradient();
}

function generateRandomHex () {
	const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
	console.log(randomColor);
	return randomColor;
}

function checkTextContrast () {
	var rgb1 = convertHexToRgb(picker1.value.replace("#", ""));
	var rgb2 = convertHexToRgb(picker2.value.replace("#", ""));
	var color1Brightness = checkBrightness(rgb1);
	//var color2Brightness = checkBrightness(rgb2);
	
	if (color1Brightness > 125) {
		gradient.style.color = "black";
	}
	else {
		gradient.style.color = "white";
	}
}

function checkBrightness (rgb) {
	var colorBrightness = Math.round(((parseInt(rgb.r) * 299) + (parseInt(rgb.g) * 587) + (parseInt(rgb.b) * 114)) /1000);
	return colorBrightness;
}

function convertHexToRgb (hex) {
    const hexR = hex.substring(0,2);
    const hexG = hex.substring(2,4);
    const hexB = hex.substring(4,6);
    const r = parseInt(hexR, 16);
    const g = parseInt(hexG, 16);
    const b = parseInt(hexB, 16);
    return {r,g,b}
}





