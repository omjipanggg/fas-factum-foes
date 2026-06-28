import { Hero } from "./component.js";

const main = document.getElementById("main");
const sections = [
	"hero",
	"about",
	"skills",
	"resume",
	"portfolio",
	"testimonials",
	"services",
	"faq",
	"contact",
];

async function loadComponent(path) {
	const html = await fetch(path).then((response) => response.text());

	const div = document.createElement("div");
	div.innerHTML = html;

	return div.querySelector("template").content.cloneNode(true);
}

for (const section of sections) {
	main.appendChild(await loadComponent(`./templates/${section}.html`));
}
