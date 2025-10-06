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

	stateAttributes = {
		ariaLabel: 'aria-label',
		ariaExpanded: 'aria-expanded',
		title: 'title',
	};

	stateTexts = {
		openMenu: 'Open menu',
		closeMenu: 'Close menu',
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

		const isActiveBurgerButton = this.burgerButtonElement.classList.contains(
			this.stateClasses.isActive
		);

		const textCloseMenu = this.stateTexts.closeMenu;
		const textOpenMenu = this.stateTexts.openMenu;

		this.burgerButtonElement.setAttribute(
			this.stateAttributes.title,
			isActiveBurgerButton ? textCloseMenu : textOpenMenu
		);
		this.burgerButtonElement.setAttribute(
			this.stateAttributes.ariaLabel,
			isActiveBurgerButton ? textCloseMenu : textOpenMenu
		);
		this.burgerButtonElement.setAttribute(
			this.stateAttributes.ariaExpanded,
			isActiveBurgerButton
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
