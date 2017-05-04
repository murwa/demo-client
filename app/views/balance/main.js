/**
 * Created by mxgel on 5/4/17.
 */
'use strict';
angular.module('demo.views.balance', [
    'ui.router',
    'demo.components.balance',
    'demo.setup',
    'demo.views.layouts'
])

    .config(function ($stateProvider) {
        $stateProvider.state({
            name: 'balance',
            parent: 'layout',
            url: '/balance/{url:string}',
            component: 'demoBalance',
            resolve: {
                item: ['service', '$transition$', function (service, $transition$) {
                    return service.get({endpoint: 'balance', url: $transition$.params().url}).then(function (data) {
                        return data.data;
                    });
                }]
            }
        });
    });