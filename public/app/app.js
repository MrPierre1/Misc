'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'ngCookies',

  // 'myApp.service',
  'ngMaterial',
  // 'mdDataTable',
  // 'myApp.login',
  // 'myApp.register',
  // 'myApp.add',
  // 'myApp.edit',
  'myApp.list'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider
  // .when('/login', {
  //   template: '<login></login>',
  // }).when('/register', {
  //   template: '<register></register>',
  // })
  // .when('/register', {
  //   template: '<register></register>',
  // })
  .when('/add', {
    template: '<add-meal></add-meal>',
  })
  // .when('/edit/:mealID', {
  //   template: '<edit-meal></edit-meal>',
  // })
  .when('/list', {
    template: '<meal-list></meal-list>',
  })
  // .otherwise({redirectTo: '/login'});
}])
.run(function($rootScope, $cookies, $location) {
// $rootScope.$on('$routeChangeStart', function (event) {
//   console.log(event, "events")
//
//   if($cookies.get('token') && $cookies.get('currentUser')) {
//     $rootScope.token = $cookies.get('token');
//     $rootScope.currentUser = $cookies.get('currentUser');
//   }
//
//   else{
//     $location.path('/login');
//     alert("you need to login")
//     console.log("get a token", $rootScope.token)
//   }

// });


});
