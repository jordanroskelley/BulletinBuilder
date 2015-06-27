/// <reference path="../../../../typings/angularjs/angular.d.ts"/>
/// <reference path="../../../../bower_components/lodash/lodash.js"/>
function BulletinController($scope, $routeParams, $http, Data, Lookup) {
	function init() {
		Data.init();
		
		/*
		//http://broadcast3.lds.org/crowdsource/Mobile/LDSMusic/Staging/Collections/Hymns-EN/55/Collection.json
		//but it has no CORS :(
		
		$http.
			get('hymn.json').
			success(function(data) {
				var hymnData = _.map(data.items, function(row) {
					return { number: row.number, name: row.name };
				});
			});
		*/
		
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
		$scope.hymns = Lookup.hymns;
		$scope.programEventTypes = Lookup.programEventTypes;
		
		//bind single bulletin into scope
		$scope.d = Data.data[selectedIndex];
		$scope.$watch(
			function () { return Data.data[selectedIndex]; },
			function () { $scope.d = Data.data[selectedIndex]; }
		);
	}

	$scope.addBishopric = function () {
		if(!$scope.d.bishopric) {
			$scope.d.bishopric = [];
		}
		$scope.d.bishopric.push({ });
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
		if(!$scope.d.missionaries) {
			$scope.d.missionaries = [];
		}

		$scope.d.missionaries.push({});
	};

	$scope.removeMissionary = function (index) {
		$scope.d.missionaries.splice(index, 1);
	};

	$scope.addAnnouncement = function () {
		if(!$scope.d.announcements) {
			$scope.d.announcements = [];
		}

		$scope.d.announcements.push({});
	};

	$scope.removeAnnouncement = function (index) {
		$scope.d.announcements.splice(index, 1);
	};
	
	$scope.addProgramEvent = function() {
		if(!$scope.d.program) {
			$scope.d.program = { events: [] };
		}
		
		//automatically start editing new ones
		$scope.d.program.events.push({ isEditing: true });
	};
	
	$scope.changeHymn = function (e) {
		e.center = e.hymn.name;
		e.right = e.hymn.number;
	}
	
	//functions/setup for date picker
	$scope.open = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		
		$scope.opened = true;
	};

	init();
}
