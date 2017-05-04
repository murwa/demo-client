/**
 * Created by mxgel on 5/4/17.
 */
'use strict';
angular.module('demo.views.auth', [
    'ui.router',
    'demo.components.auth',
    'demo.setup',
    'demo.views.layouts'
])

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state({
            name: 'auth',
            parent: 'layout',
            url: '/',
            component: 'demoAuth',
            data: {
                requireAuth: false,
                redirectTo: 'home'
            }
        });
    }]);