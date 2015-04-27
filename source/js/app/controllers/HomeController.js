function HomeController($scope, dataService) {
	function init() {
		Data.init();
		$scope.d = Data.data;

		$scope.$watch(
			function () { return Data.data; },
			function () { $scope.d = Data.data; }
		);
	}

	$scope.addBulletin = function () {
		//if the list is empty, add one
		if(!$scope.d) {
			$scope.d = [];
		}

		//add an empty bulletin to the list
		$scope.d.push({});
	};

	$scope.removeBulletin = function (index) {
		//remove a bulletin from the list
		$scope.d.splice(index, 1)
	};
}
