let pokeButton = document.querySelector('.about-pokemon-button');
pokeButton.onclick = function() {
	var info = document.getElementById('tab-content');
	if (info.classList.contains('info-about-div')){
		info.classList.remove('info-about-div');
		let p_remove = document.querySelector('.info-about');
		info.removeChild(p_remove);
	}
	
	var infoCon = document.getElementById('tab-content');
	var tabCon = document.querySelector('.tabs-content__item')
	tabCon.classList.add('active');
	
	
	if (!(infoCon.classList.contains('info-about-div-pok'))){
		var p_about = document.createElement('p');
		p_about.classList.add('info-about-pokemon');
		infoCon.classList.add('info-about-div-pok');


function fetchKantoPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=7')
    .then(response => response.json())
    .then(function(allpokemon){
        allpokemon.results.forEach(function(pokemon){
            fetchPokemonData(pokemon);
        })
    })
}

function fetchPokemonData(pokemon){
    let url = pokemon.url // <--- this is saving the pokemon url to a variable to use in the fetch. 
                                //Example: https://pokeapi.co/api/v2/pokemon/1/"
    fetch(url)
    .then(response => response.json())
    .then(function(pokeData){
        renderPokemon(pokeData)
    })
	
}


function renderPokemon(pokeData){
    let allPokemonContainer = document.getElementById('poke-container');
    let pokeContainer = document.createElement("div") //div will be used to hold the data/details for indiviual pokemon.{}
    pokeContainer.classList.add('ui', 'card');

    /*createPokeImage(pokeData.id, pokeContainer);*/

    let pokeName = document.createElement('h3') 
    pokeName.innerText = pokeData.name

    let pokeNumber = document.createElement('p')
    pokeNumber.innerText = `#${pokeData.id}`
   
    let pokeTypes = document.createElement('ul') //ul list will hold the pokemon types
	

    createTypes(pokeData.abilities, pokeTypes) // helper function to go through the types array and create li tags for each one

    pokeContainer.append(pokeName, pokeNumber, pokeTypes);   //appending all details to the pokeContainer div
    allPokemonContainer.appendChild(pokeContainer);       //appending that pokeContainer div to the main div which will                                                             hold all the pokemon cards
}

function createTypes(types, ul){
    types.forEach(function(type){
        let typeLi = document.createElement('li');
        typeLi.innerText = type['ability']['name'];
		
		let typeDescription = document.createElement('p');
		typeDescription.innerText = type['ability']['url'];
		
		let abilDescr = document.createElement('p');
		
		fetch(typeDescription.innerText)
		.then(response => response.json())
		.then(function(pokeAbil){
			pokeAbili = pokeAbil.effect_entries[0];
			abilDescr.innerText = pokeAbili['effect'];
		})
		
		

		
        ul.append(typeLi)
		ul.append(abilDescr)
	})
}



/*
function createPokeImage(pokeID, containerDiv){
    let pokeImgContainer = document.createElement('div')
    pokeImgContainer.classList.add('image')

    let pokeImage = document.createElement('img')
    pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`

    pokeImgContainer.append(pokeImage);
    containerDiv.append(pokeImgContainer);
}*/

fetchKantoPokemon();
	}

	
};
