Projet web Yones Rasuly Lucas Oubib Jules Colomer Daniel Younes

	
Coté front : 
	Lancer "index.html" sur un navigateur autre que google chrome
	(n'ayant pas reussi a connecter le front au back nous créons les cookie en local et j'ai cru comprendre que c'etait impossible sur chrome
	On peut se connecter en cliquant sur connexion
	on entre un pseudo (ici pour l'exemple en local "luke")
	et un mot de pass (ici "luke123")
	on est connecté et les tache a faire de l'utilisateur sont affichées

Coté Back :
	Lancer api.js sur node 
	on peut tester les get en mettant :
	"localhost:3001/Utilisateur" sur un navigateur
	on voit que cela nous retourne une liste json des Utilisateurs venant du serveur elephantSQL

Negatif :
		pas de connexion back-front
		nous avons rencontrer enormement de probleme au cour du developement de l'api et nous avons du faire table rase plusieur fois 
		Finalement c'est du coté front que nous n'arrivons pas se connecter a notre api en local
		Dans le dossier test/
		vous trouverez un fichier app.js avec des test sur les requetes fetch qui n'arrive pas a recuperer d'info
		nous avions essayé avec xmlHttpRequest mais sans résultats
