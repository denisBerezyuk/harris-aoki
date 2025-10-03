class PopUp {
	selectors = {
		popUp: '[data-js-pop-up]',
		closeButton: '[data-js-pop-up-close-button]',
		openButton: '[data-js-pop-up-open-button]',
	};

	constructor() {
		this.popUpElement = document.querySelector(this.selectors.popUp);
		this.closeButtonElement = this.popUpElement.querySelector(
			this.selectors.closeButton
		);
		this.openButtonElements = document.querySelectorAll(
			this.selectors.openButton
		);

		this.bindEvents();
	}

	onOpenButtonClick = () => {
		this.popUpElement.showModal();
	};

	onCloseButtonClick = () => {
		this.popUpElement.close();
	};

	bindEvents() {
		this.openButtonElements.forEach(buttonElement => {
			buttonElement.addEventListener('click', this.onOpenButtonClick);
		});

		this.closeButtonElement.addEventListener('click', this.onCloseButtonClick);
	}
}

export default PopUp;
