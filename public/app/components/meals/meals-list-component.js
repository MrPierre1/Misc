'use strict';
var app = angular.module('myApp.list', ['ngRoute']);

function controller($http, $location) {
    var model = this;
    model.getMeals = function() {
        return $http.get('/meals').then(function(response) {
            return response.data;
        });
    };
    model.getMeals().then(function(mealData) {
        model.recipes = mealData;
    });
    model.deleteMeal = function(meal) {
        return $http.delete('/delete/' + meal._id).then(function() {
            return model.getMeals();
        }).then(function(updatedMeals) {
            model.recipes = updatedMeals;
        });
    };
    model.selectAction = function(recipe, rating) {
        console.log("Its rating time", rating, recipe._id);
        $http.post('/rating', {
            recipeID: recipe._id,
            rating: rating
        }).then(function(response) {});
    };
    model.date = new Date();
    model.ratings = ['An Acquired Taste', 'Mixed Reviews', 'Liked It', 'Really Good', 'PL Favorite'];
}
app.component('mealList', {
    templateUrl: '../../components/meals/meals-list.html',
    controllerAs: "model",
    controller: controller
});