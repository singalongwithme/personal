(function () {
	'use strict';

	angular
		.module('chrissing', [
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
					},
					'about': {
						templateUrl: 'app/views/about.html',
						controller: 'AboutController',
						controllerAs: 'vm'
					},
					'projects': {
						templateUrl: 'app/views/projects.html',
						controller: 'ProjectsController',
						controllerAs: 'vm'
					}
				}
			})
	}
})();