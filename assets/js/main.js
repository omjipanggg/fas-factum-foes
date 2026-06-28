/**
 * Template Name: MinimalFolio
 * Template URL: https://bootstrapmade.com/minimalfolio-bootstrap-portfolio-template/
 * Updated: Aug 05 2025 with Bootstrap v5.3.7
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

const theme = localStorage.getItem("theme") || "dark";

document.documentElement.setAttribute("data-bs-theme", theme);

document
	.querySelector(".btn-xl")
	.classList.add(theme === "dark" ? "btn-primary" : "btn-warning");

const icon = document.querySelector(".btn-theme i");

icon.className = `bi ${theme === "dark" ? "bi-sun" : "bi-moon"}`;

function toggleTheme() {
	const currentTheme = document.documentElement.getAttribute("data-bs-theme");

	const newTheme = currentTheme === "light" ? "dark" : "light";

	document.documentElement.setAttribute("data-bs-theme", newTheme);

	const btn = document.querySelector(".btn-xl");
	const btnTheme = document.querySelector(".btn-theme");

	if (newTheme === "dark") {
		btn.classList.add("btn-primary");
		btn.classList.remove("btn-warning");
		btnTheme.querySelector("i").classList.add("bi-sun");
		btnTheme.querySelector("i").classList.remove("bi-moon");
	} else {
		btn.classList.add("btn-warning");
		btn.classList.remove("btn-primary");
		btnTheme.querySelector("i").classList.add("bi-moon");
		btnTheme.querySelector("i").classList.remove("bi-sun");
	}

	localStorage.setItem("theme", newTheme);
}

/**
 * Initiate typed.js
 */

if (document.querySelector("#typing")) {
	new Typed("#typing", {
		strings: [
			"IT Enthusiast",
			"Full-Stack Developer",
			"Database Administrator",
			"Loving Dad",
			"Your Best Friend",
		],
		loop: true,
		cursorChar: "▌",
		startDelay: 200,
		backDelay: 1000,
		backSpeed: 20,
		typeSpeed: 20,
	});
}
(function () {
	"use strict";

	/**
	 * Apply .scrolled class to the body as the page is scrolled down
	 */
	function toggleScrolled() {
		const selectBody = document.querySelector("body");
		const selectHeader = document.querySelector("#header");
		if (
			!selectHeader.classList.contains("scroll-up-sticky") &&
			!selectHeader.classList.contains("sticky-top") &&
			!selectHeader.classList.contains("fixed-top")
		)
			return;
		window.scrollY > 100
			? selectBody.classList.add("scrolled")
			: selectBody.classList.remove("scrolled");
	}

	//   document.addEventListener('scroll', toggleScrolled);
	//   window.addEventListener('load', toggleScrolled);

	/**
	 * Mobile nav toggle
	 */
	const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

	function mobileNavToogle() {
		document.querySelector("body").classList.toggle("mobile-nav-active");
		mobileNavToggleBtn.classList.toggle("bi-list");
		mobileNavToggleBtn.classList.toggle("bi-x");
	}
	if (mobileNavToggleBtn) {
		mobileNavToggleBtn.addEventListener("click", mobileNavToogle);
	}

	/**
	 * Hide mobile nav on same-page/hash links
	 */
	document.querySelectorAll("#navmenu a").forEach((navmenu) => {
		navmenu.addEventListener("click", () => {
			if (document.querySelector(".mobile-nav-active")) {
				mobileNavToogle();
			}
		});
	});

	/**
	 * Toggle mobile nav dropdowns
	 */
	document
		.querySelectorAll(".navmenu .toggle-dropdown")
		.forEach((navmenu) => {
			navmenu.addEventListener("click", function (e) {
				e.preventDefault();
				this.parentNode.classList.toggle("active");
				this.parentNode.nextElementSibling.classList.toggle(
					"dropdown-active",
				);
				e.stopImmediatePropagation();
			});
		});

	/**
	 * Preloader
	 */
	const preloader = document.querySelector("#preloader");
	if (preloader) {
		window.addEventListener("load", () => {
			preloader.remove();
		});
	}

	/**
	 * Scroll top button
	 */
	let scrollTop = document.querySelector(".scroll-top");

	function toggleScrollTop() {
		if (scrollTop) {
			if (window.scrollY > 100) {
				scrollTop.classList.add("active");
				document.querySelector(".btn-theme").classList.add("active");
			} else {
				scrollTop.classList.remove("active");
				document.querySelector(".btn-theme").classList.remove("active");
			}
		}
	}
	scrollTop.addEventListener("click", (e) => {
		e.preventDefault();
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});

	window.addEventListener("load", toggleScrollTop);
	document.addEventListener("scroll", toggleScrollTop);

	/**
	 * Animation on scroll function and init
	 */
	function aosInit() {
		AOS.init({
			duration: 600,
			easing: "ease-in-out",
			once: true,
			mirror: false,
		});
	}
	window.addEventListener("load", aosInit);

	/**
	 * Animate the skills items on reveal
	 */
	let skillsAnimation = document.querySelectorAll(".skills-animation");
	skillsAnimation.forEach((item) => {
		new Waypoint({
			element: item,
			offset: "80%",
			handler: function (direction) {
				let progress = item.querySelectorAll(".progress .progress-bar");
				progress.forEach((el) => {
					el.style.width = el.getAttribute("aria-valuenow") + "%";
				});
			},
		});
	});

	/**
	 * Initiate glightbox
	 */
	const glightbox = GLightbox({
		selector: ".glightbox",
	});

	/**
	 * Init isotope layout and filters
	 */
	document
		.querySelectorAll(".isotope-layout")
		.forEach(function (isotopeItem) {
			let layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
			let filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
			let sort =
				isotopeItem.getAttribute("data-sort") ?? "original-order";

			let initIsotope;
			imagesLoaded(
				isotopeItem.querySelector(".isotope-container"),
				function () {
					initIsotope = new Isotope(
						isotopeItem.querySelector(".isotope-container"),
						{
							itemSelector: ".isotope-item",
							layoutMode: layout,
							filter: filter,
							sortBy: sort,
						},
					);
				},
			);

			isotopeItem
				.querySelectorAll(".isotope-filters li")
				.forEach(function (filters) {
					filters.addEventListener(
						"click",
						function () {
							isotopeItem
								.querySelector(
									".isotope-filters .filter-active",
								)
								.classList.remove("filter-active");
							this.classList.add("filter-active");
							initIsotope.arrange({
								filter: this.getAttribute("data-filter"),
							});
							if (typeof aosInit === "function") {
								aosInit();
							}
						},
						false,
					);
				});
		});

	/**
	 * Init swiper sliders
	function initSwiper() {
		document
			.querySelectorAll(".init-swiper")
			.forEach(function (swiperElement) {
				let config = JSON.parse(
					swiperElement
						.querySelector(".swiper-config")
						.innerHTML.trim(),
				);

				if (swiperElement.classList.contains("swiper-tab")) {
					initSwiperWithCustomPagination(swiperElement, config);
				} else {
					new Swiper(swiperElement, config);
				}
			});
	}

	window.addEventListener("load", initSwiper);
    */

	/**
	 * Frequently Asked Questions Toggle
	 */
	document.querySelectorAll(".faq-header").forEach((header) => {
		header.addEventListener("click", () => {
			const currentFaq = header.closest(".faq-item");

			document.querySelectorAll(".faq-item").forEach((item) => {
				item.classList.remove("faq-active");
			});

			currentFaq.classList.add("faq-active");
		});
	});

	/**
	 * Correct scrolling position upon page load for URLs containing hash links.
	 */
	window.addEventListener("load", function (e) {
		if (window.location.hash) {
			if (document.querySelector(window.location.hash)) {
				setTimeout(() => {
					let section = document.querySelector(window.location.hash);
					let scrollMarginTop =
						getComputedStyle(section).scrollMarginTop;
					window.scrollTo({
						top: section.offsetTop - parseInt(scrollMarginTop),
						behavior: "smooth",
					});
				}, 100);
			}
		}
	});

	/**
	 * Navmenu Scrollspy
	 */
	let navmenulinks = document.querySelectorAll(".navmenu a");

	function navmenuScrollspy() {
		navmenulinks.forEach((navmenulink) => {
			if (!navmenulink.hash) return;
			let section = document.querySelector(navmenulink.hash);
			if (!section) return;
			let position = window.scrollY + 200;
			if (
				position >= section.offsetTop &&
				position <= section.offsetTop + section.offsetHeight
			) {
				document
					.querySelectorAll(".navmenu a.active")
					.forEach((link) => link.classList.remove("active"));
				navmenulink.classList.add("active");
			} else {
				navmenulink.classList.remove("active");
			}
		});
	}
	window.addEventListener("load", navmenuScrollspy);
	document.addEventListener("scroll", navmenuScrollspy);
})();

const swiper = new Swiper(".swiper", {
	loop: true,
	speed: 600,
	autoplay: {
		delay: 5000,
	},
	slidesPerView: "auto",
	pagination: {
		el: ".swiper-pagination",
		type: "bullets",
		clickable: true,
	},
	breakpoints: {
		960: {
			slidesPerView: 1,
			spaceBetween: 32,
		},
		1200: {
			slidesPerView: 2,
			spaceBetween: 32,
		},
	},
	grabCursor: true,
});
