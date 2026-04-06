//script del acordeon 
var accordionItems = document.getElementsByClassName('accordion-title');

for (var i = 0; i < accordionItems.length; i++) {
  accordionItems[i].addEventListener('click', function() {
    this.classList.toggle('active');
    var content = this.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
}

    let li = document.querySelectorAll(".faq-text li");
    for (var i = 0; i < li.length; i++) {
      li[i].addEventListener("click", (e)=>{
        let clickedLi;
        if(e.target.classList.contains("question-arrow")){
          clickedLi = e.target.parentElement;
        }else{
          clickedLi = e.target.parentElement.parentElement;
        }
       clickedLi.classList.toggle("showAnswer");
      });
    }


    //script time date header nav

    var dateInfo = moment().format("MMMM Do, YYYY");
  var timeInfo = moment().format("h:mm A");

  document.getElementById("date-info").textContent = dateInfo;
  document.getElementById("time-info").textContent = timeInfo;

   function updateDateTime() {
    const dateTimeElement = document.getElementById("date-time");
    const currentDate = new Date();
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" };
    const dateTimeString = currentDate.toLocaleString("es-MX", options);
    dateTimeElement.textContent = dateTimeString;
  }
  
  setInterval(updateDateTime, 1000); // Actualiza la fecha y hora cada segundo


  // Bottom Dark Scroll

  const switchButton = document.getElementById('switch');
switchButton.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    switchButton.classList.toggle('active')
})


  
//_________________________________________________________________________
  // Contedor de cuenta regresiva relog y secunderos
  // Calcula y muestra el reloj de cuenta regresiva mensual
      

        // Calcula y muestra el reloj de cuenta regresiva cada 72 horas
        setInterval(updateCountdown, 1000);

        function updateCountdown() {
            // Obtiene la fecha y hora actual
            var now = new Date();

            // Obtiene la cantidad de segundos transcurridos desde el último reinicio (cada 72 horas)
            var secondsElapsed = Math.floor(now / 1000) % (72 * 60 * 60);

            // Calcula los segundos restantes hasta el próximo reinicio (72 horas)
            var secondsRemaining = (72 * 60 * 60) - secondsElapsed;

            // Calcula las horas, minutos y segundos restantes
            var hours = Math.floor(secondsRemaining / (60 * 60));
            var minutes = Math.floor((secondsRemaining % (60 * 60)) / 60);
            var seconds = secondsRemaining % 60;

            // Formatea los valores de tiempo con ceros a la izquierda si son menores a 10
            var formattedHours = hours < 10 ? "0" + hours : hours;
            var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
            var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

            // Muestra el tiempo restante en el elemento con id "countdown"
            document.getElementById("countdown").innerHTML = formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
        }

         // redireccion ala seccion contacto

        document.addEventListener("DOMContentLoaded", function () {
					// Seleccionar el botón por su id
					const contactButton = document.querySelector("#contact_button");

					contactButton.addEventListener("click", function () {
						const contactSection = document.querySelector("#contact_section");
						if (contactSection) {
							contactSection.scrollIntoView({ behavior: "smooth" });
						}
					});
				});
