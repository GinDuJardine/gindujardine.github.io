//Conversation
console.log("Que faites-vous dans mon code ?");
setTimeout(() => {console.log("Vous êtes perdu ?");}, 5000);//5 sec
setTimeout(() => {console.log("Ce nain là, Gin du Jardine est une plaie, non ?");}, 10000);//+5sec
setTimeout(() => {console.log("Et son instagram est immonde !");}, 15000);//+5sec...
setTimeout(() => {console.log("Je n'aime pas les nains de jardin");}, 20000);
setTimeout(() => {console.log("Sinon, ça va vous ?");}, 25000);
setTimeout(() => {console.log("Moi, je m'ennuie");}, 30000);
setTimeout(() => {console.log("Mais vous êtes là, donc ça va mieux");}, 35000);

//Enter for input
document.getElementById("code").addEventListener("keypress", function(event) {
  //event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("codeButton").click();
  }
});

//indice for if else
let indice = 0;

//page triangle
function triangleGo() {
	var inputVal = document.getElementById("code").value;
	
	if(inputVal === "Bleuet") {
		location.href='rond.html';
	} else if (indice >= 10) {
		alert("Code source");
	} else  {
		alert("Raté")
		indice++;
		console.log(indice);
	}
};

//page rond
function rondGo() {
	var inputVal = document.getElementById("code").value;
	
	if(inputVal === "Anémone") {
		location.href='carre.html';
	} else if (indice >= 10) {
		alert("Degré");
	} else  {
		alert("Raté")
		indice++;
		console.log(indice);
	}
};

//page carré
function carreGo() {
	var inputVal = document.getElementById("code").value;
	
	if(inputVal === "Lavande") {
		location.href='https://www.youtube.com/watch?v=ltSQ-czeDEE';
	} else if (indice >= 10) {
		alert("CTRL+A");
	} else  {
		alert("Raté")
		indice++;
		console.log(indice);
	}
};

//page octo
function octoGo() {
	var inputVal = document.getElementById("code").value;
	
	if(inputVal === "Echinacée") {
		location.href='https://www.youtube.com/watch?v=ltSQ-czeDEE';
	} else if (indice >= 10) {
		alert("CTRL+A");
	} else  {
		alert("Raté")
		indice++;
		console.log(indice);
	}
};
