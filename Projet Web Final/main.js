"use strict";

//devrait se connecter a l'api pour poster une nouvelle tache dans la table tache

const postNewTask = async tache =>
{
	const myInit = {

            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, /',
                'Content-Type': 'application/json'
            },
            mode:"no-cors",
			body : {tache : tache}
        }
	const url = "http://localhost:3001/Tache";
	const response = await fetch(url, myInit);
	
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
let TDL = [
{
	"idTDListe" : 1,
	"nomTDL" : "test",
	"descriptionTDL" : "un test de json",
	"date_creation" : "2/03/2018",
	"listeTaches" : [2,2,2]
},
{
	"idTDListe" : 2,
	"nomTDL" : "test2",
	"descriptionTDL" : "un test de json 2",
	"date_creation" : "2/03/2018",
	"listeTaches" : [1,1,1]
},
{
	"idTDListe" : 3,
	"nomTDL" : "test3",
	"descriptionTDL" : "un test de json 3",
	"date_creation" : "2/03/2018",
	"listeTaches" : [3,3,3]
}
]

var tache = 
[
	{
	"idTache" : 10,
	"nomTache": "truc a faire 1",
	"descriptionTache" : "le premier truc a faire",
	"dateButoire" : "2018-10-10",
	"listeUser" : [1, 2]
},
{
	"idTache" : 20,
	"nomTache" : "truc a faire 2",
	"descriptionTache" : "le second truc a faire",
	"dateButoire" : "2001-08-10",
	"listeUser" : [1, 2]
},
{
	"idTache" : 30,
	"nomTache" : "truc a faire 3",
	"descriptionTache" : "le troisieme truc a faire",
	"dateButoire" : "2019-11-09",
	"listeUser" : [1, 2]
}
];

 function setCookie(cname,cvalue,exdays) {
    var d = new Date();
	
   d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
	alert("test valeur = "+cname);
    document.cookie = cname+"=" + cvalue + ";" + expires;
	alert("creation cookie")
	alert(document.cookie)
	
}
const getListeTache = async id =>
{
	const myInit = {

            method: 'get',
            headers: {
                'Accept': 'application/json, text/plain, /',
                'Content-Type': 'application/json'
            },
            mode:"no-cors",
			
        }
	const url = "http://localhost:3001/Tache";
	const response = await fetch(url, myInit);
	const data = response.json();
	return data.list;
}
function lireJson(tasks)
{
	
	const user = getCookie("Util");
	if (user != ""){
		const boutonCoDeco = document.getElementById("coDeco")
		boutonCoDeco.innerHTML = "Deconnexion"
		boutonCoDeco.onclick = function()
		{
			document.cookie = "Util=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
		}
		//ici on utiliserai plutot getListeTache en async pour obtenir la liste des tache correspondant
		for(let i = 0 ; i < tasks.length ; i++)
		{
			var tache = document.createElement('li');
			const span = document.createElement("SPAN");
			var inputDate = document.createElement('input');
			
			var nom_tache = tasks[i].nomTache;
			var txtNom = document.createTextNode(nom_tache);
			tache.appendChild(txtNom);
			
			span.className = "close";
			
			inputDate.type = 'date';
			
			inputDate.value = tasks[i].dateButoire;
			span.appendChild(inputDate);
			 tache.appendChild(span);
			
			
			
			document.getElementById("monUL").appendChild(tache);
		}
	}else{
		
	}
}
lireJson(tache)


// Créer un bouton et l'ajouter à chaque élément de la liste
const monListe = document.getElementsByTagName("LI");

for (let i = 0; i < monListe.length; i++) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  monListe[i].appendChild(span);
}

//Cliquez sur un bouton de fermeture pour masquer l'élément de la liste en cours
const close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    const div = this.parentElement;
    div.style.display = "none";
  }
}

// Ajouter un symbole "coché" en cliquant sur un élément de la liste
const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


// Créer un nouvel élément de liste en cliquant sur le bouton "Entre"
function newElement() {
  const li = document.createElement("li");
  const valInput = document.getElementById("monInput").value;
  const tit = document.createTextNode(valInput);
  var inputDate = document.createElement('input');
  inputDate.type = 'date';
  /*
  //si on envoyait la requete post a l'api :
  const tache = 
  {
	  nomTache : valInput,
  }
  await postNewTask(tache);
  */
  if ( valInput=== '') {
    alert("Vous devez écrire quelque chose!");
  } else {
    document.getElementById("monUL").appendChild(li);
  }
  document.getElementById("monInput").value = "";

  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(inputDate)
  span.appendChild(txt);
  li.appendChild(span);
  li.appendChild(tit);

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      const div = this.parentElement;
      div.style.display = "none";
    }
  }
}

const user=getCookie("Util");
const bouttonCoDeco = document.getElementById("coDeco")
if(user != "")
{
	bouttonCoDeco.onclick = function deco()
	{
		setCookie("Util", "", 0)
		window.location.href = "index.html"
	}
	bouttonCoDeco.innerHTML = "user : "+user+"Deconnexion";
	
	
}else{
	bouttonCoDeco.innerHTML = "Connexion";
	bouttonCoDeco.onclick = function co()
	{
		window.location.href = "notification.html"
		
	}
}
















