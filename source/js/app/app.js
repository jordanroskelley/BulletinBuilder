/// <reference path="../../../typings/angularjs/angular.d.ts"/>
/// <reference path="services/Data.js"/>
/// <reference path="services/Lookup.js"/>
/// <reference path="controllers/HomeController.js"/>
/// <reference path="controllers/BulletinController.js"/>
/// <reference path="directives/BBNavbar.js"/>
/// <reference path="configs/RouteConfig.js"/>
angular.module("myApp", ["angular-sortable-view", "ngRoute", "ui.bootstrap"])

	.factory("Data", Data)
	.factory("Lookup", Lookup)

	.controller("HomeController", ["$scope", "$location", "Data", HomeController])
	.controller("BulletinController", ["$scope", "$routeParams", "$http", "Data", "Lookup", BulletinController])
	.controller("PreviewController", ["$scope", "$routeParams", "$http", "Data", "Lookup", PreviewController])

	.directive("bbNavbar", ["Data", "$location", bbNavbar])

	.config(["$routeProvider", routeConfig]);
