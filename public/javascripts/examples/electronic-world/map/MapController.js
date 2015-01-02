/**
 * Created by jiachiliu on 1/2/15.
 */
'use strict';

angular.module('eWorld.map')
    .controller('MapController', function ($scope, mapCreatorService, info) {
        $scope.info = info;
        $scope.world = mapCreatorService.buildMap(30, 50);
    });