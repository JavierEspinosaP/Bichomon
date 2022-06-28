console.log(document.title);


// 1.-Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon". ✅✅

let title = document.querySelector('#gen-1')

title.innerHTML = "Generasión 1 Pokimon";

// 2.- Cambia el color de fondo de la primera generación de Pokimon.

let color = document.querySelector("div.infocard-list")

color.style.backgroundColor = "red"

// 3.- Imprime por consola la URL de la página.

let url = window.location.href;

// console.log(url);

// 4.- Imprime por consola el dominio de la página.

let dom = window.location.hostname;

// console.log(dom);

// 5.- Imprime todos los nodos de imagen.

let nodoimagen = document.querySelectorAll(".img-fixed .img-sprite")

// console.log(nodoimagen);

// 6.- Sustituye el atributo "src" de todas las imágenes por este

let imagen = document.getElementsByTagName('img').src="https://media.giphy.com/media/2v170e71aanfi/giphy.gif";


// 7.- Cambia el fondo de todos los infocard-lg-data text-muted 
//     para todos los Pokimon voladores itype flying


