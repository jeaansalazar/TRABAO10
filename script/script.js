class Alumno {
    promfinal = 0;
    constructor(codigo, nombre, nota1, nota2, nota3, nota4) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
    }

    promedio(){
        return this.promfinal = (this.nota1 * 0.15) + (this.nota2 * 0.2) + (this.nota3 * 0.25) + (this.nota4 * 0.4)
    }
    condicion(notafinal){
        if(notafinal >= 12) {
            return "aprobado"
        }else{
            return "desaprobado"
        }
    }
    obsequio(notafinal){
        if(notafinal >= 17) {
            return "felicidades te ganaste una mochila"
        }else{
            return "sin premio"
        }
    }
}
const jean = new Alumno('01','carlos', 18, 18, 18, 18)
console.log(jean.promedio());
console.log(jean.promfinal)
console.log(jean.condicion(jean.promfinal));
console.log(jean.obsequio(jean.promfinal));