//jquery-click-scroll
//by syamsul'isul' Arifin

var sectionArray = [1, 2, 3, 4, 5];

$.each(sectionArray, function (index, value) {
	$(document).scroll(function () {
		var offsetSection = $("#" + "section_" + value).offset().top - 86;
		var docScroll = $(document).scrollTop();
		var docScroll1 = docScroll + 1;

		if (docScroll1 >= offsetSection) {
			$(".navbar-nav .nav-item .nav-link").removeClass("active");
			$(".navbar-nav .nav-item .nav-link:link").addClass("inactive");
			$(".navbar-nav .nav-item .nav-link").eq(index).addClass("active");
			$(".navbar-nav .nav-item .nav-link").eq(index).removeClass("inactive");
		}
	});

	$(".click-scroll")
		.eq(index)
		.click(function (e) {
			var offsetClick = $("#" + "section_" + value).offset().top - 86;
			e.preventDefault();
			$("html, body").animate(
				{
					scrollTop: offsetClick,
				},
				300
			);
		});
});

$(document).ready(function () {
	$(".navbar-nav .nav-item .nav-link:link").addClass("inactive");
	$(".navbar-nav .nav-item .nav-link").eq(0).addClass("active");
	$(".navbar-nav .nav-item .nav-link:link").eq(0).removeClass("inactive");
});

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function () {
	efectoHabilidades();
};

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
	var skills = document.getElementById("skills");
	var distancia_skills =
		window.innerHeight - skills.getBoundingClientRect().top;
	if (distancia_skills >= 300) {
		document.getElementById("html").classList.add("barra-progreso1");
		document.getElementById("js").classList.add("barra-progreso2");
		document.getElementById("bd").classList.add("barra-progreso3");
		document.getElementById("ps").classList.add("barra-progreso4");
	}
}

//funcion que aplica cursor arriba
window.addEventListener("scroll", function () {
	var scrollToTopBtn = document.getElementById("scrollToTopBtn");
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
	progressBar.style.background = `conic-gradient(#F07110
    ${scrollProgress}%, transparent 0)`;
});

document.addEventListener("DOMContentLoaded", function () {
	var scrollToTopBtn = document.getElementById("scrollToTopBtn");
	scrollToTopBtn.addEventListener("click", function () {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});
});
