(function(){

	angular.module("test").controller("FlyController", FlyController);

	/*ngInject*/
	function FlyController(PhoneManager){
		var vm = this;

		vm.serial = "";
		vm.model = "";
		vm.check = "";
		vm.brand = "Apple";

		vm.listPhones = [];

		vm.addPhone = function(){
			var id = vm.serial + vm.model;
			var phone = PhoneManager.addPhone(id, vm.serial, vm.brand, vm.model, null,null,null,null,null,null, vm.check);

			vm.listPhones.unshift(phone);
		}
	};

})();