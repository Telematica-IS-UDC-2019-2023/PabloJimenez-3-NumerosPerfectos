//Dado un numero let n=
//Sucecion de numeros que identifique Perfectos e Imperfectos
/*
Un numero n es perfecto si la suma de sus divisores 
menores al numero n es igual al mismo numero

8 -> 4+2+1=7 (Imperfecto)
6 -> 3+2+1=6 (Perfecto)
*/

for(var i=1; i<=100;i++) {

    var b=0;

    for(var j =1; j <= Math.floor(i/2); j++){
        if(parseInt(i) % parseInt(j) == 0)
        b = b + parseInt(j);
    }
    if(b == i){
        console.log(`El numero %d es PERFECTO \n`,i);
    } else if (b != i){
        console.log("El numero %d es imperfecto \n",i)
    }
}
