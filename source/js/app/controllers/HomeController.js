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

	// Begin Add a bulletin
	$scope.beginAdd = function () {
		//if the list is empty, add one
		if(!$scope.d) {
			$scope.d = [];
		}

		var now = new Date();
		var dateStr = (now.getMonth()+1) + "/" + (now.getDate()) + "/" + (now.getFullYear())

		//add an empty bulletin to the list
		$scope.d.push({date: dateStr, status: 'isAdding'});
	};

	$scope.confirmAdd = function (index) {
		$scope.d[index].status = null;
	};
	// End Add a bulletin

	// Begin Delete a bulletin
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
	// End Delete a bulletin
	
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
