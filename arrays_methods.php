
<?php
// Métodos comuns para usar com arrays

$nomes = ["Jose", "Maria", "Joaquim"];
$carros = ["gol", "polo", "chevete"];

//is_array verifica se a variável é um aray
echo is_array($nomes); //saída: 1 (ou seja, true)

// in_array() verifica se existe o valor pesquisado no array
echo "<br>";
echo in_array("Jose", $nomes);

// array_keys exibe as chaves de um array (mais útil em array associativos)
echo "<br>";
 print_r(array_keys($nomes));

 //nota: o resultado/saída é um novo array contendo as chaves
// o mesmo é valido para array_values(), que monta um
// novo array somente com os valores.
/****** Lenbrando que essas funções são mais eficiente em arrays associativos *******/

//array_merge() fundi dois arrays
$newArray = array_merge($carros, $nomes);
print_r( $newArray);

// inserção de novos dados com push/unshift
array_push($nomes, "Frederico", "Francisquinha", "Ramon");
echo "<br>";
print_r($nomes);

// array_combine() pega 2 array e faz de um chave e do outro o valor
$marcas = ["Chevrolet", "Peugeot", "Nissan"];
$modelos = ["Onix", "307", "Versa"];
$listaVenda = array_combine($marcas, $modelos);
print_r($listaVenda);
//saida: Array ( [Chevrolet] => Onix [Peugeot] => 307 [Nissan] => Versa )

// Somatório com array_sum()
$numeros = [42,4,5.6,-77,25,35,-67,10];
$soma = array_sum($numeros);
echo $soma;