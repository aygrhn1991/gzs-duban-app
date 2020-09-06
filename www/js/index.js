var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when('/page1', {
            templateUrl: '/page/page1.html',
            controller: 'page1Ctrl'
        })
        .when('/page2', {
            templateUrl: '/page/page2.html',
            controller: 'page2Ctrl'
        })
        .when('/page3', {
            templateUrl: '/page/page3.html',
            controller: 'page3Ctrl'
        })
        .when('/page4', {
            templateUrl: '/page/page4.html',
            controller: 'page4Ctrl'
        })
        .otherwise({
            redirectTo: '/page1'
        });
});
app.controller('indexCtrl', function($http, $rootScope) {});
app.controller('page1Ctrl', function($http, $rootScope) {});
app.controller('page2Ctrl', function($http, $scope) {
    $http.post('https://wx2.fenglingtime.com/api/test/123').success(function(data) {
        console.log(data);
        $scope.data = JSON.stringify(data);
    })
});
app.controller('page3Ctrl', function($http, $rootScope) {});
app.controller('page4Ctrl', function($http, $rootScope) {});