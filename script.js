
function attire(shirt,temp){
	
	var temp = document.getElementById("temp");


//check values of variables

//check radio button casual
	if(document.getElementById("casual").checked){
		var shirt = document.getElementById("casual").value;
		if(temp.value < 54){
			// place comment in textarea
			document.getElementById("output").value = "The event is " + shirt + " so wear something comfy and it is " + temp.value + " degrees, wear a coat";
		}
		else if(temp.value <= 70){
			document.getElementById("output").value = "The event is " + shirt + " so wear something comfy and it is " + temp.value + " degrees, wear a jacket";
		}
		else{
			document.getElementById("output").value = "The event is " + shirt + " so wear something comfy and it is " + temp.value + " degrees, no need for a jacket";
		}
	}
	//check radio button semi-formal
	else if(document.getElementById("semi").checked){
		var shirt = document.getElementById("semi").value;
		if(temp.value < 54){
			document.getElementById("output").value = "The event is " + shirt + " so wear something nice and it is " + temp.value + " degrees, wear a coat";
		}
		else if(temp.value <= 70){
			document.getElementById("output").value = "The event is " + shirt + " so wear something nice and it is " + temp.value + " degrees, wear a jacket";
		}
		else{
			document.getElementById("output").value = "The event is " + shirt + " so wear something nice and it is " + temp.value + " degrees, no need for a jacket";
		}
	}
	//check radio button formal
	else if(document.getElementById("formal").checked){
		var shirt = document.getElementById("formal").value;
		if(temp.value < 54){
			document.getElementById("output").value = "The event is " + shirt + " so wear something professional and it is " + temp.value + " degrees, wear a coat";
		}
		else if(temp.value <= 70){
			document.getElementById("output").value = "The event is " + shirt + " so wear something professional and it is " + temp.value + " degrees, wear a jacket";
		}
		else {
			document.getElementById("output").value = "The event is " + shirt + " so wear something professional and it is " + temp.value + " degrees, no need for a jacket";
		}
	}
	else{
			document.getElementById("output").value="The event is " + shirt + " is not a valid input";
			attire();
		}
}

