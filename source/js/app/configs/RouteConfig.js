function routeConfig($routeProvider) {
	$routeProvider.when("/intro", { templateUrl: "views/intro.html" });
	$routeProvider.when("/home", { templateUrl: "views/home.html", controller: "HomeController", controllerAs: "home" });
	$routeProvider.when("/bulletin/:id", { templateUrl: "views/bulletin.html", controller: "BulletinController", controllerAs: "bulletin" });

	$routeProvider.otherwise({ redirectTo: "/home" });
}
