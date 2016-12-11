'use strict';
var app = angular.module('myApp.register', ['ngRoute']);

function controller($http, $location) {
    // console.log("I see register")
    var model = this;

    // model.addUser = function() {
    //     return $http.post('/users', {username: model.username, password:model.password}).then(function(response) {
    //         console.log(response)
    //         return response.data;
    //     });
    //         $location.path('/list');

    // };

    model.registerUser = function() {
        console.log("I see register")

        model.newUser = {
            username: model.username,
            firstName: model.firstName,
            lastName: model.lastName,
            email: model.email,
            password: model.password
        }

        return $http.post('/users/register', model.newUser)
        .then(function(data){
            console.log(data)
            $location.path('/list');

            })
        .catch(function(e) {
             console.log(e); // "oh, no!"
        });

    };

}
app.component('register', {
    templateUrl: '../../components/register/register.html',
    controllerAs: "model",
    controller: controller
});