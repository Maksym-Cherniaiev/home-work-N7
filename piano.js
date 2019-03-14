document.querySelector(".load-buttons__triger").addEventListener("click", createPiano);
let position = 0;

class Buttons {
	constructor() {
		this.buttonPianoStyle = "piano-button";
		this.buttonsContainer = document.querySelector(".piano");
		this.buttonNameArray = ["A", "S", "D", "F", "G", "H", "J", "K"];
		this.giveButtonName();
	}

	disableButton() {
		document.querySelector(".load-buttons__triger").disabled = true;
	}

	giveButtonName() {
		let timeDelay = 200;
		this.buttonNameArray.forEach(element => {
			setTimeout(() => this.createButton(element), timeDelay);
			position++;
			timeDelay = timeDelay + 200;
		});
		this.disableButton();
	}

	createButton(name) {
		const button = document.createElement("button");
		button.classList.add(this.buttonPianoStyle);
		button.textContent = name;
		this.buttonsContainer.appendChild(button);
		this.buttonStyleEmerge(button);
	}

	buttonStyleEmerge(elem) {
		elem.getBoundingClientRect();
    	elem.classList.add("piano-button--visible");
	}
}

function createPiano() {
	new Buttons();
}