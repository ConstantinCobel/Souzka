

                  //    Кнопка ВХОД
    document.querySelector('#Open').onclick = function () {
        var MyUnit = document.querySelector('#MyUnit').value;
        var MyAccaunt = document.querySelector('#MyAccaunt').value;
		//alert("Итог: " + MyUnit + " " + MyAccaunt);
		//document.getElementById("Souz").value=Souz;
		//document.getElementById("Nik").value="NO";
		//document.getElementById("Pan0").style.display = "none";
		opulate();
	
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