$(document). ready( function() {
	function displayTime() {
		var currentTime = new Date();

		var hours = currentTime.getHours(); // Method looks at the info and gets the hours
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();

		// AM and PM meridiem & 12-hour Format

		var meridiem = 'AM';

		if (hours > 12) {
			hours = hours - 12;
			meridiem = 'PM';
		}

		// Avoid 0AM & 0PM
		if (hours === 0) {
			hours = 12;
		}

		if (seconds < 10) {
			seconds = '0' + seconds;
		}	

		if (minutes < 10) {
			minutes = '0' + minutes;
		}

		if (hours < 10) {
			hours = '0' + hours;
		}

		var clockDiv = document.getElementById('clock'); // Handle to the clock div

		clockDiv.innerText = hours + ':' + minutes + ':' + seconds + ' ' + meridiem;
	
		// Add day and date
		var days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Nov', 'Dec'];

		var day = days [currentTime.getDay()];
		var month = months[currentTime.getMonth()];
		var date = currentTime.getDate();
		var year = currentTime.getFullYear();

		var dayDiv = document.getElementById('day');
		dayDiv.innerText = day;

		var dateDiv = document.getElementById('date');
		dateDiv.innerText = month + ' ' + date + ', ' + year;

	}
	setInterval(displayTime, 1000);
	displayTime();
});