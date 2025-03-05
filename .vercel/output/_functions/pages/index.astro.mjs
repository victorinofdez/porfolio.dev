import { c as createComponent, g as createAstro, m as maybeRenderHead, h as addAttribute, i as renderSlot, d as renderTemplate, r as renderComponent, u as unescapeHTML } from '../chunks/astro/server_ChoI1nXK.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Layout, P as PROJECTS, a as $$Project } from '../chunks/Project_CEt6lTI8.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card;
  const { className = "" } = Astro2.props;
  const splitClasses = className.split(" ");
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["rounded-md p-6 w-full border border-gray-300 dark:border-neutral-800 flex flex-col gap-2 bg-white shadow-sm dark:bg-gray-950/30", splitClasses], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/vito/Documents/proyects/porfolio/vito.dev/src/components/Card.astro", void 0);

const $$Astro$1 = createAstro();
const $$TimelineItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TimelineItem;
  const { title, date, position, description, badgeText } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="mb-10 ms-8"> <span class="absolute flex items-center justify-center size-6 bg-blue-300 rounded-full -start-3 ring-8 ring-blue-100 dark:ring-blue-950/60 dark:bg-blue-800"> ${renderSlot($$result, $$slots["icon"])} </span> <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-950 dark:text-white"> ${position} ${badgeText && renderTemplate`<span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-xs dark:bg-blue-900 dark:text-blue-300 ms-3"> ${badgeText} </span>`} </h3> <p class="mb-2 text-sm font-normal text-gray-600 dark:text-gray-400"> ${title} </p> <time class="block mb-2 text-sm font-normal leading-none text-gray-500">${date}</time> <p class="mb-4 text-sm sm:text-base font-normal text-gray-600 dark:text-gray-400"> ${description} </p> ${renderSlot($$result, $$slots["extra-content"])} </li>`;
}, "/Users/vito/Documents/proyects/porfolio/vito.dev/src/components/TimelineItem.astro", void 0);

const EXPERIENCES = [
	{
		dates: " sept. 2024 - dic. 2024",
		company: "REMARQUS MEDIA CONSULTING SL",
		position: "Desarrollador Junior Full-Stack Magento 2",
		description: " Mi experiencia se centra en el desarrollo de funcionalidades personalizadas para Magento 2, abarcando tanto el backend como el frontend. Implementé y gestioné entornos de desarrollo Dockerizados, asegurando la homogeneidad y eficiencia del equipo. Además, diseñé, desarrollé y optimicé módulos personalizados, integrando nuevas funcionalidades para ampliar las capacidades de la plataforma. Destaca la implementación de un entorno de desarrollo en Docker, que redujo el tiempo de configuración inicial en un 50%, mejorando significativamente la productividad del equipo.",
		svgIcon: "<svg class='size-4 text-gray-600 dark:text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'> <path stroke-linecap='round' stroke-width='2' d='M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2' /> <path stroke-linecap='round' stroke-width='2' d='M4 14l3.15.787a20 20 0 009.7 0L20 14' /> <path stroke-linejoin='round' stroke-width='2' d='M4 10a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8z' /><circle cx='12' cy='12' r='1' /></svg>"
	},
	{
		dates: "Mar – Jun 2024",
		company: "Ecope Informática",
		position: "Prácticas Desarrollador Full-Stack",
		description: "Desarrollo integral de aplicaciones web, gestionando tanto el frontend con React y Next.js como el backend utilizando Laravel para crear APIs robustas y escalables.",
		svgIcon: "<svg class='size-4 text-gray-600 dark:text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'> <path stroke-linecap='round' stroke-width='2' d='M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2' /> <path stroke-linecap='round' stroke-width='2' d='M4 14l3.15.787a20 20 0 009.7 0L20 14' /> <path stroke-linejoin='round' stroke-width='2' d='M4 10a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8z' /><circle cx='12' cy='12' r='1' /></svg>"
	}
];

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="home" class="flex flex-col"> <article class="text-gray-950 dark:text-white text-pretty mx-auto"> <h1 class="text-4xl md:text-6xl font-bold max-w-screen-sm">
Bienvenido 👋, Soy Victorino Fernández
</h1> <div class="flex flex-col gap-6 mt-8"> <h2 class="font-bold text-xl sm:text-2xl">
Encantado de ayudarte con:
</h2> <div class="flex flex-col sm:flex-row gap-4 overflow-hidden relative"> ${renderComponent($$result2, "Card", $$Card, { "className": "card" }, { "default": ($$result3) => renderTemplate` <div class="rounded-full p-4 grid place-content-center bg-blue-50 text-blue-500 dark:bg-blue-950/30 dark:text-blue-700 w-fit"> <svg class="size-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M128 32C92.7 32 64 60.7 64 96l0 256 64 0 0-256 384 0 0 256 64 0 0-256c0-35.3-28.7-64-64-64L128 32zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480l486.4 0c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2L19.2 384z"></path></svg> </div> <h2 class="font-semibold text-lg sm:text-xl md:text-2xl">
Desarrollo Frontend
</h2> <p class="text-gray-600 text-sm sm:text-base dark:text-gray-400">
Creación de interfaces de usuario dinámicas y con capacidad de
              respuesta utilizando
<span class="text-blue-700 dark:text-blue-500">React, Angular and Astro</span>. Doy vida a tus diseños con código limpio, eficiente y y
              mantenible.
</p> ` })} ${renderComponent($$result2, "Card", $$Card, { "className": "card" }, { "default": ($$result3) => renderTemplate` <div class="rounded-full p-4 grid place-content-center bg-yellow-50 text-yellow-500 dark:bg-yellow-950/30 dark:text-yellow-700 w-fit"> <svg class="size-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 32zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 288zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"></path></svg> </div> <h2 class="font-semibold text-lg sm:text-xl md:text-2xl">
Desarrollo Backend
</h2> <p class="text-gray-600 text-sm sm:text-base dark:text-gray-400">
Experiencia en la creación de aplicaciones de servidor robustas y
              escalables con Frameworks como <span class="text-yellow-700 dark:text-yellow-500">Laravel y Spring Boot</span>. Me aseguro de crear aplicaciones seguras, eficientes, y sin
              problemas integradas con el frontend.
</p> ` })} </div> </div> </article> </section> <section id="about" class="flex flex-col"> <h2 class="text-2xl md:text-4xl font-bold text-gray-950 dark:text-white mb-8">
Sobre mí
</h2> <article class="flex flex-col md:flex-row gap-4 p-4"> ${renderComponent($$result2, "Card", $$Card, { "className": "text-gray-600 dark:text-gray-400 h-fit" }, { "default": ($$result3) => renderTemplate` <div class="flex flex-col gap-2 text-sm sm:text-base"> <h3 class="text-lg sm:text-xl font-semibold text-gray-950 dark:text-white">
Mi Perfil ‍
</h3> <p>
Soy Desarrollador de Software con titulación en Técnico Superior en
            Desarrollo de Aplicaciones Web, con experiencia en tecnologías como
            Java, JavaScript, PHP, SQL, y frameworks como React, Laravel y
            Spring Boot.
</p> <p>
Actualmente, me estoy enfocando en el lenguaje de
<span class="text-[#6DB33F]">Java</span> en el desarrollo de microservicios
            con
<span class="text-[#6DB33F]">Spring Boot</span>. Mi objetivo
            profesional es afrontar nuevos retos y seguir creciendo como
            desarrollador Back End.
</p> </div> <div class="flex flex-col gap-2"> <h3 class="text-lg sm:text-xl font-semibold text-gray-950 dark:text-white">
¿Quieres saber un poco más?
</h3> <a href="/docs/cv-victorino-esp.pdf" role="button" aria-label="Descargar CV" download class="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-800 dark:bg-blue-700 focus:ring-4 focus:outline-hidden focus:ring-blue-200 dark:focus:ring-blue-950 text-white w-fit font-semibold">Descargar CV</a> </div> ` })} ${renderComponent($$result2, "Card", $$Card, { "className": "p-8" }, { "default": ($$result3) => renderTemplate` <ol class="relative border-s border-gray-300 dark:border-neutral-800"> ${EXPERIENCES.map((experience) => renderTemplate`${renderComponent($$result3, "TimelineItem", $$TimelineItem, { "title": experience.company, "description": experience.description, "date": experience.dates, "position": experience.position }, { "icon": ($$result4) => renderTemplate`<div class="size-full p-1">${unescapeHTML(experience.svgIcon)}</div>` })}`)} </ol> ` })} </article> </section> <section id="projects" class="flex flex-col"> <h2 class="text-2xl md:text-4xl font-bold text-gray-950 dark:text-white mb-8">
Proyectos Recientes
</h2> <div class="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${PROJECTS.filter((__, i) => i < 3).map((project) => renderTemplate`${renderComponent($$result2, "Project", $$Project, { "project": project })}`)} </div> <div class="mt-6 flex justify-center pb-20"> <a role="button" href="/projects" class="font-semibold transition-colors px-4 py-2 text-base rounded-3xl bg-blue-600 hover:bg-transparent hover:border hover:border-blue-600 hover:text-blue-600 dark:bg-blue-800 text-white dark:hover:bg-transparent dark:hover:border-blue-800 dark:hover:text-blue-800 duration-300">Todos mis proyectos</a> </div> </section> ` })}`;
}, "/Users/vito/Documents/proyects/porfolio/vito.dev/src/pages/index.astro", void 0);

const $$file = "/Users/vito/Documents/proyects/porfolio/vito.dev/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
