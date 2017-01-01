trackOrder.controller(
				'trackOrderController',
				function($scope, $rootScope, trackOrderService, $location) {
					var cpId = $location.search().cp_id;
					console.log(cpId);
					var waybill = $location.search().waybill;
					console.log(cpId);
					$scope.trackOrder = {};
					$scope.customerInfo = {};
					$scope.orderStatus = 'Not Yet!';
					trackOrderService.getTrackOrder(waybill, cpId).then(function(response) {
						if(response.status === 200 && response.data) {
							var trackOrder = response.data.result[waybill];
							console.log(trackOrder);
							var trackOrderList = [];
							if(trackOrder) {
							trackOrder.id = waybill;
							angular.forEach(trackOrder.scans, function(scan, i) {
								 scan.date = trackOrderService.getStandardDate(scan.timestamp);
								 scan.time = trackOrderService.getStandardTime(scan.timestamp);
								 scan.timeStamp = new Date(scan.timestamp).getTime();
								 
								 scan.message = (scan.location !== 'None') ? scan.remark + ' ' + scan.location : scan.remark;
								 scan.iconClass = (scan.status === 'Delivered') ? 'fa-3x fa-check-circle' : 'fa-2x fa-circle';
								 console.log(scan);
								 if(trackOrder.latest_status && trackOrder.latest_status.status === scan.status) {
									 scan.isLatest =true;
								 }
							});
						 	if(trackOrder.latest_status) {
						 		if(trackOrder.latest_status.status === 'Delivered') {
						 			trackOrder.isDelivered = true;
						 			trackOrder.statusClass ='color-success'
						 		} else {
						 			trackOrder.statusClass ='';
						 			var scan = {
						 					status : 'Received',						 					
						 					iconClass : 'fa-2x fa-circle fa-disabled',
						 			        timeStamp : new Date().getTime(),
						 			        isLatest :true
						 			}
						 			trackOrder.scans.push(scan);
						 		}
						 		trackOrder.latest_status.message = (trackOrder.latest_status.location !== 'None') ?  trackOrder.latest_status.remark + ' ' + trackOrder.latest_status.location : trackOrder.latest_status.remark;
						 		trackOrder.latest_status.date = trackOrderService.getStandardDate(trackOrder.latest_status.timestamp);
						 		trackOrder.latest_status.time = trackOrderService.getStandardTime(trackOrder.latest_status.timestamp);
						 		trackOrder.latest_status.timeStamp = new Date(trackOrder.latest_status.timestamp).getTime();
						 	}
						 	 trackOrder.progressBlockWidth = 100 / trackOrder.scans.length + '%';
							 $scope.trackOrder = trackOrder;
							} 
						}					
					});
				});
