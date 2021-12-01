<?php

// number_format($variable , casas decimais , separador de decimais , separador de milhas)
$number = 146832.35632;
$realValue = number_format($number, 2, ",", ".");
echo $realValue;
echo "<br>";
// arredondamento
echo round(3.5);
echo "<br>";
// floor (arredondamento para baixo)
echo floor(3.9);
echo "<br>";
// floor (arredondamento para CIMA)
echo ceil(3.4);
echo "<br>";
// numeros ramdômicos entre um determinado intervalo
echo rand(0, 10);