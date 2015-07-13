(function(){
	angular.module("test").directive("navbar", navbarDirective);

	function navbarDirective(){
		return {
			restrict: "E",
			templateUrl: "components/navbar/navbar.html"
		}
	}
})();