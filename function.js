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

//page index
function indexGo() {
	var inputVal = document.getElementById("code").value;
	
	if(inputVal === "ponce") {
		location.href='enigme1.html';
	} else if (indice >= 5) {
		alert("Code source");
	} else  {
		alert("Raté")
		indice++;
		console.log(indice);
	}
};

//page 2
function page2Go() {
	var inputVal = document.getElementById("code").value;
	
	if(inputVal === "bleuet") {
		location.href='enigme2.html';
	} else if (indice >= 5) {
		alert("Raté");
	} else  {
		alert("Raté")
		indice++;
		console.log(indice);
	}
};

//page 3
function page3Go() {
	var inputVal = document.getElementById("code").value;
	
	if(inputVal === "anémones") {
		location.href='enigme3.html';
	} else if (indice >= 5) {
		alert("Raté");
	} else  {
		alert("Raté")
		indice++;
		console.log(indice);
	}
};


//page 4
function page4Go() {
	var inputVal = document.getElementById("code").value;
	
	if(inputVal === "lilas") {
		location.href='enigme4.html';
	} else if (indice >= 5) {
		alert("Raté");
	} else  {
		alert("Raté")
		indice++;
		console.log(indice);
	}
};

//page 5
function page5Go() {
	var inputVal = document.getElementById("code").value;
	
	if(inputVal === "échinacée") {
		location.href='vivelejardinnage.html';
	} else if (indice >= 5) {
		alert("Alors, c'est quoi cette fleur ?");
	} else  {
		alert("Raté")
		indice++;
		console.log(indice);
	}
};

