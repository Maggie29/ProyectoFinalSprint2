function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

var mostarOcultar = function mostarOcultar() {
	var text2 = document.getElementById(text2);
	if (text2.style.display == "block" ) {
		text2.style.display = "none";
	} else{
		text2.style.display = "block";
	}
}
