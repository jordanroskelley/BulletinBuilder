function bbNavbar(Data) {
	return {
		restrict: "E",
		templateUrl: "views/bb-navbar.html",
		scope: {},
		controller: function ($scope, Data) {
			$scope.save = function () {
				Data.saveData()
			};

			$scope.load = function () {
				console.log("bbNavbar load");
				Data.loadData();
				//_.defer(function () { $scope.$apply(); });
			};

			$scope["import"] = function () {
				console.log("bbNavbar import")
			};

			$scope["export"] = function () {
				console.log("bbNavbar export")
			};
		}
	}
}
