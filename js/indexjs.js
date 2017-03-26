removepanel(){
	var elem = document.getElementById('task');
	elem.parentNode.removeChild(elem);
	return false;
}

function store(){
	var inputTitle= document.getElementById("task-title");
	var inputDate= document.getElementById("task-date");
	var inputDesc= document.getElementById("task-desc");
	var inputPri= document.getElementById("priority");

	localStorage.setItem("task-title", inputTitle.value);
	localStorage.setItem("task-date", inputDate.value);
	localStorage.setItem("task-desc", inputDesc.value);
	localStorage.setItem("priority", inputPri.value);
}