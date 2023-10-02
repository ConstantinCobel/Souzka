

                  //    Кнопка ВХОД
    document.querySelector('#Open').onclick = function () {
        var Souz = document.querySelector('#Souz').value;
        var Nik = document.querySelector('#Nik').value;
        var Cod = document.querySelector('#Cod').value;
		if (document.getElementById("Souz").value == "ДА") {
		  document.getElementById("Souz").value="НЕТ";
		} 
		else 
		{
		  document.getElementById("Souz").value="ДА";
		//document.getElementById("Pan0").style.display = "none";
		};	
		//document.getElementById("Souz").value=Souz;
		//document.getElementById("Cod").value="NO";
		opulate();
    }; 


function opulate() {
var equestURL ="https://constantincobel.github.io/Souzka//Souzka.json";
var request = new XMLHttpRequest();
request.open("GET", equestURL);
request.responseType = "json";
request.send();
request.onload = function () {
  var superHeroes = request.response;
document.getElementById("Cod").value=superHeroes["squadName"];
};

};