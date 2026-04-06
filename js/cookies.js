let popUp = document.getElementById("cookiePopup");

// Evento para aceptar cookies
document.getElementById("acceptCookie").addEventListener("click", () => {
	let d = new Date();
	// La cookie expira en 2 minutos
	d.setMinutes(2 + d.getMinutes());
	document.cookie =
		"myCookieName=thisIsMyCookie; expires=" + d.toUTCString() + ";";
	// Ocultar el modal de cookies
	popUp.style.display = "none";
});

// Función para verificar si la cookie ya existe
const checkCookie = () => {
	let cookies = document.cookie.split(";").map((cookie) => cookie.trim());
	let cookieExists = cookies.some((cookie) =>
		cookie.startsWith("myCookieName=")
	);

	if (cookieExists) {
		// Ocultar el modal de cookies
		popUp.style.display = "none";
	} else {
		// Mostrar el modal de cookies
		popUp.style.display = "flex";
	}
};

// Mostrar el modal de cookies automáticamente al cargar
window.onload = () => {
	setTimeout(() => {
		checkCookie();
	}, 2000); // Aparece 2 segundos después de cargar la página
}


// Mostrar el modal de cookies automáticamente al cargar
