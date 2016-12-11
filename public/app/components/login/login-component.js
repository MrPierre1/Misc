'use strict';
var app = angular.module('myApp.login', ['ngRoute', 'ngCookies']);

function controller($rootScope, $http, $location, $cookies) {
    // console.log("I see login")
    var model = this;

    model.login = function() {
         model.user = {
        username: model.username,
        password: model.password
        }

         $http.post('/users/login', model.user )
         .then(function(response) {
           if(response){
            console.log("resp ",response.data.token);
            $cookies.put('token', response.data.token)
            $rootScope.token = response.data.token;
            $cookies.put('currentUser', model.username)
            $rootScope.currentUser = model.username;


            alert("successfully signed in")
            $location.path('/list');
            }
            else{
            alert("did not login", response)

            }
            })
         .catch(function(err, response){
            alert("User and password are incorrect", response)

            console.log("Errr, : ",err)
         });

    };

//     model.addUser = function() {
//         var newUser = {
//         username: model.username,
//         password: model.password
//         }

//  $http.post('/users',newUser, {
//         }).success(function(data) {
//             console.log(data, "data")
//             $location.path('/list');
//         });

// }
    // model.getMeals().then(function(mealData) {
    //     model.recipes = mealData;
    // });
    // model.deleteMeal = function(meal) {
    //     return $http.delete('/delete/' + meal._id).then(function() {
    //         return model.getMeals();
    //     }).then(function(updatedMeals) {
    //         model.recipes = updatedMeals;
    //     });
    // };

}
app.component('login', {
    templateUrl: '../../components/login/login.html',
    controllerAs: "model",
    controller: controller
});