function bbNavbar(Data, $location) {
	return {
		restrict: "E",
		templateUrl: "views/bb-navbar.html",
		scope: {},
		controller: function ($scope, Data, $location) {
			function builder() {
				var p = $location.path();
				var n = p.replace('preview', 'bulletin');
				//console.log('builder ->', n);
				$location.path(n);
			}
			
			function preview() {
				var p = $location.path();
				var n = p.replace('bulletin', 'preview');
				//console.log('preview ->', n);
				$location.path(n);
			}
			
			function save() {
				console.log('bbNavbar save');
				Data.saveData();
			}

			function load() {
				console.log("bbNavbar load");
				Data.loadData();
				//_.defer(function () { $scope.$apply(); });
			}

			function importBulletin() {
				console.log("bbNavbar import");
			}

			function exportBulletin() {
				console.log("bbNavbar export");
			}
			
			$scope.builder = builder;
			$scope.preview = preview;
			$scope.save = save;
			$scope.load = load;
			$scope.import = importBulletin;
			$scope.export = exportBulletin;
			
			
			$scope.$on('$locationChangeStart', function(event) {
				$scope.isPreview = $location.path().indexOf("preview") == -1;
				$scope.isBuilder = $location.path().indexOf("bulletin") == -1;
			});
			
			$scope.isPreview = $location.path().indexOf("preview") == -1;
			$scope.isBuilder = $location.path().indexOf("bulletin") == -1;
		}
	}
}
