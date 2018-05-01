'use strict';

  function setCookie(cname,cvalue,exdays) {
    var d = new Date();
	
   d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
	alert("test valeur = "+cname);
    document.cookie = cname+"=" + cvalue + ";" + expires;
	alert("creation cookie")
	alert(document.cookie)
	checkCookie();
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
	
}
function checkCookie() {
  var user=getCookie("Util");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
       alert("Erreur vous n'avez pas pu vous connecter")
       
    }
}

var Utilisateur = 
[
{
	"idUser" : 1,
	"pseudo" : "luke",
	"mail" : "luke@gmail.com",
	"motDePasse" : "luke123",
	"listeTDL" : [1,2]
},		
{
	"idUser" : 2,
	"pseudo" : "JUL",
	"mail" : "jul@gmail.com",
	"motDePasse" : "jul123",
	"listeTDL" : [2]
},		
{
	"idUser" : 3,
	"pseudo" : "youns",
	"mail" : "youns@gmail.com",
	"motDePasse" : "youns123",
	"listeTDL" : [3]
}
];
//devrait etre async :
function get_utilisateur()
{
	return Utilisateur;
	//ici une fonction du style :
	/*
	const myInit = {

            method: 'get',
            headers: {
                'Accept': 'application/json, text/plain, /',
                'Content-Type': 'application/json'
            },
            mode:"no-cors"

        }
	const url = "http://localhost:3001/Utilisateur";
	const response = await fetch(url, myInit);
	const data = await response.json();
	return data;
	*/
}

function test_connexion(mdp, user)
{
	const listUser = get_utilisateur();
	//ici on utiliserai une fonction async et on mettrai await devant getUtilisateur
	for(var i = 0 ; i < listUser.length ; i++)
	{
		
		if (mdp.value == listUser[i].motDePasse && user.value == listUser[i].pseudo)
		{
			
			
			return listUser[i].pseudo;
		}
	}
	return undefined
}
const boutton_connexion = document.getElementById("loginButton");

boutton_connexion.onclick = function connexion()
{
	const user = document.getElementById("input_user");
	
	const mdp = document.getElementById("input_mdp");
	
	if(user != '' && mdp != '')
	{
		const utilisateur = test_connexion(mdp, user);
		
		if (utilisateur != null)
		{
			
				const str = utilisateur + "";
				setCookie("Util", str, 30);
				checkCookie()
				document.location.href="index.html"
			
		}else alert("utilisateur non trouvé");
	}
}







