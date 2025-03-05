import { c as createComponent, m as maybeRenderHead, d as renderTemplate, g as createAstro, h as addAttribute, r as renderComponent, j as renderHead, i as renderSlot } from './astro/server_ChoI1nXK.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Image } from './_astro_assets_Cf-h0iGN.mjs';
/* empty css                         */

const background = new Proxy({"src":"/_astro/background.BPKAcmfN.svg","width":1440,"height":1024,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vito/Documents/proyects/porfolio/vito.dev/src/assets/background.svg";
							}
							
							return target[name];
						}
					});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="rounded-md border border-gray-300 dark:border-neutral-800"> <section id="Contact" class="flex flex-col p-15"> <div class="max-w-screen-md mx-auto text-center"> <h2 class="text-3xl md:text-4xl font-bold text-gray-950 dark:text-white mb-6">
¡Hablemos!
</h2> <p class="text-gray-600 dark:text-gray-400 mb-8">
¿Tienes alguna pregunta o proyecto en mente? ¡No dudes en contactarme!
</p> <div class="flex flex-col md:flex-row justify-center gap-10"> <a href="mailto:fernandezherediavictorino@gmail.com" class="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-900 text-white font-semibold transition-colors duration-300">
Enviar un Correo
</a> <a href="https://www.linkedin.com/in/victorino-fdez/" target="_blank" rel="noopener noreferrer" class="px-8 py-3 rounded-full border border-gray-300 dark:border-neutral-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors duration-300">
Conectar en LinkedIn
</a> </div> </div> </section> <div class="max-w-screen-lg mx-auto sm:flex sm:items-center sm:justify-between p-4 sm:p-6"> <p class="mb-4 text-sm text-center text-gray-500 dark:text-gray-400 sm:mb-0">
Victorino Fernández © ${(/* @__PURE__ */ new Date()).getFullYear()} </p> <div class="flex justify-center items-center space-x-1"> <a href="https://www.linkedin.com/in/victorino-fdez/" target="_blank" class="inline-flex justify-center p-2 text-gray-500 rounded-md cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-950"> <svg class="size-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path></svg> <span class="sr-only">LinkedIn</span> </a> <a href="https://github.com/victorinofdez" target="_blank" class="inline-flex justify-center p-2 text-gray-500 rounded-md cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-950"> <svg class="size-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg> <span class="sr-only">GitHub</span> </a> </div> </div> </footer>`;
}, "/Users/vito/Documents/proyects/porfolio/vito.dev/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { pathname } = Astro2.url;
  let links;
  const linkNames = ["Inicio", "Sobre m\xED", "Proyectos", "Contacto"];
  if (pathname == "/") {
    links = ["#home", "#about", "#projects", "#Contact"];
  } else {
    links = ["/", "/#about", "/projects", "/#Contact"];
  }
  return renderTemplate(_a || (_a = __template(["", '<header class="max-w-screen-lg mx-auto flex flex-wrap justify-between py-1 px-4 sm:px-6 items-center sticky top-0 z-50 lg:rounded-b-md border border-gray-300 dark:border-neutral-800 backdrop-blur-xs"> <a href="/"> ', ' </a> <div class="sm:order-2 flex items-center gap-3 text-gray-900"> <button title="Theme Toggle" aria-label="Theme Toggle" id="theme-toggle" class="flex items-center gap-2 dark:text-white"> <svg id="theme-sun-icon" class="size-5" aria-label="Sun Icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"></path></svg> <svg id="theme-moon-icon" class="size-5" aria-label="Moon Icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"> <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg> </button> <button title="Navbar Toggle" aria-label="Navbar Toggle" id="navbar-toggle" class="sm:hidden dark:text-white"> <svg aria-label="Menu Icon" id="navbar-menu-icon" class="size-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"></path></svg> <svg aria-label="Close Menu Icon" id="navbar-x-icon" class="hidden size-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"> <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path></svg> </button> </div> <nav id="navbar" class="hidden -translate-y-[200%] transition-transform p-4 sm:block sm:translate-y-0 sm:static sm:p-0 w-full sm:w-auto text-sm lg:text-base"> <ul class="flex flex-col items-center gap-4 lg:gap-6 border border-dashed border-gray-500 rounded-md font-semibold text-gray-500 p-4 sm:p-2 sm:border-none sm:bg-transparent sm:flex-row"> ', ' </ul> </nav> </header> <script>\n  const navbar = document.getElementById("navbar");\n  const navbarToggle = document.getElementById("navbar-toggle");\n  const navbarXIcon = document.getElementById("navbar-x-icon");\n  const navbarMenuIcon = document.getElementById("navbar-menu-icon");\n\n  if (navbarToggle instanceof HTMLButtonElement) {\n    navbarToggle.addEventListener("click", () => {\n      navbarXIcon.classList.toggle("hidden");\n      navbarMenuIcon.classList.toggle("hidden");\n\n      navbar.classList.toggle("hidden");\n\n      setTimeout(() => {\n        navbar.classList.toggle("-translate-y-[200%]");\n      });\n    });\n  }\n\n  const themeToggle = document.getElementById("theme-toggle");\n  const themeMoonIcon = document.getElementById("theme-moon-icon");\n  const themeSunIcon = document.getElementById("theme-sun-icon");\n\n  const isDarkColorThemeSet =\n    "color-theme" in localStorage &&\n    localStorage.getItem("color-theme") === "dark";\n  const userPrefersDarkTheme =\n    window.matchMedia("(prefers-color-scheme: dark)").matches &&\n    !("color-theme" in localStorage);\n\n  if (isDarkColorThemeSet || userPrefersDarkTheme) {\n    setDarkTheme();\n  } else {\n    setLightTheme();\n  }\n\n  if (themeToggle instanceof HTMLButtonElement) {\n    themeToggle.addEventListener("click", () => {\n      const colorTheme = localStorage.getItem("color-theme");\n\n      if (colorTheme === "dark") {\n        setLightTheme();\n      } else {\n        setDarkTheme();\n      }\n    });\n  }\n\n  function setLightTheme() {\n    document.documentElement.classList.remove("dark");\n    localStorage.setItem("color-theme", "light");\n\n    themeMoonIcon.classList.remove("hidden");\n    themeSunIcon.classList.add("hidden");\n  }\n\n  function setDarkTheme() {\n    localStorage.setItem("color-theme", "dark");\n    document.documentElement.classList.add("dark");\n\n    themeMoonIcon.classList.add("hidden");\n    themeSunIcon.classList.remove("hidden");\n  }\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Image", $$Image, { "src": "https://media.licdn.com/dms/image/v2/D4D03AQGFMAkj5suK6Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725443123036?e=1746662400&v=beta&t=Ny-nHgfEhFoZNW8_C6wMLJMMXM17UCBZnH7JQckIGjU", "class": "size-25 rounded-full object-contain object-center bg-transparent", "alt": "Logo", "width": 50, "height": 50, "title": "Logo", "aria-label": "Logo", "loading": "eager" }), links.map((link, i) => renderTemplate`<li> <a${addAttribute(link, "href")} class="hover:text-gray-950 dark:hover:text-white dark:text-gray-400"> ${linkNames[i]} </a> </li>`));
}, "/Users/vito/Documents/proyects/porfolio/vito.dev/src/components/Navbar.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/webp" href="/logo.webp"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Portfolio-Victorino</title><!-- Metas --><meta name="description" content="A small minimalist web developer portfolio built with Astro and TailwindCSS">${renderHead()}</head> <body class="dark:bg-gray-950"> <img class="fixed top-0 left-0 size-full -z-10 blur-2xl"${addAttribute(background.src, "src")} alt="" fetchpriority="high"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="max-w-screen-lg mx-auto p-6 flex flex-col gap-12"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})}  </body></html>`;
}, "/Users/vito/Documents/proyects/porfolio/vito.dev/src/layouts/Layout.astro", void 0);

const PROJECTS = [
	{
		name: "Moments",
		description: "'Moments' es una tienda online de vinos desarrollada con HTML, CSS, JavaScript y jQuery. El proyecto se centra en crear una experiencia de usuario inmersiva y elegante, con un diseño minimalista que invita a descubrir la calidad y singularidad de los vinos ofrecidos.",
		urlImg: "/projects/moments.webp",
		link: "/"
	},
	{
		name: "AnyVitorino Interiors",
		description: "'AnyVitorinoInteriors' es un sitio web desarrollado en WordPress que presenta los servicios y proyectos de diseño de interiores de AnyVitorino Interiors. El sitio ofrece información sobre los servicios disponibles, incluyendo diseño de interiores de lujo, enfoque estratégico de diseño, branding e identidad, y creación de contenido personalizado.",
		urlImg: "/projects/anyVitorinoInteriors.webp",
		link: "/"
	},
	{
		name: "NZ - Style is Everything",
		description: "'NZ' es una web desarrollada con HTML, CSS y JavaScript, que ofrece servicios de diseño gráfico y desarrollo web. Su enfoque minimalista se aplica a la creación de logotipos, diseño web e impresos, informes fotográficos, gráficos en movimiento y desarrollo de sitios web responsivos.",
		urlImg: "/projects/nz.webp",
		link: "/"
	},
	{
		name: "KingdomBattle",
		description: "KingdomBattle es un emocionante juego desarrollado con Phaser 3, que lleva a los jugadores a una épica aventura en un reino lleno de batallas y desafíos.",
		urlImg: "/projects/kingdomLogo.webp",
		link: "/"
	},
	{
		name: "Aurora",
		description: "'Aurora' es un sitio web diseñado para el restaurante de estrella Michelin del mismo nombre, desarrollado con HTML, CSS y JavaScript. El sitio web destaca la elegancia y sofisticación del restaurante, ofreciendo información sobre su menú, filosofía culinaria y experiencia gastronómica.",
		urlImg: "/projects/aurora.webp",
		link: "/"
	},
	{
		name: "Granada Park",
		description: "'Aurora' es un sitio web diseñado para el restaurante de estrella Michelin del mismo nombre, construido con HTML, CSS y JavaScript. El sitio web destaca la elegancia y sofisticación del restaurante, ofreciendo información sobre su menú, filosofía culinaria y experiencia gastronómica. El diseño limpio y moderno busca reflejar la calidad y exclusividad del restaurante Aurora.",
		urlImg: "/projects/granada.webp",
		link: "/"
	}
];

const $$Astro = createAstro();
const $$Project = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Project;
  const { name, description, urlImg, link } = Astro2.props.project;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} target="_blank" class="relative min-h-[400px] flex flex-col items-stretch duration-300 ease-out p-3 group h-fit rounded-md bg-white dark:bg-gray-950/30 w-full lg:max-w-82"> <span class="absolute inset-0 z-20 block size-full duration-300 ease-out bg-transparent border border-transparent group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:border group-hover:border-gray-300 dark:group-hover:border-neutral-800 rounded-md group-hover:bg-white dark:group-hover:bg-gray-950/30"></span> <span class="absolute inset-0 z-10 block w-full h-full duration-300 ease-out border rounded-md border-gray-300 dark:border-neutral-800 group-hover:translate-x-1 group-hover:translate-y-1"></span> <span class="relative z-30 block duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1"> <span class="block w-full"> ${renderComponent($$result, "Image", $$Image, { "loading": Astro2.originPathname == "/" ? "lazy" : "eager", "src": urlImg, "class": "w-full max-h-72 rounded-lg object-center object-cover", "alt": name, "width": 800, "height": 600 })} </span> <span class="block w-full px-1 mt-5 mb-1 sm:mt-3"> <span class="flex items-center mb-3 text-base font-semibold tracking-tight text-gray-950 dark:text-gray-100"> <span>${name}</span> <svg class="group-hover:translate-x-0 group-hover:translate-y-0 -rotate-45 translate-y-1 -translate-x-1 w-2.5 h-2.5 stroke-current ml-1 transition-all ease-in-out duration-200 transform" viewBox="0 0 13 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><g id="svg" transform="translate(0.666667, 2.333333)" stroke="currentColor" stroke-width="2.4"><g><polyline class="transition-all duration-200 ease-out opacity-0 delay-0 group-hover:opacity-100" points="5.33333333 0 10.8333333 5.5 5.33333333 11"></polyline><line class="transition-all duration-200 ease-out transform -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:ml-0" x1="10.8333333" y1="5.5" x2="0.833333333" y2="5.16666667"></line></g></g></g></svg> </span> <span class="text-sm text-gray-600 dark:text-gray-400 block">${description}</span> </span> </span> </a>`;
}, "/Users/vito/Documents/proyects/porfolio/vito.dev/src/components/Project.astro", void 0);

export { $$Layout as $, PROJECTS as P, $$Project as a };
