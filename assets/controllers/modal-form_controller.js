import { Controller } from "stimulus";
import { Modal } from "bootstrap";
import $ from "jquery";

export default class extends Controller {
	static targets = ["modal", "modalBody"];
	static values = {
		formUrl: String,
	};

	async openModal(event) {
		this.modalBodyTarget.innerHTML = "Loading...";
		console.log(this.formUrlValue);
		const modal = new Modal(this.modalTarget);
		modal.show();
		this.modalBodyTarget.innerHTML = await $.ajax(this.formUrlValue);
	}
	async submitForm(event) {
		event.preventDefault;
		const $form = $(this.modalBodyTarget).find("form");
		console.log($form.serialize());
		this.modalBodyTarget.innerHTML = await $.ajax({
			url: this.formUrlValue,
			method: $form.prop("method"),
			data: $form.serialize(),
		});
	}
}
