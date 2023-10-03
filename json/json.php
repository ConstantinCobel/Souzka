<?php
// на какие данные рассчитан этот скрипт
Header set Access-Control-Allow-Origin "*"
Header set Access-Control-Allow-Methods: "GET,POST,OPTIONS,DELETE,PUT"
Header add Access-Control-Allow-Headers "origin, x-requested-with, content-type"
header("Content-Type: application/json");
// разбираем JSON-строку на составляющие встроенной командой
$data = json_decode(file_get_contents("php://input"));
// отправляем в ответ строку с подтверждением
echo "Сервер получил данные:";
?>