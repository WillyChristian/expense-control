<?php

//if else

define("TRUZAO", true);

if (TRUZAO) {
  echo "deu verdadeiro, mas eu neguei kkkk";
} else {
  echo "caiu no else kkkkk";
}

$myName = "Willy";

for ($i = 0; $i < strlen($myName); $i++) {
  echo "<br>";
  echo "To ficando pró nessa merda, hein " . $myName . "! ";
  echo "<hr>";
}