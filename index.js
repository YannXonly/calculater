const display = document.querySelector('.displayNow');
const prevDisplay = document.querySelector('.displayPrev');

function isErrorState() {
	return display && (display.textContent === 'EROOR' || display.textContent === 'Error');
}

function appendToDisplay(input) {
	if (isErrorState()) return;

	if (display.textContent === '0') display.textContent = input;
	else display.textContent += input;

	if (display.textContent.length >= 15) {
		display.textContent = 'EROOR';
		if (prevDisplay) prevDisplay.textContent = '0';
	}
}

function ClearDisplay() {
	display.textContent = '0';
	prevDisplay.textContent = '0';
}

function calculate() {
	if (isErrorState()) return;

	let expr = display.textContent.replace(/x/g, '*').replace(/÷/g, '/').replace(/%/g, '/100');
	try {
		const result = eval(expr);
		if (prevDisplay) prevDisplay.textContent = String(result);
		display.textContent = String(result);
	} catch (e) {
		display.textContent = 'EROOR';
		if (prevDisplay) prevDisplay.textContent = '0';
	}
}

function Delete() {
	if (!display) return;
	if (isErrorState()) {
		ClearDisplay();
		return;
	}
	if (display.textContent.length <= 1) {
		display.textContent = '0';
		return;
	}
	display.textContent = display.textContent.slice(0, -1);
}

