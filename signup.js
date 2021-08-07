/****** WARRIOR"S JavaScript ******/

/* For menu */
function sideBar(){
	var button = document.querySelector("#menu_but")
	var menu = document.querySelector("#menu")
	
	menu.style.maxWidth= "80%"
	
	var menu_button = document.querySelector("#menu_but")
	menu_button.style.visibility="hidden"
	/* For disabling outside */
	var inputs= document.querySelectorAll(".signup")
	for(let x=0;x <inputs.length;x++){
	inputs[x].disabled = true
	}
}	
function cancel(){
	var menu = document.querySelector("#menu")
	
	menu.style.maxWidth = "0px"
	
	var menu_button = document.querySelector("#menu_but")
	menu_button.style.visibility="visible"

	/* For cancelling outside disabled */
	var inputs = document.querySelectorAll("input")
	for(let x=0;x <inputs.length;x++){
	inputs[x].disabled = false
	}
	
}

/* For seeing span */
function see_span(){
	var pass = document.querySelector("#password")
	var see_pass = document.querySelector("#see_p")
	/* For span itself */
	if(pass.value!="" ){
	see_pass.style.visibility= "visible"
	}else{
	see_pass.style.visibility= "hidden"
	}
	
}