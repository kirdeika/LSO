function goOutside(element) {
	if(element.id === "cepkeliuBtn") {
		window.open("https://lt.wikipedia.org/wiki/%C4%8Cepkeliai", "_blank");
	} else if(element.id === "kamanuBtn") {
		window.open("https://lt.wikipedia.org/wiki/Kaman%C5%B3_rezervatas", "_blank");
	} else if(element.id === "kernavesBtn") {
		window.open("https://lt.wikipedia.org/wiki/Valstybinis_Kernav%C4%97s_kult%C5%ABrinis_rezervatas", "_blank");
	} else if(element.id === "viesvilesBtn") {
		window.open("https://lt.wikipedia.org/wiki/Vie%C5%A1vil%C4%97s_rezervatas", "_blank");
	} else if(element.id === "vilniausPilysBtn") {
		window.open("https://lt.wikipedia.org/wiki/Vilniaus_pili%C5%B3_rezervatas", "_blank");
	} else if(element.id === "zuvintoBtn") {
		window.open("https://lt.wikipedia.org/wiki/%C5%BDuvinto_biosferos_rezervatas", "_blank");
	}
}

function testFunction(element) {
	if(element.id === "vertaBtn") {
		hideStarting();
		hideIstorija();
		hideSarasas();
		showVerta();
	} else if(element.id ==="istorijaBtn") {
		hideStarting();
		hideVerta();
		hideSarasas();
		showIstorija();
	} else if(element.id === "sarasasBtn") {
		hideStarting();
		hideVerta();
		hideIstorija();
		showSarasas();
	}
	
}

function showStarting() {
	var x = document.getElementsByClassName("starting-page")[0];
	x.classList.add("show-page");
	x.classList.remove("hide-page");
}

function hideStarting() {
	var x = document.getElementsByClassName("starting-page")[0];
	x.classList.add("hide-page");
	x.classList.remove("show-page");
}

function showVerta() {
	var x = document.getElementsByClassName("verta-page")[0];
	x.classList.add("show-page");
	x.classList.remove("hide-page");
}

function hideVerta() {
	var x = document.getElementsByClassName("verta-page")[0];
	x.classList.add("hide-page");
	x.classList.remove("show-page");
}

function showIstorija() {
	var x = document.getElementsByClassName("istorija-page")[0];
	x.classList.add("show-page");
	x.classList.remove("hide-page");
}

function hideIstorija() {
	var x = document.getElementsByClassName("istorija-page")[0];
	x.classList.add("hide-page");
	x.classList.remove("show-page");
}

function showSarasas() {
	var x = document.getElementsByClassName("sarasas-page")[0];
	x.classList.add("show-page");
	x.classList.remove("hide-page");
}

function hideSarasas() {
	var x = document.getElementsByClassName("sarasas-page")[0];
	x.classList.add("hide-page");
	x.classList.remove("show-page");
}

function scrollToTop() {
	var scrolledAmount = document.documentElement.scrollTop;
	for(i = 0; i < scrolledAmount; i++) {
		setTimeout(function(){
			document.documentElement.scrollTop = document.documentElement.scrollTop - 1;
			console.log("boop");
		}, i / 5);
	}
}

var backButton = document.getElementsByClassName("go-back");
for(i = 0; i < backButton.length; i++) {
	backButton[i].style.cursor = "pointer";
	backButton[i].onclick = function() {
		scrollToTop();
		setTimeout(function() {
			hideIstorija();
			hideVerta();
			hideSarasas();
			showStarting();
		}, 300);
		
	}
}