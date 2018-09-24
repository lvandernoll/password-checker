const INPUT = document.querySelector('#password');

INPUT.addEventListener('keyup', e => {
	if(e.keyCode !== 13) return;

	let correctPassword = true;
	let password = INPUT.value;

	// Check if length is greater than 8 characters
	if(!/[^]{8,}/.test(password))
		correctPassword = false;
	// Check if the password has a minimum of 1 special character
	if(!/[\W]/.test(password)) 
		correctPassword = false;
	// Check if the password has a minimum of 2 numbers
	if(!/(.*[\d]){2,}/.test(password))
		correctPassword = false;
	// Check if the password has a minimum of 1 uppercase letter
	if(!/[A-Z]/.test(password))
		correctPassword = false;
	// Check if the password has a minimum of 1 lowercase letter
	if(!/[a-z]/.test(password)) 
		correctPassword = false;

	if(correctPassword)
		INPUT.style.borderColor = 'limegreen';
	else
		INPUT.style.borderColor = 'red';
});
