'use strict';

// Gardens controller
angular.module('gardens').controller('GardensController', ['$scope', '$stateParams', '$location', 'Authentication', 'Gardens',
	function($scope, $stateParams, $location, Authentication, Gardens) {
		$scope.authentication = Authentication;

		$scope.create = function() {
            var garden = new Gardens({
                title: this.title,
                content: this.content,
                ///
                lon: this.lon,
                lat: this.lat
                ///
            });
            garden.$save(function(response) {
                $location.path('gardens/' + response._id);
                $scope.title = '';
                $scope.content = '';
                ///
                $scope.lon = 0;
                $scope.lat = 0;
                ///
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.$on('mapInitialized', function(event,map) {
		    var marker = map.markers[0];

			 $scope.$watch('garden.lat + garden.lon',function(newVal,oldVal){
			    if(newVal === oldVal){return;}
			              
			 map.setCenter({lat:$scope.garden.lat,lng:$scope.garden.lon});
			 marker.setPosition({lat:$scope.garden.lat,lng:$scope.garden.lon});
           });
    	});

    	$scope.gotolink= function(event,i) {
      		$location.path('gardens/'+ i._id);
    	};
		
		// Remove existing Garden
		$scope.remove = function(garden) {
			if ( garden ) { 
				garden.$remove();

				for (var i in $scope.gardens) {
					if ($scope.gardens [i] === garden) {
						$scope.gardens.splice(i, 1);
					}
				}
			} else {
				$scope.garden.$remove(function() {
					$location.path('gardens');
				});
			}
		};

		// Update existing Garden
		$scope.update = function() {
			var garden = $scope.garden;

			garden.$update(function() {
				$location.path('gardens/' + garden._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Gardens
		$scope.find = function() {
			$scope.gardens = Gardens.query();
		};

		// Find existing Garden
		$scope.findOne = function() {
			$scope.garden = Gardens.get({ 
				gardenId: $stateParams.gardenId
			});
		};
	}
]);