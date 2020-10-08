/*
Un numero n es perfecto si la suma de sus divisores 
menores al numero n es igual al mismo numero

8 -> 4+2+1=7 (Imperfecto)
6 -> 3+2+1=6 (Perfecto)
*/

//Dado un numero let n=
//Mostrar un mensaje si un numero ES o NO perfecto 
class numsPerfectos {
    constructor(numero){
        this.numero= numero;
        this.divisores = [];
        this.suma = 0;
    }

    Divisores(){
        for (let i=0; i<this.numero; i++){
            if ((this.numero % i)==0){
                this.divisores.push(i);
            }
        }
        return this.divisores;
    }

    determinarNum(){
        this.divisores.forEach(element => {
            this.suma += element;
        });
        if (this.suma == this.numero) {
            return `"Numero PERFECTO"`;
        } else {
            return `"Numero IMPERFECTO"`;
        }
    }
}

let testNum = new numsPerfectos(28);
console.log(`Los divisores del numero ${testNum.numero} son: ${testNum.Divisores()}`);
console.log(`El numero ${testNum.numero} es ${testNum.determinarNum()}`);