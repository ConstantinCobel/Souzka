

                  //    Кнопка ВХОД
    document.querySelector('#Open').onclick = function () {
        //var MyUnit = document.querySelector('#MyUnit').value;
        //var MyAccaunt = document.querySelector('#MyAccaunt').value;
		  //alert("Итог: " + MyUnit + " " + MyAccaunt);
		  //document.getElementById("Souz").value=Souz;
		  //document.getElementById("Nik").value="NO";
		  //document.getElementById("Pan0").style.display = "none";
		//opulate();
		    // с помощью jQuery обращаемся к элементам на странице по их именам
    let name = document.querySelector('#MyUnit');
    let lastname = document.querySelector('#MyAccaunt');
    // а вот сюда мы поместим ответ от сервера
    let result = document.querySelector('.result');
    // создаём новый экземпляр запроса XHR
    let xhr = new XMLHttpRequest();
    // адрес, куда мы отправим нашу JSON-строку
    let url = "https://constantincobel.github.io/Souzka/json.php";
    // открываем соединение
    xhr.open("POST", url, true);
    // устанавливаем заголовок — выбираем тип контента, который отправится на сервер, в нашем случае мы явно пишем, что это JSON
    xhr.setRequestHeader("Content-Type", "application");

    // когда придёт ответ на наше обращение к серверу, мы его обработаем здесь
    xhr.onreadystatechange = function () {
      // если запрос принят и сервер ответил, что всё в порядке
      if (xhr.readyState === 4 && xhr.status === 200) {
        // выводим то, что ответил нам сервер — так мы убедимся, что данные он получил правильно
        result.innerHTML = this.responseText;
      }
    };
    // преобразуем наши данные JSON в строку
    var data = JSON.stringify({ "name": name.value, "lastname": lastname.value });
    // когда всё готово, отправляем JSON на сервер
    xhr.send(data);
  
    }; 

                   // Получение Souzka.json в виде оюъекта
function opulate() {
var equestURL ="https://constantincobel.github.io/Souzka//Souzka.json";
var request = new XMLHttpRequest();
  request.open("GET", equestURL);
  request.responseType = "json";
  request.send();
  request.onload = function () {
    var superHeroes = request.response;
	var text1 = superHeroes["squadName"];
    document.getElementById("Pan0").style.display = "none";
	alert("Итог: " + superHeroes);
  };

};

function mouseoverPass() {
  let obj = document.getElementById('MyAccaunt');
  obj.type = 'text';
}
function mouseoutPass() {
  let obj = document.getElementById('MyAccaunt');
  obj.type = 'password';
}