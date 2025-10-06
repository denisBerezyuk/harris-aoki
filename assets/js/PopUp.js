class PopUp {
	selectors = {
		popUp: '[data-js-pop-up]',
		closeButton: '[data-js-pop-up-close-button]',
		openButton: '[data-js-pop-up-open-button]',
	};

	stateClasses = {
		isLock: 'is-lock',
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

		document.documentElement.classList.add(this.stateClasses.isLock);
	};

	onCloseButtonClick = () => {
		this.popUpElement.close();

		document.documentElement.classList.remove(this.stateClasses.isLock);
	};

	bindEvents() {
		this.openButtonElements.forEach(buttonElement => {
			buttonElement.addEventListener('click', this.onOpenButtonClick);
		});

		this.closeButtonElement.addEventListener('click', this.onCloseButtonClick);
	}
}

export default PopUp;
