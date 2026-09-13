const display = document.querySelector('.displayNow');
const prevDisplay = document.querySelector('.displayPrev');

function appendToDisplay(input) {
	if (display.textContent === '0') display.textContent = input;
	else display.textContent += input;
}

function ClearDisplay() {
	display.textContent = '0';
    prevDisplay.textContent= '0';
}

function calculate() {
	let expr = display.textContent.replace(/x/g, '*').replace(/÷/g, '/').replace(/%/g, '/100');
	try {
		const result = eval(expr);
		if (prevDisplay) prevDisplay.textContent = String(result);
		display.textContent = String(result);
	} catch (e) {
		display.textContent = 'Error';
	}
}
function Delete() {
	if (!display) return;
	if (display.textContent === 'Error') {
		display.textContent = '0';
		return;
	}
	if (display.textContent.length <= 1) {
		display.textContent = '0';
		return;
	}
	display.textContent = display.textContent.slice(0, -1);
}

