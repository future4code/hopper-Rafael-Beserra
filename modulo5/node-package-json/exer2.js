const variacao = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);
const resultado = 0;

// 2)
// if (variacao === "add") {
//   console.log(`Resultado: ${num1 + num2}`);
// } else {
//   if (variacao === "sub") {
//     console.log(`Resultado: ${num1 - num2}`);
//   } else {
//     if (variacao === "mult") {
//       console.log(`Resultado: ${num1 * num2}`);
//     } else {
//       if (variacao === "div") {
//         console.log(`Resultado: ${num1 / num2}`);
//       }
//     }
//   }
// }

// Desafio:
if (variacao && num1 && num2) {
  if (variacao === "add") {
    console.log(`Resultado: ${num1 + num2}`);
  } else {
    if (variacao === "sub") {
      console.log(`Resultado: ${num1 - num2}`);
    } else {
      if (variacao === "mult") {
        console.log(`Resultado: ${num1 * num2}`);
      } else {
        if (variacao === "div") {
          console.log(`Resultado: ${num1 / num2}`);
        }
      }
    }
  }
} else {console.log("Esperava 3 parâmetros e recebi menos")}