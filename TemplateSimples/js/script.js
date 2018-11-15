function mudarEstado(el){
	var disp= getElementById(el);
	if (disp.style.display=="none") {
		disp.style.display="block";

	}else{
		document.getElementById(el).style.display="none";
	}
}


	