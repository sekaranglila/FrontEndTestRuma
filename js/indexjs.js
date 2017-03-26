// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "delete";
	span.appendChild(txt);
	myNodelist[i].appendChild(span);
}

// Click on a delete button to delete list item
var close = document.getElementsByClassName("delete");
var i;
for (i = 0; i < close.length; i++) {
	close[i].onclick = function() {
		var div = this.parentElement;
		div.style.display = "none";
	}
}

// Done Task
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
	if (ev.target.tagName === 'LI') {
		ev.target.classList.toggle('checked');
	}
}, false);

// Create a new list item when clicking on the "Add" button
function addTask() {
	//Kamus Lokal
	var li = document.createElement("li");
	var title = document.getElementById("task-title").value;
	var date = document.getElementById("task-date").value;
	var desc = document.getElementById("task-desc").value;
	var priority = document.getElementById("priority").value;
	
	//create text node
	var t = document.createTextNode(title);
	var td = document.createTextNode(date);
	var d = document.createTextNode(desc);
	var p = document.createTextNode(priority);
	var br = document.createElement("br");

	li.appendChild(t);
	if (title === '') {
		alert("You must write the task title!");
	} else {
		document.getElementById("task").appendChild(li);
	}
	document.getElementById("task-title").value = "";

	li.appendChild(td);
	if (date === '') {
		alert("You must write the date of task!");
	} else {
		document.getElementById("task").appendChild(li);
	}
	document.getElementById("task-date").value = "";

	li.appendChild(d);
	if (desc === '') {
		alert("You must write task description!");
	} else {
		document.getElementById("task").appendChild(li);
	}
	document.getElementById("task-desc").value = "";

	li.appendChild(p);
	if (priority === '') {
		alert("You must write the task priority!");
	} else {
		document.getElementById("task").appendChild(li);
	}
	document.getElementById("priority").value = "";

	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "delete";
	span.appendChild(txt);
	li.appendChild(span);

	for (i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			var div = this.parentElement;
			div.style.display = "none";
		}
	}
}