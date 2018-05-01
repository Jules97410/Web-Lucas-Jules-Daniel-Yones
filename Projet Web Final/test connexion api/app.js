const resultArea = document.getElementById("truc");
const form = document.getElementById("machin");
const getUtilisateur = async id => 
{
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
}
const createUtilisateurElement = item => 
{
	const element = document.createElement("div");
	element.className = "item";
	element.append(createTextNode(""));
	return element;
}
const showUtilisateur = (data, element)=>
{
	const elements = data.map(createUtilisateurElement);
	element.innerHTML = "";
	element.append(...elements);
};
const onSubmit = async event => 
{
	event.preventDefault();
	const id = 1;
	const data = await getUtilisateur(id);
	alert(data)
	showUtilisateur(data, resultArea);
}
const result = async event =>
{
	alert(await getUtilisateur(1));
}

resultArea.addEventListener("click", result)

	