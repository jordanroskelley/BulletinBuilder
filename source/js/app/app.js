/// <reference path="../../../typings/angularjs/angular.d.ts"/>
/// <reference path="controllers/HomeController.js"/>
/// <reference path="controllers/BulletinController.js"/>
/// <reference path="directives/BBNavbar.js"/>
/// <reference path="configs/RouteConfig.js"/>
angular.module("myApp", ["ngRoute", "ui.bootstrap"])

	.factory("Data", Data)

	.controller("HomeController", ["$scope", "$location", "Data", HomeController])
	.controller("BulletinController", ["$scope", "$routeParams", "$http", "Data", BulletinController])

	.directive("bbNavbar", ["Data", bbNavbar])

	.config(["$routeProvider", routeConfig]);
