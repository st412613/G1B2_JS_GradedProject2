

const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
	e.preventDefault();

	const username = form.username.value;
	const password = form.password.value;

	if (username === 'myusername' && password === 'mypassword') {
		window.location.href = 'resume.html';


	} else {
		alert('Invalid username or password');
	}
});
