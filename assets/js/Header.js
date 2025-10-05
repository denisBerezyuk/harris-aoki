class Header {
	selectors = {
		root: '[data-js-header]',
		burgerButton: '[data-js-header-burger-button]',
		menu: '[data-js-header-menu]',
		link: '[data-js-header-link]',
	};

	stateClasses = {
		isActive: 'is-active',
		isLock: 'is-lock',
	};

	constructor() {
		this.rootElement = document.querySelector(this.selectors.root);
		this.burgerButtonElement = this.rootElement.querySelector(
			this.selectors.burgerButton
		);
		this.menuElement = this.rootElement.querySelector(this.selectors.menu);
		this.linkElement = this.menuElement.querySelectorAll(this.selectors.link);

		this.bindEvents();
	}

	onBurgerButtonClick = () => {
		this.toggle();
	};

	toggle() {
		this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
		this.menuElement.classList.toggle(this.stateClasses.isActive);

		document.documentElement.classList.toggle(this.stateClasses.isLock);
	}

	onMenuClick = event => {
		if (!event.target.closest(this.selectors.link)) return;

		this.toggle();
	};

	bindEvents() {
		this.burgerButtonElement.addEventListener(
			'click',
			this.onBurgerButtonClick
		);
		this.menuElement.addEventListener('click', this.onMenuClick);
	}
}

export default Header;
