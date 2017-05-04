/**
 * Created by mxgel on 5/4/17.
 */
'use strict';
angular.module('demo.views.balance', [
    'ui.router',
    'demo.components.balance',
    'demo.setup'
])

    .config(function ($stateProvider) {
        $stateProvider.state({
            name: 'balance',
            url: '/balance',
            component: 'demoBalance'
        });
    });