let countEl = document.getElementById('counter-el');
let saveEl = document.getElementById('save-el');

let count = 0;
console.log(count);

function increment() {
	count += 1;
	console.log(count);

	countEl.textContent = count;
	console.log(countEl);
}

function save() {
	let countStr = count + " - ";
	saveEl.textContent += countStr;

	console.log(countStr);

	countEl.textContent = 0;
	count = 0;
}

