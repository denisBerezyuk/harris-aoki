const rootSelector = '[data-js-running-line]';

class RunningLine {
	selectors = {
		root: rootSelector,
		list: '[data-js-running-line-list]',
	};

	constructor(element) {
		this.rootElement = element;
		this.listElements = this.rootElement.querySelectorAll(this.selectors.list);

		this.cloning();
	}

	cloning() {
		if (!this.listElements.length) return;

		let index = 0;
		let scrollWidth = this.rootElement.scrollWidth;
		const offsetWidth = this.rootElement.offsetWidth;

		while (true) {
			if (index == 1 && scrollWidth > offsetWidth * 2) break;

			this.rootElement.innerHTML += this.rootElement.innerHTML;
			scrollWidth = this.rootElement.scrollWidth;

			index++;
		}

		this.rootElement
			.querySelectorAll(this.selectors.list)
			.forEach((listElement, index) => {
				if (index < 1) return;

				listElement.setAttribute('aria-hidden', 'true');
			});
	}
}

class RunningLineCollection {
	constructor() {
		this.init();
	}

	init() {
		const rootElements = document.querySelectorAll(rootSelector);

		if (!rootElements.length) return;

		rootElements.forEach(rootElement => {
			new RunningLine(rootElement);
		});
	}
}

export default RunningLineCollection;
