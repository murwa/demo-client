'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'myApp.version',
    'demo.views.auth',
    'demo.views.home',
    'demo.views.balance',
    'demo.views.deposit',
    'demo.views.transfer',
    'demo.views.withdraw',
    'demo.setup'
]).config([
    '$locationProvider',
    '$urlRouterProvider',
    function ($locationProvider, $urlRouterProvider) {
        // Enable html5 mode
        $locationProvider.html5Mode(true);

        // Redirect to
        $urlRouterProvider.otherwise('/errors');
    }])
    .run(function ($transitions, $rootScope) {
        $transitions.onStart({
            to: function (state) {
                return angular.isObject(state.data);
            }
        }, function (trans) {
            var auth = trans.injector().get('$auth'),
                state = trans.router.stateService,
                data = trans.$to().data;
            // Check auth and redirect...
            if ((data.requireAuth === true && !auth.isAuthenticated()) || (data.requireAuth === false && auth.isAuthenticated())) {
                return state.target(data.redirectTo);
            }
        });
    });
