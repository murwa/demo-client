/**
 * Created by mxgel on 5/4/17.
 */
'use strict';
angular.module('demo.views.deposit', [
    'ui.router',
    'demo.components.deposit',
    'demo.setup',
    'demo.views.layouts'
])

    .config(function ($stateProvider) {
        $stateProvider.state({
            name: 'deposit',
            parent: 'layout',
            url: '/deposit/{url:string}',
            component: 'demoDeposit'
        });
    });