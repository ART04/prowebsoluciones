document.addEventListener("DOMContentLoaded", () => {
	const promoButton = document.getElementById("promoButton");
	const iframeSrc = "mimodal.html"; // Ruta del iframe

	// Función para abrir el modal
	promoButton.addEventListener("click", () => {
		// Crear elementos del modal
		const modalOverlay = document.createElement("div");
		modalOverlay.className = "modal-overlay";

		const modalContent = document.createElement("div");
		modalContent.className = "modal-content";

		const iframe = document.createElement("iframe");
		iframe.src = iframeSrc;

		const closeButton = document.createElement("button");
		closeButton.className = "close-btn";
		closeButton.textContent = "×"; // Cambié "Cerrar" por una X

		// Crear botón verde para cerrar
		const greenCloseButton = document.createElement("button");
		greenCloseButton.className = "green-close-btn";
		greenCloseButton.textContent = "Cerrar";

		// Cerrar el modal al hacer clic en el botón rojo de cierre
		closeButton.addEventListener("click", () => {
			document.body.removeChild(modalOverlay);
		});

		// Cerrar el modal al hacer clic en el botón verde
		greenCloseButton.addEventListener("click", () => {
			document.body.removeChild(modalOverlay);
		});

		// Ensamblar modal
		modalContent.appendChild(closeButton);
		modalContent.appendChild(greenCloseButton);
		modalContent.appendChild(iframe);
		modalOverlay.appendChild(modalContent);
		document.body.appendChild(modalOverlay);
	});
});
