var moduleCtl = angular.module('moduleCookies', ['ngCookies']);
	moduleCtl.controller('otherController', function($scope, $cookies) {
    $scope.token = $cookies.get('token');
    $scope.removeCookies = function() {
        $cookies.remove('token');

    };

});