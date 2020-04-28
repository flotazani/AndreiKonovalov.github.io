let delButton = document.querySelector('.delete-all-button');
delButton.onclick = function() {
	var infoPok = document.getElementById('tab-content');
	var pokeCard = document.getElementById('poke-container');
	if (infoPok.classList.contains('info-about-div-pok')){
		infoPok.classList.remove('info-about-div-pok');
		pokeCard.innerHTML = '';
	}
	
	var infoMe = document.getElementById('tab-content');
	if (infoMe.classList.contains('info-about-div')){
		infoMe.classList.remove('info-about-div');
		let p_remove = document.querySelector('.info-about');
		infoMe.removeChild(p_remove);
	}
	
	var tabCon = document.querySelector('.tabs-content__item')
	tabCon.classList.remove('active');
	
}