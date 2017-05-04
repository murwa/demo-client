'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'myApp.version',
    'demo.views.auth',
    'demo.views.home',
    'demo.views.balance',
    'demo.views.deposit',
    'demo.views.transfer',
    'demo.views.withdraw'
]).config([
    '$locationProvider',
    '$urlRouterProvider',
    function ($locationProvider, $urlRouterProvider) {
        // Enable html5 mode
        $locationProvider.html5Mode(true);

        // Redirect to
        $urlRouterProvider.otherwise('/errors');
    }]);
