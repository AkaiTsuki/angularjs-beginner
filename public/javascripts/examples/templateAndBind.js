/**
 * Created by jiachiliu on 11/12/14.
 */
var app = angular.module('TemplateAndBindApp', []);

app.controller("TextDisplayController", ['$scope', function ($scope) {
    $scope.message = "This is text from TextDisplayController";
}]).controller("FormInputController", ['$scope', function ($scope) {
    var product = {
        quantities: 0,
        cost: 0,
        price: 2.0
    };
    $scope.product = product;

    $scope.computePrice = function () {
        product.cost = product.quantities * 2.0;
    };
}]);