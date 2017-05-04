/**
 * Created by mxgel on 5/4/17.
 */
'use strict';
angular.module('demo.views.withdraw', [
    'ui.router',
    'demo.components.withdraw',
    'demo.setup',
    'demo.views.layouts'
])

    .config(function ($stateProvider) {
        $stateProvider.state({
            name: 'withdraw',
            parent: 'layout',
            url: '/withdraw/{url:string}',
            component: 'demoWithdraw'
        });
    });