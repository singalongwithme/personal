(function () {
	'use strict';

	angular
		.module('chrissing', [
			'ngMaterial',
			'ui.router'
		])

		.config(config);

	config.$inject = ['$urlRouterProvider', '$stateProvider'];

	function config ($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('/', {
				url: '/',
				controller: 'MainController',
				controllerAs: 'vm',
				views: {
					'banner': {
						templateUrl: 'app/views/banner.html',
						controller: 'BannerController',
						controllerAs: 'vm'
					}
				}
			})
	}
})();