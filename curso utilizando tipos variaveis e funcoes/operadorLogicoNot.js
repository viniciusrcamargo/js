const notaFinal = 7;
const faltas = 3; 
const adivertencias = 0;

if (notaFinal < 7 || faltas > 4) {
 console.log('reprovado, boas festas');
} else {
  console.log('não foi reprovado por falta');
}

if(faltas <= 2 && !adivertencias){
    console.log('recebe o bônus');
} else {
  console.log('não recebe o bônus');
}
