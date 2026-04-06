document
	.getElementById("subscribeButton")
	.addEventListener("click", function () {
		const email = document.getElementById("emailInput").value;

		// Validar el email
		if (!email || !/\S+@\S+\.\S+/.test(email)) {
			alert("Por favor, ingresa un correo electrónico válido.");
			return;
		}

		// Enviar el correo usando una solicitud Fetch a un script PHP
		fetch("sendEmail.php", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email: email }),
		})
			.then((response) => response.json())
			.then((data) => alert(data.message))
			.catch((error) => alert("Hubo un error al enviar tu correo: " + error));
	});
