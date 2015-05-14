function HomeController($scope, Data) {
	// Preload data
	function init() {
		Data.init();
		$scope.d = Data.data;

		$scope.$watch(
			function () { return Data.data; },
			function () { $scope.d = Data.data; }
		);
	}

	// Begin Adding a bulletin
	$scope.beginAdd = function () {
		//if the list is empty, add one
		if(!$scope.d) {
			$scope.d = [];
		}

		var now = new Date();
		var dateStr = (now.getMonth() + 1) + "/" + (now.getDate()) + "/" + (now.getFullYear())
		
		//TODO: should we hae an id? to make url stuff easier (like http://bulletinbuilder.com/edit/23)

		//add an empty bulletin to the list
		$scope.d.push({ date: dateStr, isAdding: true });
	};

	$scope.confirmAdd = function (index) {
		$scope.d[index].status = null;
	};
	// End Adding a bulletin

	// Begin Deleting a bulletin
	$scope.beginDelete = function (index) {
		//user clicked delete, warn them first
		$scope.d[i].isDeleting = true;
	};
	
	$scope.cancelDelete = function(index) {
		//clear deleting status
		delete $scope.d[i]['isDeleting'];
	};
	
	$scope.confirmDelete = function(index) {
		//remove a bulletin from the list
		$scope.d.splice(index, 1);
	};
	// End Deleting a bulletin
	
	$scope.copy = function (index) {
		console.log('copy ' + index);
		var copy = angular.copy($scope.d[index]);
		$scope.d.push(copy);
	};

	$scope.edit = function (index) {
		console.log('edit ' + index);
		//TODO: redirect to editing pages
	};
	
	
	//functions/setup for date picker
	$scope.open = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		
		$scope.opened = true;
	};

	init();
}
