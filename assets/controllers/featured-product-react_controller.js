import { Controller } from "stimulus";
import React from "react";
import FeaturedProduct from "../components/FeaturedProduct";

export default class extends Controller {
	static values = {
		product: Object,
	};
	async connect() {
		const { default: ReactDOM } = await import("react-dom");
		ReactDOM.render(
			<FeaturedProduct product={this.productValue} />,
			this.element
		);
	}
}
