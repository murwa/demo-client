/**
 * Created by mxgel on 5/4/17.
 */
'use strict';
angular.module('demo.views.auth', [
    'ui.router',
    'demo.components.auth',
    'demo.setup'
])

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state({
            name: 'auth',
            url: '/',
            component: 'demoAuth',
            data: {
                requireAuth: false,
                redirectTo: 'home'
            }
        });
    }]);