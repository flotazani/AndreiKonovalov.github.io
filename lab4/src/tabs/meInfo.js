function loadPage(){
	var info = document.getElementById('tab-content');
	var pokeCard = document.getElementById('poke-container');
	if (info.classList.contains('info-about-div-pok')){
		info.classList.remove('info-about-div-pok');
		pokeCard.innerHTML = '';
	}
	
	
	var infoCon = document.getElementById('tab-content');
	var tabCon = document.querySelector('.tabs-content__item')
	tabCon.classList.add('active');
	
	
	if (!(infoCon.classList.contains('info-about-div'))){
		var p_about = document.createElement('p');
		p_about.classList.add('info-about');
		infoCon.classList.add('info-about-div');
		p_about.textContent="Ивлева Юлия Ильдаровна, группа М3300";
		infoCon.appendChild(p_about);
	}
}



let meButton = document.querySelector('.about-me-button');
meButton.onclick = function() {
	var info = document.getElementById('tab-content');
	var pokeCard = document.getElementById('poke-container');
	if (info.classList.contains('info-about-div-pok')){
		info.classList.remove('info-about-div-pok');
		pokeCard.innerHTML = '';
	}
	
	
	var infoCon = document.getElementById('tab-content');
	var tabCon = document.querySelector('.tabs-content__item')
	tabCon.classList.add('active');
	
	
	if (!(infoCon.classList.contains('info-about-div'))){
		var p_about = document.createElement('p');
		p_about.classList.add('info-about');
		infoCon.classList.add('info-about-div');
		p_about.textContent="Ивлева Юлия Ильдаровна, группа М3300";
		infoCon.appendChild(p_about);
	}
	
};

