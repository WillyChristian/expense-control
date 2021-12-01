<?php

$x = 123;
$y = 321;

function sum()
{
  return $GLOBALS["x"] + $GLOBALS["y"];
}

$result = sum();
echo $result;