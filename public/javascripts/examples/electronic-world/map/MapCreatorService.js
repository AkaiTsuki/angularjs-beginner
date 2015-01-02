/**
 * Created by jiachiliu on 1/2/15.
 */
'use strict';

angular.module('eWorld.map')
    .service('mapCreatorService', function () {

        /**
         * Randomly select one element in the list
         * @param elementList a list contains all element characters
         * @returns the selected element
         */
        var randomElement = function (elementList) {
            return elementList[Math.floor(Math.random() * elementList.length)];
        };

        /**
         * Generate element list based on probability distribution
         * @param distribution a object that describe the probability a element holds
         * @returns {Array} a list of elements applied with the distribution
         */
        var generateElementList = function (distribution) {
            var elementList = [];
            var all = 100;
            var probability = 0.0;
            for (var ele in distribution) {
                if (distribution.hasOwnProperty(ele)) {
                    var total = all * distribution[ele];
                    probability += distribution[ele];
                    for (var i = 0; i < total; i++) {
                        elementList.push(ele);
                    }
                }
            }

            for (var i = 0; i < (1.0 - probability) * all; i++) {
                elementList.push(' ');
            }
            return elementList;
        };

        /**
         * Given the width and height of map, return string representation of the map
         * @param map data structure that save the map data
         * @param width width of the map
         * @param height height of the map
         * @returns {string} string representation of the map
         */
        var mapToString = function (map, width, height) {
            var str = '';

            for (var x = 0; x < width; x++) {
                for (var y = 0; y < height; y++) {
                    var i = x + width * y;
                    str += map[i];
                }
                str += '\n';
            }

            return str;
        };

        /**
         * Build a random map with given width and height
         * @param width
         * @param height
         */
        this.buildMap = function (width, height) {

            var distribution = {
                'o': 0.01,
                '*': 0.1,
                '#': 0.02
            };

            var elementList = generateElementList(distribution);

            var map = [];
            for (var x = 0; x < width; x++) {
                for (var y = 0; y < height; y++) {
                    var i = x + width * y;
                    if (x == 0 || y == 0 || x == width - 1 || y == height - 1) {
                        map[i] = "#";
                    } else {
                        map[i] = randomElement(elementList);
                    }
                }
            }

            return mapToString(map, width, height);
        }
    });