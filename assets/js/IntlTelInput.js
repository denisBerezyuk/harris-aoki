function initITL() {
	const phoneInputField = document.querySelector('#contact-us-tel');

	if (!phoneInputField) return;

	window.intlTelInput(phoneInputField, {
		initialCountry: 'auto',
		geoIpLookup: (success, failure) => {
			fetch('https://ipapi.co/json')
				.then(res => res.json())
				.then(data => success(data.country_code))
				.catch(() => failure());
		},
		separateDialCode: true,
		preferredCountries: ['ae', 'sa'],
		utilsScript:
			'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
	});
}

initITL();
