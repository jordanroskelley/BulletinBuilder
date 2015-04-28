function HomeController($scope, Data) {
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

		var now = new Date();
		var dateStr = (now.getMonth()+1) + "/" + (now.getDate()) + "/" + (now.getFullYear())

		//add an empty bulletin to the list
		$scope.d.push({date: dateStr, status: 'new'});
	};

	$scope.save = function (index) {
		$scope.d[index].status = null;
	};

	$scope.delete = function (index) {
		//remove a bulletin from the list
		$scope.d.splice(index, 1);
	};

	$scope.copy = function (index) {
		console.log('copy ' + index);
		var copy = angular.copy($scope.d[index]);
		$scope.d.push(copy);
	};

	$scope.edit = function (index) {
		console.log('edit ' + index);
	};

	init();
}
