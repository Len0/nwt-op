App.config(function($translateProvider) {
	// Our translations will go in here
	$translateProvider.translations('en', {
		LOGIN : 'Login',
		REGISTER : 'Register',
		FORGOT : 'Forgot password?',
		LOGOUT : 'Log out',
		SEARCH : 'Search',
		CLIENT : 'Client',
		MARKETER : 'Marketer',
		AUTHFAIL : 'Authentication failed!',
		USERNAME : 'Username',
		PASSWORD : 'Password'
	}).translations('ba', {
		LOGIN : 'Prijava',
		REGISTER : 'Registracija',
		FORGOT : 'Zaboravio šifru?',
		LOGOUT : 'Odjava',
		SEARCH : 'Pretraga',
		CLIENT : 'Klijent',
		MARKETER : 'Oglašivač',
		AUTHFAIL : 'Pogrešni pristupni podaci!',
		USERNAME : 'Korisničko ime',
		PASSWORD : 'Šifra'
	});
	$translateProvider.preferredLanguage('en');
});
