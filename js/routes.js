
var moduleroutes = angular.module('modulroute', ['ngRoute','moduleTryCookies','moduleCookies']);
 moduleroutes.controller('ctrlMain', function($scope, $route, $routeParams, $location){
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
});

moduleroutes.config(function($routeProvider,$locationProvider){
    $routeProvider
    .when('/page-one',{
        templateUrl: '/page_one.html'
    })
    .when('/page-two',{
        templateUrl: '/page_two.html'
    
    })

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});


