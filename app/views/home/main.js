/**
 * Created by mxgel on 5/4/17.
 */
'use strict';
angular.module('demo.views.home', [
    'ui.router',
    'demo.components.home',
    'demo.setup',
    'demo.models.account.service',
    'demo.views.layouts'
])

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state({
                name: 'home',
                parent: 'layout',
                url: '/home',
                component: 'demoHome',
                resolve: {
                    accounts: ['service', function (service) {
                        return service.get();
                    }]
                }
            })
    }]);
