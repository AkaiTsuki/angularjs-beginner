/**
 * Created by jiachiliu on 10/27/14.
 */

(function () {
    var toDoApp = angular.module('toDoApp', []);
    toDoApp.controller('ToDoController', ['$scope', function ($scope) {
        $scope.toDoList = [];

        $scope.preview = $scope.toDoItem + new Date();

        $scope.addItem = function () {
            $scope.toDoItem = $scope.toDoItem || "";
            if ($scope.toDoItem.length > 0) {
                $scope.toDoList.push({text: $scope.toDoItem, date: Date.now()});
                $scope.toDoItem = "";
            } else {
                $scope.errorMsg = "Please input an item.";
            }
        };

        $scope.enter = function (event) {
            if (event.which == 13) {
                $scope.addItem();
            }
        };
    }]);
}());
