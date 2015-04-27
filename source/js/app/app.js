angular.module("myApp", ["ngRoute"])

	.factory("Data", Data)

	.controller("HomeController", ["$scope", "Data", HomeController])
	.controller("BulletinController", ["$scope", "$http", "Data", BulletinController])

	.directive("bbNavbar", ["Data", bbNavbar])

	.config(["$routeProvider", routeConfig]);
