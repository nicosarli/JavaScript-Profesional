// Boolean
let muted: boolean = true;
muted = false;

// Numeros
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

// String
let nombre: string = 'Nicolas';
let saludo = `Me llamo ${nombre}`

// Arreglos
let people: string[] = [];
people = ['Isabel', 'Nicole', 'Raul'];
people.push("9000");

let peopleAndNumbers: Array< string | number > = [];
peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push(9000);

// Enum
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
    Amarilo = "Amarillo",
}

// let colorFavorito: Color = "Rojo"
let colorFavorito: Color = Color.Verde;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any
let comodin : any = "Joker";
comodin = { type: "Wildcard" }

// Object
let someObject: Object = { type: "Wildcard" }

// Funciones que devuelven resultados
function add(a: number, b: number): number {
    return a + b;
}

const sum = add(1, 2);

// Funciones que devuelven otras funciones
function createAdder (a: number): (number) => number {
    return function (b: number) {
        return b + a;
    }
}

const addFour = createAdder(4);
const forPlus6 = addFour(6);

function fullName1 (firstName: string, lastName?: string): string {
    return `${firstName} ${lastName}`
}

const nicolas1 = fullName1('Nicolas');
console.log(nicolas1);

function fullName2 (firstName: string, lastName: string = 'Sarli'): string {
    return `${firstName} ${lastName}`
}

const nicolas2 = fullName2('Nicolas');
console.log(nicolas2);

// Interfaces

enum ColorRect {
    Rojo = "Rojo",
    Verde = "Verde",
}

interface Rectangulo {
    ancho: number,
    alto: number,
    color?: ColorRect
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: ColorRect.Rojo,
};

function area(r: Rectangulo) {
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function() {
    return this.color? `Un rectangulo ${this.color}` : `Un rectangulo`;
}

console.log(rect.toString());