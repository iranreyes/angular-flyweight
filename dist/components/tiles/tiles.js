(function(){
	angular.module("test").directive("tiles", tilesDirective);

	function tilesDirective(){
		return {
			restrict: "E",
			templateUrl: "components/tiles/tiles.html"
		}
	}
})();