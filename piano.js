document.querySelector(".load-buttons__triger").addEventListener("click", createPiano);
let position = 0;


class ButtonsStyle {
	constructor() {
		this.buttonPianoStyle = "piano-button";
		this.buttonsContainer = document.querySelector(".piano");
		this.widthModifier = "pino__line--strech";
		this.buttonNameArray = ["A", "S", "D", "F", "G", "H", "J", "K"];
	}

	disableButton() {
		document.querySelector(".load-buttons__triger").disabled = true;
	}

	giveButtonName() {
		let timeDelay = 200;
		this.buttonNameArray.forEach(element => {
			const showButton = setTimeout(() => {
				this.createButton(element);
				clearInterval(showButton);
			}, timeDelay);
			position++;
			timeDelay = timeDelay + 200;
		});
		this.disableButton();
	}

	strechLine() {
		this.lines = [];
		this.lines = document.getElementsByClassName("piano__line");
		this.lines[0].classList.add(`${this.widthModifier}`);
		this.lines[1].classList.add(`${this.widthModifier}`);
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

async function createPiano() {
	const showButton = new ButtonsStyle();
	const lineStyle = showButton.strechLine();
	const createButton = showButton.giveButtonName();
}