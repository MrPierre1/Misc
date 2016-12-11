var app = angular.module('myApp.service', ['ngRoute']);

app.service('mealService', function() {
    this.myFunc = function (x) {
        return x.toString(16);
    }
});