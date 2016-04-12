(function () {
	'use strict';

	angular
		.module('chrissing')
		.directive('projectItem', projectItem);

	function projectItem () {
		var directive = {
			link: link,
			templateUrl: 'app/views/project-item.directive.html',
			restrict: 'EA',
			scope: {
				title: '@',
				img: '@',
				url: '@'
			},
			controller: ProjectItemController,
			controllerAs: 'vm',
			bindToController: true
		}

		return directive;

		function link (scope, elm, attrs) {
			function onClick () {
				window.open(attrs.url);
			}

			elm.on('click', onClick);
		};

		function ProjectItemController () {
			var vm = this;
		};
	};

})();