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
						template :'<div class="order-progress">'
								+ '<div class="panel-title">'
								+ '<h3 class="title">'
								+ '<span ng-show="{{customerInfo.title}}"><img src="{{customerInfo.iconLink}}" alt="{{customerInfo.title}}"/><strong>{{customerInfo.title}} :</strong></span>&nbsp;Order Tracking</h3>'
								+ '</div>'
								+ '<div class="panel-body">'
								+ '<div>'
								+ '<h4>'
								+ '<Strong>Order:</Strong>&nbsp <span>{{trackOrder.id}}</span>'
								+ '</h4>'
								+ '<div class="order-sataus"><strong>Status:</strong> <span class="{{trackOrder.statusClass}}">{{trackOrder.latest_status.status}}</span></div>'
								+ '</div>'
								+ '<div class="status-progress-bar">'
								+ '<ul>'
								+ '<li style="width: {{trackOrder.progressBlockWidth}}" ng-repeat="scan in trackOrder.scans | orderBy:timestamp">'
								+ '<i class="fa {{scan.iconClass}} fa-fw"></i>'
								+ '<div class="order-status" aria-hidden="false">{{scan.status}}</div>'
								+ '<div class="order-status-time" aria-hidden="false" class="">{{scan.date}}</div>'
								+ '<div class="order-status-time" aria-hidden="false" class="">{{scan.time}}</div>'
								+ '</li>'
								+ '</ul>'
								+ '</div>'
								+'</div>',
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
								template :'<div class="order-detail"><div class="row">'
									    + '<div class="col-lg-offset-6 col-lg-6 col-md-offset-4 col-md-8 col-sm-offset-4 col-sm-8 col-xs-12">'
									    + '<div class="order-detail-box">'
										+ '<div class="panel-title">'
										+ '<h3>Order Tracking Detail</h3></div>'
										+ '<div class="panel-body">'
										+ '<ul>'
										+ '<li>'
										+ '<div><span>{{trackOrder.latest_status.date}}</span><br><span>{{trackOrder.latest_status.time}}</span></div>'
										+ '<div>{{trackOrder.latest_status.message}}</div>'
										+ '</li>'
										+ '<li ng-repeat="scan in trackOrder.scans | orderBy:timestamp:true" ng-show="{{!scan.isLatest}}" >'
										+ '<div><span>{{scan.date}}</span><br><span>{{scan.time}}</span></div>'
										+ '<div>{{scan.message}}</div>'
										+ '</li></ul>'
										+ '</div></div></div></div>',
								link : function($scope, element, attrs) {

								}
							}
						});
	