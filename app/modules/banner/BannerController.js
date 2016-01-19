(function () {
	'use strict';

	angular
		.module('chrissing')

		.controller('BannerController', BannerController);

	function BannerController () {
		var vm = this;

		vm.greeting = 'This is the banner!';
	};
})();