export class Persona{
    //defino los atributos 
    nombre: string ;
    apellido: string ;
    edad: number;
    kilometros: number;

    caminar():number{
        console.log("Estoy caminando " + this.kilometros);
        return 10;
    }
    correr(parametro1:number , parametro2: string):void{
        console.log("Estoy caminando " + this.kilometros);
    }
    constructor(nombre:string , apellido: string , edad : number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad ;
    }



}