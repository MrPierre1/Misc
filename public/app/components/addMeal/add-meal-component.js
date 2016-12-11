'use strict';
var app = angular.module('myApp.add', ['ngRoute', 'ngCookies']);

function controller($http, $location, $cookies) {
    var model = this;
    model.params = {};
    // model.mealService = new mealService;
    // console.log("yoooo ", model.mealService.myFunc(255))
    console.log($cookies.get('token'));


    model.addMeal = function() {

        // model.pushMeal = mealsService.addMeal();

        $http.post('/add-meal/', model.params, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).success(function(data) {
            $location.path('/list');
        });
    };
    model.isLink = false;
    model.showPopover = function() {
        model.popoverIsVisible = true;
    };
    model.hidePopover = function() {
        model.popoverIsVisible = false;
    };
}
app.component('addMeal', {
    templateUrl: '../../components/addMeal/add-meal.html',
    controllerAs: "model",
    controller: controller
});