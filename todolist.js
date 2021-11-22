let input= document.querySelector("#input");
let add = document.querySelector(".add");
let deleteItem = document.querySelectorAll(".delItem");

add.addEventListener("click", addItem);

function addItem() {
let table = document.querySelector("table");
let tr = document.createElement("tr");
var removeButton = document.createElement("button");
removeButton.classList.add("delItem");
removeButton.textContent = "Remove";
removeButton.addEventListener("click", removeItem);
	var td1 = tr.appendChild(document.createElement("td"));
	let td2 = tr.appendChild(document.createElement("td"));
	let td3 = tr.appendChild(document.createElement("td"));
	
var check = document.createElement("input");
check.type="checkbox";

td1.appendChild(check);
td1.classList.add("check");
td2.innerHTML = input.value;

td3.appendChild(removeButton);
	tr.classList.add("listTr");
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
table.appendChild(tr);

td1.addEventListener("click", crossOut);
input.value="";
}


function removeItem() {

event.target.parentNode.parentNode.remove();

}

function crossOut() {

event.target.parentNode.nextElementSibling.classList.toggle("crossout");
//event.target.parentNode.nextElementSibling.style.textDecoration = "line-through";

	
}

/*function check() {
	//let checked = 


}

check()
*/
