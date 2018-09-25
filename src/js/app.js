const INPUT = document.querySelector('#password');
const HINTBLOCK = document.querySelector('#hintBlock');
const HINTS = [];
HINTS.lengthHint = document.querySelector('#lengthHint');
HINTS.specialHint = document.querySelector('#specialHint');
HINTS.numberHint = document.querySelector('#numberHint');
HINTS.uppercaseHint = document.querySelector('#uppercaseHint');
HINTS.lowercaseHint = document.querySelector('#lowercaseHint');

INPUT.addEventListener('keyup', e => {
	INPUT.removeAttribute('class');
	INPUT.classList.add('password__input');
	HINTBLOCK.classList.add('hidden');
	
	if(e.keyCode !== 13) return;

	for(const HINT in HINTS) {
		HINTS[HINT].classList.remove('password-hint__text--incorrect');
	}

	let correctPassword = true;
	let password = INPUT.value;

	// Check if length is greater than 8 characters
	if(!/[^]{8,}/.test(password)) {
		correctPassword = false;
		HINTS.lengthHint.classList.add('password-hint__text--incorrect');
	}
	// Check if the password has a minimum of 1 special character
	if(!/[\W]/.test(password)) {
		correctPassword = false;
		HINTS.specialHint.classList.add('password-hint__text--incorrect');
	}
	// Check if the password has a minimum of 2 numbers
	if(!/(.*[\d]){2,}/.test(password)) {
		correctPassword = false;
		HINTS.numberHint.classList.add('password-hint__text--incorrect');
	}
	// Check if the password has a minimum of 1 uppercase letter
	if(!/[A-Z]/.test(password)) {
		correctPassword = false;
		HINTS.uppercaseHint.classList.add('password-hint__text--incorrect');
	}
	// Check if the password has a minimum of 1 lowercase letter
	if(!/[a-z]/.test(password)) {
		correctPassword = false;
		HINTS.lowercaseHint.classList.add('password-hint__text--incorrect');
	}

	if(correctPassword) {
		INPUT.classList.add('password__input--correct');
		HINTBLOCK.classList.add('hidden');
	} else {
		INPUT.classList.add('password__input--incorrect');
		HINTBLOCK.classList.remove('hidden');
	}
});
