	var species = {
	cat    : "cat.jpg",
	bear   : "bear.jpg",
	fish   : "fish.jpg"
};


function main(){
	/* 
	tout votre code doit se trouver dans cette fonction,
	vous pouvez biensur créer d'autres fonctions si nécessaire
	*/
	$("button").click(function(){
		//console.log($(this).data("animal"));
		var tamer = species[$(this).data("animal")];
		$('#holder').html("<img src='img/"+tamer+"' alt ='blalabalal'/>");
	});

	// 1. placez un listener sur le click des éléments <button>
	// 2. dans le callback récupérez le data attribute animal
	// 3. récupérerez dans l'objet species la valeur correspond à l'attribut récupéré
	// 4. ajoutez élément img en assignant à son attibut src la valeur précédemment récupérée
	// 5. inserez cet élément dans l'élément ayant l'id holder
	// 	
	// Conseils : avancez étape par étape, console.log et debugger autant que nécessaires !
	
	
	 
}

$(document).ready(function(){
	main();
});