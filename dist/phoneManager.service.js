(function(){
	angular.module("test").factory("PhoneManager", PhoneManager);

	/*ngInject*/
	function PhoneManager(PhoneFactory){
		var phoneDatabase = {};
		
		var factory = {
			addPhone: addPhone,
			updateCheckoutStatus:updateCheckoutStatus,
			extendCheckoutPeriod:extendCheckoutPeriod,
			isPastDue:isPastDue
		};

		function addPhone( id, serial, brand, model, color, capacity, weight, dimension, display, camera, checkoutDate, checkoutMember, dueReturnDate ) {
			
			var phone = PhoneFactory.createPhone( serial, brand, model, color, capacity, weight, dimension, display, camera );
			
			phoneDatabase[id] = {
				checkoutMember: checkoutMember,
				checkoutDate: checkoutDate,
				dueReturnDate: dueReturnDate,
				phone: phone
			};

			return phoneDatabase[id];
		}

		function updateCheckoutStatus( id, checkoutDate, checkoutMember, newReturnDate ) {
			
			var record = phoneDatabase[id];
			record.checkoutDate = checkoutDate;
			record.checkoutMember = checkoutMember;
			record.dueReturnDate = newReturnDate;
		}
		
		function extendCheckoutPeriod( id, newReturnDate ) {
			phoneDatabase[id].dueReturnDate = newReturnDate;
		}
		
		function isPastDue( id ) {
			var currentDate = new Date();
			return currentDate.getTime() > Date.parse( phoneDatabase[id].dueReturnDate );
		}

		return factory;
	};
})();