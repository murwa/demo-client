/**
 * Created by mxgel on 5/4/17.
 */
'use strict';
angular.module('demo.views.withdraw', [
    'ui.router',
    'demo.components.withdraw',
    'demo.setup'
])

    .config(function ($stateProvider) {
        $stateProvider.state({
            name: 'withdraw',
            url: '/withdraw',
            component: 'demoWithdraw'
        });
    });