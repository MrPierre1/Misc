'use strict';

var app = angular.module('myApp.edit', ['ngRoute']);

function controller($http, $routeParams, $location) {
    const model = this;
    const mealId = $routeParams.mealID;

    model.getMealsById = function() {
        return $http.get('/meal/' + mealId).then(function(response) {
            model.mealName = response.data[0].name;
            model.mealDescription = response.data[0].description;
            model.mealNote = response.data[0].note;
        });
    };
    model.getMealsById();
    model.getMeals = function() {
        return $http.get('/meals').then(function(response) {
            return response.data;
        });
    };
    model.updateMeal = function(mealN, mealD, mealNote) {
        model.meal = {
            name: mealN,
            desc: mealD,
            note: mealNote
        };
        $http.put('/update/' + mealId, model.meal, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).success(function(data) {
            model.getMeals().then(function(mealData) {
                model.recipes = mealData;
            });
            $location.path('/list');
        });
    };
}
app.component('editMeal', {
    templateUrl: '../../components/editMeal/edit-meal.html',
    controllerAs: "model",
    controller: controller
});