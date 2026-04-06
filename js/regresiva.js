function updateDateTime() {
    const dateTimeElement = document.getElementById("date-time");
    const currentDate = new Date();
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" };
    const dateTimeString = currentDate.toLocaleString("es-MX", options);
    dateTimeElement.textContent = dateTimeString;
  }
  
  setInterval(updateDateTime, 1000); // Actualiza la fecha y hora cada segundo
  

  





  // Establece la fecha objetivo para la cuenta regresiva
const targetDate = new Date("2027-12-31T23:59:59");

function updateCountdown() {
  const now = new Date();
  const timeRemaining = targetDate - now;

  // Calcula los días, horas, minutos y segundos restantes
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Muestra la cuenta regresiva en el elemento con el id "countdown-timer"
  const countdownElement = document.getElementById("countdown-timer");
  countdownElement.textContent = `${hours} horas, ${minutes} minutos, ${seconds} segundos`;

  // Si se alcanza la fecha objetivo, muestra un mensaje
  if (timeRemaining <= 0) {
    countdownElement.textContent = "¡Cuenta regresiva finalizada!";
  }
}

// Actualiza la cuenta regresiva cada segundo
setInterval(updateCountdown, 1000);