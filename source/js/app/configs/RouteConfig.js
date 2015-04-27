function routeConfig($routeProvider) {
	$routeProvider.when("/intro", { templateUrl: "views/intro.html" });
	$routeProvider.when("/home", { templateUrl: "views/home.html", controller: "HomeController" });
	$routeProvider.when("/bulletin", { templateUrl: "views/bulletin.html", controller: "BulletinController" });

	$routeProvider.otherwise({ redirectTo: "/intro" });
}
