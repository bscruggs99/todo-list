let input= document.querySelector("#input");
let add = document.querySelector(".add");

add.addEventListener("click", addItem);

/*function for adding items to the list*/
function addItem() {
let table = document.querySelector("table");
let tr = document.createElement("tr");
let removeButton = document.createElement("button");

removeButton.classList.add("delItem");
removeButton.textContent = "Remove";
removeButton.addEventListener("click", removeItem);

	let td1 = tr.appendChild(document.createElement("td"));
	let td2 = tr.appendChild(document.createElement("td"));
	let td3 = tr.appendChild(document.createElement("td"));
	
let check = document.createElement("input");
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

check.addEventListener("click", function() {
event.target.parentNode.nextElementSibling.classList.toggle("crossout");
});

input.value="";
}

/*function to remove single item*/
function removeItem() {

event.target.parentNode.parentNode.remove();

}

let reset = document.querySelector("#reset");
reset.addEventListener("click", resetList);

/*function to reset whole list*/
function resetList() {

	let listTr = document.getElementsByClassName("listTr");
	while(listTr[0]) {
listTr[0].parentNode.removeChild(listTr[0]);
	}

}