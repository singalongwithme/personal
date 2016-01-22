(function () {
	'use strict';

	angular
		.module('chrissing')
		.controller('AboutController', AboutController);

	function AboutController () {
		var vm = this;

		vm.bio = 'Hello! My name is Christopher Singhavong and I\'m a ' +
		'software engineer with a passion for the front end. ' +
		'I\'m fluent in JavaScript and like to stay up to date with the ' +
		'latest front end technologies. I\'ve contributed to open source ' +
		'projects such as Angular\'s Material Design. Previously a Frontend ' +
		'Developer at Ludomade, I\'m currently seeking a new opportunity in ' +
		'and around the Southern California area. Feel free to contact me, ' +
		'let\'s geek out!';
	}
})();