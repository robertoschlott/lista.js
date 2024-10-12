//Exercicio 1

function exercicio1(array) {

  let soma = 0;

  for (let contador = 0; contador < array.length; contador++) {

      soma = soma + array[contador]

  }

  return soma;



}

//Exercicio 2

function exercicio2(lista_numeros) {

  let numero_maior = lista_numeros[0];

  for (let contador = 0; contador < lista_numeros.length; contador++) {

      if (lista_numeros[contador] > numero_maior) {

          numero_maior = lista_numeros[contador];

      }

  }

  return numero_maior;

}

//Exercicio 3

function exercicio3(lista_numeros) {

  let quantidade = 0;

  for (let contador = 0; contador < lista_numeros.length; contador++) {

      if (lista_numeros[contador] % 2 == 0) {

          quantidade++;

      }

  }

  return quantidade;

}

//Exercicio 4

function exercicio4(lista_numero) {

  let media = 0;

  let soma = 0;

  for (let contador = 0; contador < lista_numero.length; contador++) {

      soma = (soma + lista_numero[contador])

  }

  media = soma / lista_numero.length

  return media;
  

}

//Exercicio 5

function exercicio5(lista_numero) {

  let quantidade_positivo = 0

  let quantidade_negativo = 0

  for (let contador = 0; contador < lista_numero.length; contador++) {

      if (lista_numero[contador] >= 0) {

          quantidade_positivo++

      } else {

          quantidade_negativo++

      }

  }

  console.log( `quantidade negativos ${quantidade_negativo}, quantidade positivos ${quantidade_positivo}`)

  return quantidade_negativo, quantidade_positivo

}

//Exercicio 6

function exercicio6(lista_numero, numero_multiplicador) {

  for (let contador = 0; contador < lista_numero.length; contador++) {
    
    lista_numero[contador] = lista_numero[contador] * numero_multiplicador

  }

  return lista_numero


}


 



