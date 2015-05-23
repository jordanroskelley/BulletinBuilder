/// <reference path="../../../../typings/angularjs/angular.d.ts"/>
/*
TODO:
-Allow reordering of bulletins (move up/down, drag and drop, something...)
-Ideally be able to rename from list? but then how to separate rename from edit?
*/

function HomeController($scope, $location, Data) {
	$scope.TESTING = "HELLO FROM HOME";
	
	// Preload data
	function init() {
		//set up data (load or initialize)
		Data.init();
		
		//set data into scope
		$scope.d = Data.data;

		//watch data, if it changes, refresh scope
		//TODO: if we do this, what happens (or should happen) to what is currently in scope?
		$scope.$watch(
			function () { return Data.data; },
			function () { $scope.d = Data.data; }
		);
	}

	//-----------------------------------------BEGIN ADD NEW FUNCTIONS
	$scope.beginAdd = function () {
		//get todays date (which is the default name)
		var now = new Date();
		var dateStr = (now.getMonth() + 1) + "/" + (now.getDate()) + "/" + (now.getFullYear());
		
		//get the highest id plus one
		var newId = getNextId();

		//add an empty bulletin to the list
		$scope.d.push({ id: newId, name: dateStr, isAdding: true });
	};
	
	$scope.saveNew = function(index) {
		//remove isAdding status
		delete $scope.d[index]['isAdding'];
	};
	
	$scope.deleteNew = function(index) {
		//delete Bulletin from array
		$scope.d.splice(index, 1);
	};
	//-------------------------------------------END ADD NEW FUNCTIONS

	//------------------------------------------BEGIN DELETE FUNCTIONS
	$scope.beginDelete = function (index) {
		//user clicked delete, warn them first
		$scope.d[index].isDeleting = true;
	};
	
	$scope.cancelDelete = function(index) {
		//clear deleting status
		delete $scope.d[index]['isDeleting'];
	};
	
	$scope.confirmDelete = function(index) {
		//remove a bulletin from the list
		$scope.d.splice(index, 1);
	};
	//--------------------------------------------END DELETE FUNCTIONS
	
	//--------------------------------------------BEGIN COPY FUNCTIONS
	$scope.copy = function (index) {
		var copy = angular.copy($scope.d[index]);
		copy.name = copy.name + " copy";
		copy.id = getNextId();
		$scope.d.push(copy);
	};

	$scope.edit = function (index) {
		//redirect to specified bulletin
		$location.path('bulletin/' + $scope.d[index].id);
	};
	//----------------------------------------------END COPY FUNCTIONS
	
	/**
	 * Loop the bulletins, and get the max id plus one
	 */
	function getNextId() {
		var maxId = 0;
		_.forEach($scope.d, function(bulletin) {
			if(bulletin.id > maxId) {
				maxId = bulletin.id;
			}
		});
		maxId++;
		return maxId;
	}

	init();
}
