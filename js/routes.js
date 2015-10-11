'use strict';

var myApp = angular.module('myApp', []);

myApp.config(function($routeProvider) {
    $routeProvider.when(
    	'/view1', 
    	{
    		templateUrl: 'partials/partial1.html', 
    		controller: 'MyCtrl1'
    	});
    $routeProvider.when(
    	'/devbuilds', 
    	{
    		templateUrl: 'partials/partial2.html', 
    		controller: 'MyCtrl2'
    	});
    $routeProvider.when(
    	'/devdeploys', 
    	{
    		templateUrl: 'partials/partial3.html', 
    		controller: 'MyCtrl2'
    	});
    $routeProvider.otherwise(
        {
            redirectTo: '/view1'
        });
});
