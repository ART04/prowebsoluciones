
document.addEventListener("DOMContentLoaded", function () {
	/*===== MOBILE MENU =====*/
	const triggerMenu = document.querySelector("#trigger-menu");
	const mobileMenuCon = document.querySelector("#menu-mobile-container");
	const closeMobileMenu = document.querySelector(
		"#menu-mobile-container .dark-part",
	);

	if (triggerMenu && mobileMenuCon) {
		triggerMenu.addEventListener("click", () => {
			mobileMenuCon.classList.add("active");
		});
	}

	if (closeMobileMenu && mobileMenuCon) {
		closeMobileMenu.addEventListener("click", () => {
			mobileMenuCon.classList.remove("active");
		});
	}

	/*===== HEADER SCROLL =====*/
	let ubicacionPrincipal = window.pageYOffset;

	window.addEventListener("scroll", function () {
		const desplazamientoActual = window.pageYOffset;
		const header = document.querySelector(".container header");

		if (!header) return;

		if (ubicacionPrincipal >= desplazamientoActual) {
			header.style.top = "0px";
		} else {
			header.style.top = "-100px";
		}

		ubicacionPrincipal = desplazamientoActual;
	});

	/*===== AOS =====*/
	if (typeof AOS !== "undefined") {
		AOS.init();
	}

	/*===== TESTIMONIAL =====*/
	const nextBtn = document.querySelector("#testimonial .next");
	const prevBtn = document.querySelector("#testimonial .perv");
	const items = document.querySelectorAll("#testimonial .testimonial-item");

	if (nextBtn && prevBtn && items.length > 0) {
		let times = items.length;
		let count = 1;

		nextBtn.addEventListener("click", () => {
			if (count >= times) {
				count = 1;
				items[0].style.marginLeft = "0";
			} else {
				items[0].style.marginLeft = `-${items[0].offsetWidth * count}px`;
				count++;
			}
		});

		prevBtn.addEventListener("click", () => {
			if (count === 1) {
				items[0].style.marginLeft = `-${items[0].offsetWidth * (times - 1)}px`;
				count = times;
			} else {
				items[0].style.marginLeft = `-${
					items[0].offsetWidth * (count - 1) - items[0].offsetWidth
				}px`;
				count--;
			}
		});
	}

	/*===== GO TOP =====*/
	const gotoup = document.getElementById("gotoup");

	if (gotoup) {
		window.addEventListener("scroll", () => {
			if (
				document.body.scrollTop > 20 ||
				document.documentElement.scrollTop > 20
			) {
				gotoup.classList.add("active");
			} else {
				gotoup.classList.remove("active");
			}
		});

		gotoup.addEventListener("click", () => {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		});
	}

	/*===== GSAP =====*/
	if (typeof gsap !== "undefined") {
		gsap.from(".logo", {
			opacity: 0,
			duration: 1,
			delay: 0.5,
			y: 10,
		});

		gsap.from(".menu-icon", {
			opacity: 0,
			duration: 1,
			delay: 0.7,
			y: 10,
		});

		gsap.from(".desktop-menu ul li", {
			opacity: 0,
			duration: 1,
			delay: 0.6,
			y: 30,
			stagger: 0.2,
		});

		gsap.from(".section > *", {
			opacity: 0,
			duration: 0.7,
			delay: 1,
			y: 30,
			stagger: 0.2,
		});
	}
});