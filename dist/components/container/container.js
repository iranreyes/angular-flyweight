(function(){
	angular.module("test").directive("container", containerDirective);

	function containerDirective(){
		return {
			restrict: "E",
			templateUrl: "components/container/container.html"
		}
	}
})();