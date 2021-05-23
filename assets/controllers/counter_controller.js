import { Controller } from "stimulus";

export default class extends Controller {
	count = 0;
	static targets = ["count"];

	increment() {
		this.count++;
		this.countTarget.innerHTML = this.count;
	}
}

// Stimulus has a convention for how to work with targets. First, you have to register the target name inside the static property targets. Then, you can access any of the registered targets by their name plus the word Target (to get with the first target found) or Targets (to get an array of all the matching targets).
