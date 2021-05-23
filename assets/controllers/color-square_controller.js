import { Controller } from "stimulus";

export default class extends Controller {
	static targets = ["colorSquare", "select"];
	static values = {
		colorId: Number,
	};
	connect() {
		this.selectTarget.classList.add("d-none");
	}

	selectColor(event) {
		const clickedColor = event.currentTarget.dataset.colorId;
		this.colorIdValue = clickedColor == this.colorIdValue ? null : clickedColor;
	}

	colorIdValueChanged() {
		// The "Value Change Callback" feature of the Stimulus values API implements a naming convention. The method's name must be equal to the name of the value property plus the word ValueChanged.
		this.selectTarget.value = this.colorIdValue;
		this.colorSquareTargets.forEach((element) => {
			if (element.dataset.colorId == this.colorIdValue) {
				element.classList.add("selected");
			} else {
				element.classList.remove("selected");
			}
		});
		// this.setSelectedColor(this.colorIdValue);
		//stimulus changed callback
	}

	// setSelectedColor(clickedColorId) {
	// 	if (clickedColorId === this.selectedColorId) {
	// 		this.findSelectedColorSquare().classList.remove("selected");
	// 		this.selectedColorId = null;
	// 		this.selectTarget.value = "";
	// 		return;
	// 	}
	// 	this.selectedColorId = clickedColorId;

	// 	console.log(this.colorSquareTargets);
	// 	this.colorSquareTargets.forEach((element) => {
	// 		element.classList.remove("selected");
	// 	});
	// 	this.findSelectedColorSquare().classList.add("selected");
	// 	this.selectTarget.value = this.selectedColorId;

	// 	console.log(this.findSelectedColorSquare().dataset.colorId);
	// }
	// /**
	//  *
	//  * @returns {Element|null}
	//  */

	// findSelectedColorSquare() {
	// 	return this.colorSquareTargets.find(
	// 		(element) => element.dataset.colorId == this.selectedColorId
	// 		// not a triple equals because of the typing of colorid value => this.setSelectedColor(this.colorIdValue) is a number when dataset is a string
	// 	);
	// }
}

// The event.currentTarget will always hold a reference to the element that we attached the event to. On the other hand, event.target will always reference the element that received the event. In this case, that would be the <i> element.
