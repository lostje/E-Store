angular.module('EStore').directive('appModal',  function () {
	return {
		restrict: 'E',
		controller: function($scope, $modal, ShoppingCartFactory) {
			$scope.cartFactory = ShoppingCartFactory;

			$scope.openModal = function () {
				var modalInstance = $modal.open({
	                templateUrl: 'templates/modal-template.html',
	                controller:  'ModalInstanceController',
	                resolve: {
	                    input: function () {
	                        return $scope.cartFactory;
	                    }
	                }
	            });

	            modalInstance.result.then(function(success) {}, function (error) {});
			}
		},
		template: '<button class="btn btn-primary" ng-click="openModal()">Open modal</button>'
	};
});