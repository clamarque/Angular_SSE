'use strict';
/**
 * This controller manages broadcasting messages to users
 */
function broadcastCtrl($scope, $http) {
    //Send message server
    $scope.send = function () {
        $http({
            url: "message.php",
            method: "POST",
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: $.param({ data: $scope.message })
        }).success(function (data, status, headers, config) {
            $scope.message = null;
            $scope.data = data;
        }).error(function (data, status, headers, config) {
            $scope.status = status;
        });

    }
}
angular.module('my-app').controller('broadcastCtrl', broadcastCtrl);