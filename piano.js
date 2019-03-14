document.querySelector(".load-buttons__triger").addEventListener("click", createPiano);
let position = 0;


class ButtonsStyle {
	constructor() {
		this.buttonPianoStyle = "piano-button";
		this.buttonsContainer = document.querySelector(".piano");
		this.widthModifier = "piano__line-horizontal--strech";
		this.heightModifier = "piano__line-to-bottom--strech";
		this.buttonNameArray = ["A", "S", "D", "F", "G", "H", "J", "K"];
	}

	disableButton() {
		document.querySelector(".load-buttons__triger").disabled = true;
	}

	showButtonName() {
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

class BindAudio extends ButtonsStyle {
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

async function createPiano() {
	const showButton = new ButtonsStyle();
	const lineStyle = showButton.strechLine();
	const createButton = showButton.showButtonName();
	new BindAudio();
}