/**
 * Created by mxgel on 5/4/17.
 */
'use strict';
angular.module('demo.views.deposit', [
    'ui.router',
    'demo.components.deposit',
    'demo.setup'
])

    .config(function ($stateProvider) {
        $stateProvider.state({
            name: 'deposit',
            url: '/deposit',
            component: 'demoDeposit'
        });
    });