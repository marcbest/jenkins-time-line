'use strict';

myApp.controller("MyCtrl1" ,function ($scope, UtilSrvc) {
    $scope.aVariable = 'anExampleValueWithinScope';
    $scope.valueFromService = UtilSrvc.helloWorld("Amy");
});

myApp.controller("MyCtrl2" ,function ($scope) {
	$scope.builds = [
		{ buildNum: '100', buildName: 'dev-build', status: 'failure', buildDate: '10-10-2015 11:45'},
		{ buildNum: '99', buildName: 'dev-build', status: 'success', buildDate: '10-10-2015 11:45'},
		{ buildNum: '98', buildName: 'dev-build', status: 'success', buildDate: '10-10-2015 11:45'},
		{ buildNum: '97', buildName: 'dev-build', status: 'unstable', buildDate: '10-10-2015 11:45'},
		{ buildNum: '96', buildName: 'dev-build', status: 'unstable', buildDate: '10-10-2015 11:45'},
		{ buildNum: '96', buildName: 'dev-build', status: 'unstable', buildDate: '10-10-2015 11:45'},
		{ buildNum: '95', buildName: 'dev-build', status: 'failure', buildDate: '10-10-2015 11:45'},
		{ buildNum: '94', buildName: 'dev-build', status: 'success', buildDate: '10-10-2015 11:45'},
		{ buildNum: '93', buildName: 'dev-build', status: 'success', buildDate: '10-10-2015 11:45'},
		{ buildNum: '92', buildName: 'dev-build', status: 'failure', buildDate: '10-10-2015 11:45'},
		{ buildNum: '91', buildName: 'dev-build', status: 'success', buildDate: '10-10-2015 11:45'},
		{ buildNum: '90', buildName: 'dev-build', status: 'unstable', buildDate: '10-10-2015 11:45'},
		{ buildNum: '89', buildName: 'dev-build', status: 'success', buildDate: '10-10-2015 11:45'},
		{ buildNum: '88', buildName: 'dev-build', status: 'unstable', buildDate: '10-10-2015 11:45'},
		{ buildNum: '87', buildName: 'dev-build', status: 'failure', buildDate: '10-10-2015 11:45'},
		{ buildNum: '86', buildName: 'dev-build', status: 'success', buildDate: '10-10-2015 11:45'},
	];

});

// you may add more controllers below