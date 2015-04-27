function BulletinController($scope, $http, Data) {
	function init() {
		Data.init();
		$scope.d = Data.data,
		$scope.$watch(
			function () { return Data.data; },
			function () { $scope.d = Data.data; }
		);
	}

	$scope.addBishopric = function () {
		if($scope.d.bishopric) {
			$scope.d.bishopric = [];
		}
		$scope.d.bishopric.push({});
	};

	$scope.removeBishopric = function (index) {
		$scope.d.bishopric.splice(index, 1);
	};

	$scope.addLeadership = function () {
		if(!$scope.d.leadership) {
			$scope.d.leadership = [];
		}

		$scope.d.leadership.push({});
	};

	$scope.removeLeadership = function (index) {
		$scope.d.leadership.splice(index, 1);
	};

	$scope.addMissionary = function () {
		if($scope.d.missionaries) {
			$scope.d.missionaries = [];
		}

		$scope.d.missionaries.push({});
	};

	$scope.removeMissionary = function (index) {
		$scope.d.missionaries.splice(index, 1);
	};

	$http
		.get("/data.json")
		.success(function (data) {
			$scope.bishopricPositions = data.bishopricPositions;
			$scope.leadershipPositions = data.leadershipPositions;
	});

	init();
}
