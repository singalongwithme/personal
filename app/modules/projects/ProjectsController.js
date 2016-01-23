(function () {
	'use strict';

	angular
		.module('chrissing')
		.controller('ProjectsController', ProjectsController);

	function ProjectsController () {
		var vm = this;

		vm.projectsTag = 'Here are some projects I\'ve worked on: ';

		vm.projects = [
			{
				title: 'Kingsquest',
				img: 'app/assets/kq.jpeg',
				url: 'http://www.sierra.com/kingsquest'
			},
			{
				title: 'Peanuts The Movie',
				img: 'app/assets/peanuts.jpg',
				url: 'http://www.peanutsmovie.com'
			},
			{
				title: 'Concussion',
				img: 'app/assets/concussion.jpg',
				url: 'http://www.concussionmovie.net/site/'
			},
			{
				title: 'Transformers Devastation',
				img: 'app/assets/transformers.jpg',
				url: 'http://www.transformersgame.com'
			}
		]
	}
})();