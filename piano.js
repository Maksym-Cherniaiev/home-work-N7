class Buttons {
	constructor() {
		this.buttonPianoStyle = "piano-button";
		this.buttonsContainer = document.querySelector(".piano");
		this.widthModifier = "piano__line-horizontal--strech";
		this.buttonNameArray = ["A", "S", "D", "F", "G", "H", "J", "K"];
	}

	disableButton() {
		document.querySelector(".load-buttons__triger").disabled = true;
	}

	showButtonName() {
		let position = 0;
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
		this.lines = document.getElementsByClassName("piano__line-horizontal");
		this.lines[0].classList.add(this.widthModifier);
		this.lines[1].classList.add(this.widthModifier);
	}

	createButton(name) {
		const button = document.createElement("button");
		button.classList.add(this.buttonPianoStyle);
		button.id = name;
		button.textContent = name;
		this.buttonsContainer.appendChild(button);
		this.buttonStyleEmerge(button);
	}

	buttonStyleEmerge(elem) {
		elem.getBoundingClientRect();
    	elem.classList.add("piano-button--visible");
	}
}

class CallFromClick extends Buttons {
	constructor() {
		super();
		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.clickedButton = this.buttonsContainer.addEventListener("click", this.handleButtonClick);
	}

	handleButtonClick(event) {
		const target = this.getEventButton(event);
		if (target.classList.contains(this.buttonPianoStyle)) {
			let audio = new Audio(`audio-files/${target.id}.mp3`);
			audio.play();
		}
	}

	getEventButton(e) {
  		e = e || window.event;
  		return e.target || e.srcElement;
	}
}

class CallFromKeyboard extends Buttons {
	constructor() {
		super();
		this.handleKeyButton = this.handleKeyButton.bind(this);
		this.pressedButton = document.addEventListener("keydown", this.handleKeyButton);
	}

	handleKeyButton(event) {
		const char = String.fromCharCode(event.keyCode);
		const keyboardButton = document.getElementById(`${char}`);
		if (event.repeat) {return};
		keyboardButton.classList.add("piano-button--active");
		let audio = new Audio(`audio-files/${char}.mp3`);
		audio.play();
		this.pressedButton = document.addEventListener ("keyup", () => {
			keyboardButton.classList.remove("piano-button--active");
		});
	}
}

function createPiano() {
	const showButton = new Buttons();
	showButton.strechLine();
	showButton.showButtonName();
	new CallFromClick();
	new CallFromKeyboard();
}

document.querySelector(".load-buttons__triger").addEventListener("click", createPiano);
