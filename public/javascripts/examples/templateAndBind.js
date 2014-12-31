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
}]).controller("RepeatElementController", ['$scope', function ($scope) {
    var students = [
        {
            id: 1,
            firstName: 'John',
            lastName: 'Liu'
        },
        {
            id: 2,
            firstName: 'Tedd',
            lastName: 'Scott'
        },
        {
            id: 3,
            firstName: 'Vic',
            lastName: 'Meritt'
        }
    ];

    var toAdd = {
        id: 4,
        firstName: 'Student',
        lastName: 'New'
    };

    $scope.students = students;

    $scope.addStudent = function () {
        students.push(toAdd);
    }
}]).controller("HideAndShowController", ["$scope", function ($scope) {
    $scope.message = {
        show: true,
        content: "Controlled by ng-show",
        style: 'error'
    }

    $scope.toggle = function(){
        $scope.message.show = !$scope.message.show;
        if($scope.message.style == 'error'){
            $scope.message.style = 'notError';
        }else{
            $scope.message.style = 'error';
        }
    }
}]);