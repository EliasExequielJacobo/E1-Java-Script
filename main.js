class Pizza {
    constructor (id, nombre, ingredientes, precio) {
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio;
    };
    
    getId =() => {
        return `El id de la pizza es ${this.id}`;
    };
}

let Muzza = new Pizza(1, "Muzza", ["Muzzarela", "Oregano", "Salsa de tomate"], 300);
let Rucula = new Pizza(2, "Rucula", ["Muzzarela", "Salsa de tomate", "Rucula"], 400);
let Panceta = new Pizza(3, "Pánceta", ["Muzzrela", "Salsa de tomate", "Panceta"], 450);
let Champiñon = new Pizza(4, "Champiñon", ["Muzzrela", "Salsa de tomate", "Champiñon", "Salsa de puerros"], 500);
let Roquefort = new Pizza(5, "Roquefort", ["Roquefort", "Salsa de tomate", "Rucula"], 600);
let Cuatroquesos = new Pizza(6, "Cuatro quesos", ["Salsa de tomate", "Muzzarela", "Parmesano", "Fontina", "Gorgonzola"], 700);


let Pizzas = [Muzza, Rucula, Panceta, Champiñon, Roquefort, Cuatroquesos];

// IMPAR
console.log("a. Pizzas que tengan un id impar.");

const idImpar = Pizzas.filter((Pizza) => {
     return Pizza.id % 3 ===0;
});

idImpar.forEach ((Pizza) =>{
    console.log(`La pizza de ${Pizza.nombre} tiene id impar.`);
});
console.log("----------------------------------------------------");
// IMPAR

// PIZZA QUE VALGAN MENOS DE X CANTIDAD
console.log("b. ¿Hay alguna pizza que valga menos de $600?");
const hayPizzasQueValganMenosDe= (precio) =>{
    return Pizzas.some((Pizza) =>{
        return Pizza.precio < precio;
    })
        ? console.log(`Si, si hay pizzas que valgan menos de $${precio}.`)
        : console.log(`No, no hay pizzas que valgan menos de $${precio}.`);
};

hayPizzasQueValganMenosDe(600);

console.log("----------------------------------------------------");
// PIZZA QUE VALGAN MENOS DE X CANTIDAD

// NOMBRES CON PRECIOS RESPECTIVOS 
console.log("c. El nombre de cada pizza con su respectivo precio.");
const nombresRespectivos = Pizzas.filter ((Pizza) =>{
    return Pizza.nombre && Pizza.precio;
});

nombresRespectivos.forEach ((Pizza) =>{
    console.log(`El nombre de la pizza es: ${Pizza.nombre} y su precio es de: $${Pizza.precio}.`);
})
console.log("----------------------------------------------------");
// NOMBRES CON PRECIOS RESPECTIVOS 

// IGREDIENTE DE PIZZAS
console.log("d. Todos los ingredientes de cada pizza.");
const pizzaIngredientes = Pizzas.map ((Pizza) =>{
    return {...Pizza};
});



pizzaIngredientes.forEach ((Pizza) =>{
    console.log(`La pizza de ${Pizza.nombre} tiene los siguentes ingredientes: ${Pizza.ingredientes}.`);
})

console.log("----------------------------------------------------");
// IGREDIENTE DE PIZZAS