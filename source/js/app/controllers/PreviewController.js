/// <reference path="../../../../typings/angularjs/angular.d.ts"/>
/// <reference path="../../../../bower_components/lodash/lodash.js"/>
function PreviewController($scope, $routeParams, $http, Data, Lookup) {
	function init() {
		Data.init();
		
		//get index of selected bulletin
		var selectedIndex = -1;
		selectedIndex = _.findIndex(Data.data, function(bulletin) {
			console.log("Bulletin Id: " + bulletin.id + "\tRoute Id: " + $routeParams.id);
			return bulletin.id == $routeParams.id;
		});
		
		//pull select list data into scope
		$scope.bishopricPositions = Lookup.bishopricPositions;
		$scope.leadershipPositions = Lookup.leadershipPositions;
		$scope.eventTypes = Lookup.eventTypes;
		
		//bind single bulletin into scope
		$scope.d = Data.data[selectedIndex];
		$scope.$watch(
			function () { return Data.data[selectedIndex]; },
			function () { $scope.d = Data.data[selectedIndex]; }
		);
	}

	init();
}
