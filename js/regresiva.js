
document.addEventListener("DOMContentLoaded", function () {
	// ===== FECHA Y HORA =====
	function updateDateTime() {
		const dateTimeElement = document.getElementById("date-time");
		if (!dateTimeElement) return;

		const currentDate = new Date();
		const options = {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
			second: "numeric",
		};

		dateTimeElement.textContent = currentDate.toLocaleString("es-MX", options);
	}

	setInterval(updateDateTime, 1000);

	// ===== CUENTA REGRESIVA =====
	const targetDate = new Date(2026, 11, 31, 23, 59, 59);

	function updateCountdown() {
		const countdownElement = document.getElementById("countdown-timer");
		if (!countdownElement) return;

		const now = new Date();
		const timeRemaining = targetDate - now;

		if (timeRemaining <= 0) {
			countdownElement.textContent = "¡Cuenta regresiva finalizada!";
			return;
		}

		const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
		const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
		const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
		const seconds = Math.floor((timeRemaining / 1000) % 60);

		countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
	}

	setInterval(updateCountdown, 1000);
});