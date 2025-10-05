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
		const { root, burgerButton, menu, link } = this.selectors;

		this.rootElement = document.querySelector(root);

		if (!this.rootElement) return;

		this.burgerButtonElement = this.rootElement.querySelector(burgerButton);
		this.menuElement = this.rootElement.querySelector(menu);
		this.linkElement = this.menuElement.querySelectorAll(link);

		this.bindEvents();
	}

	onBurgerButtonClick = () => {
		this.toggle();
	};

	toggle(isClose) {
		const isCloseVisible = isClose !== undefined ? false : undefined;

		this.burgerButtonElement.classList.toggle(
			this.stateClasses.isActive,
			isCloseVisible
		);
		this.menuElement.classList.toggle(
			this.stateClasses.isActive,
			isCloseVisible
		);

		document.documentElement.classList.toggle(
			this.stateClasses.isLock,
			isCloseVisible
		);
	}

	onMenuClick = event => {
		if (!event.target.closest(this.selectors.link)) return;

		this.toggle(true);
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
