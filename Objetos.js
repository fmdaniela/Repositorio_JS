//Personaje de tv
let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;   

let personaje = {
     nombre: "Tanjiro",
     anime: "Demon slayer",
     edad: 16, 
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["anime"]);

personaje.edad = 13;
personaje["edad"] = 13;

delete personaje.anime;
console.log(personaje);