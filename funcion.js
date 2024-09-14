// Función Regular para verificar si un número es par o impar
function checkEvenOddRegular(num) {
    if (num % 2 === 0) {
      console.log(`${num} es par.`);
    } else {
      console.log(`${num} es impar.`);
    }
  }
  
  // Función Flecha para verificar si un número es par o impar
  const checkEvenOddArrow = (num) => {
    if (num % 2 === 0) {
      console.log(`${num} es par.`);
    } else {
      console.log(`${num} es impar.`);
    }
  }
  
  // Llamadas a las funciones
  console.log("Usando función regular:");
  checkEvenOddRegular(5); // 5 es impar.
  checkEvenOddRegular(8); // 8 es par.
  
  console.log("Usando función flecha:");
  checkEvenOddArrow(5); // 5 es impar.
  checkEvenOddArrow(8); // 8 es par.
  
