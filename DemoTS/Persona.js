"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    Persona.prototype.caminar = function () {
        console.log("Estoy caminando " + this.kilometros);
        return 10;
    };
    Persona.prototype.correr = function (parametro1, parametro2) {
        console.log("Estoy caminando " + this.kilometros);
    };
    return Persona;
}());
exports.Persona = Persona;
