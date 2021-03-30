"use strict";
exports.__esModule = true;
var Persona_1 = require("./Persona");
var miObjeto = new Persona_1.Persona("alex", "De assis", 27);
/*alert('hola mundo');*/
console.log('holaaaaa 2021 ');
//LET - VAR - CONST
// var : es para variables globales
// let : es para variables locales al bloque
//VAR
var foo = 123;
if (true) {
    var foo = 456;
}
console.log('foo global ' + foo); //456
//LET
//let foo2 = 123;
if (true) {
    var foo2 = 456;
}
console.log('foo2 local ' + foo2); //123
//CONST
//las contantes deben se declaras y asignada siempre 
//const foo3 = 123;
//foo3 =  456;// No permitido por que foo3 es inmutable 
//las contantes tambien admiten objetos literales  como por ejemplo 
//const foo4 = {bar : 123};
//foo4 = { bar: 456}; //ERROR no se permite la modificacion del objeto 
//pero si se puede modificar el contenido de las variables que contiene el 
//objeto literal , por ej:
var foo5 = { bar: 123 };
console.dir(foo5);
foo5.bar = 456; //permitido!
console.dir(foo5);
//Tipos de datos primitivos en TS
//Boolean: true o false 
var isDone = false;
//Number :datos numericos
var decimal = 6;
console.log(decimal);
var hex = 0xf00d;
console.log(hex);
var binary = 10;
console.log(binary);
var octal = 484;
console.log(octal);
//Tipos de datos String  : cadenas de caracteres y /o textos 
var color = "blue";
color = 'red';
console.log(color);
//Templates para concatenar 
var fullName = "Sofia Cordoba";
var age = 24;
var sentence = "Hello , my name is " + fullName + ". I'll be " + (age + 1) + "\nyears old next month.";
console.log(sentence);
//este tipo de sintaxis es equivalente a :
var sentenceTwo = "Hello , my name is " + fullName + "." + "I'll be" +
    (age + 1) + " years old next month.";
console.log(sentenceTwo);
