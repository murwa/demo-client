'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ui.router',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]).config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $stateProvider, $urlRouterProvider) {
    // Enable html5 mode
    $locationProvider.html5Mode(true);

    // Define routes
    $stateProvider.state({
        name: 'home',
        url: '/',
        template: "You're home dude..."
    });

    // Redirect to
    $urlRouterProvider.otherwise('/errors');
}]);
