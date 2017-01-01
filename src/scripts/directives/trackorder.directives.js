trackOrder
		.directive(
				'orderProgress',
				function() {
					return {
						scope : {
							customerInfo : '=customerinfo',
							trackOrder : '=trackorder'
						},
						restrict : 'E',
						templateUrl : './templates/orderProgress.html',
						link : function($scope, element, attrs) {

						}
					}
				}).directive(
						'orderDetail',
						function() {
							return {
								scope : {
									customerInfo : '=customerinfo',
									trackOrder : '=trackorder'
								},
								restrict : 'E',
								templateUrl :'./templates/orderDetail.html',
								link : function($scope, element, attrs) {

								}
							}
						});
	