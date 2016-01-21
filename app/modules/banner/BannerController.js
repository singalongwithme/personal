(function () {
	'use strict';

	angular
		.module('chrissing')

		.controller('BannerController', BannerController);

	function BannerController () {
		var vm = this;

		vm.icons = [
			{
				'class': 'github',
				'link': 'http://www.github.com/singalongwithme'
			},
			{
				'class': 'linkedin',
				'link': 'http://www.linkedin.com/in/csinghavong'
			},
			{
				'class': 'blog',
				'link': 'http://christophersing.azurewebsites.net'
			},
			{
				'class': 'email',
				'link': 'mailto:csinghavong@gmail.com'
			}
		]
	};
})();