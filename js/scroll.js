// Encapsula tu script en una función
function initializeScrollToTop() {
	window.addEventListener("scroll", function () {
		var scrollToTopBtn = document.getElementById("scrollToTopBtn");
		if (!scrollToTopBtn) return; // Evita errores si el elemento no existe

		var scrollProgress =
			(window.scrollY /
				(document.documentElement.scrollHeight - window.innerHeight)) *
			100;

		if (scrollProgress > 20) {
			scrollToTopBtn.style.display = "block";
			scrollToTopBtn.classList.add("active");
		} else {
			scrollToTopBtn.classList.remove("active");
		}

		var progressBar = scrollToTopBtn.querySelector(".progress-bar");
		if (progressBar) {
			progressBar.style.background = `conic-gradient(#F07110 ${scrollProgress}%, transparent 0)`;
		}
	});

	var scrollToTopBtn = document.getElementById("scrollToTopBtn");
	if (scrollToTopBtn) {
		scrollToTopBtn.addEventListener("click", function () {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		});
	}
}

// Retrasa la ejecución de la función hasta que el primer modal haya cargado
setTimeout(function () {
	initializeScrollToTop();
}, 2000); // Ajusta el tiempo según sea necesario
