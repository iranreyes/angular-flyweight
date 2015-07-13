(function(){
	angular.module("test").factory("PhoneFactory", PhoneFactory);

	/*ngInject*/
	function PhoneFactory(){
		var existingPhones = []; 
		var existingPhone;
		
		var factory = {
			createPhone: createPhone
		};

		function createPhone(serial, brand, model, color, capacity, weight, dimension, display, camera) {
			existingPhone = existingPhones[serial];
			if ( !! existingPhone ) {
				return existingPhone;
			} else {
				var phone = new Phone( serial, brand, model, color, capacity, weight, dimension, display, camera );
				existingPhones[serial] = phone;
				return phone;
			}
		}

		return factory;
	};
})();