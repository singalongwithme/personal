(function () {
	'use strict';

	angular
		.module('chrissing')
		.controller('ProjectsController', ProjectsController);

	function ProjectsController () {
		var vm = this;

		vm.projectsTag = 'Here are some projects I\'ve worked on: ';
	}
})();