/**
 * Created by jiachiliu on 12/31/14.
 */
var serviceApp = angular.module('serviceApp', []);


serviceApp
/**
 * A factory that returns a string instance
 */
    .factory('clientId', function () {
        return "ax30234023";
    })
/**
 * A factory that use another service and returns a string
 */
    .factory('apiToken', ['clientId', function (clientId) {
        var encrypt = function (part1, part2) {
            return part1 + ":" + part2;
        };

        var secret = "secret";
        return encrypt(clientId, secret);
    }]);


/**
 * A user-defined service that uses a existed service
 */
function UserService(apiToken) {

    this.name = "User Service";
    this.apiToken = apiToken;

    this.service = function () {
        return "user service called on " + this.apiToken;
    }
}

serviceApp.service('UserService', ['apiToken', UserService]);

serviceApp.controller('factoryController', function ($scope, apiToken) {
    $scope.title = "AngularJS Factory";
    $scope.encrptClientId = apiToken;
}).controller('serviceController', function ($scope, UserService) {
    $scope.title = "AngularJS Service";
    $scope.serviceResult = UserService.service();
}).controller('providerController', function ($scope) {
    $scope.title = "AngularJS Provider";
});