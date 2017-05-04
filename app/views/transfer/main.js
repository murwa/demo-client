/**
 * Created by mxgel on 5/4/17.
 */
'use strict';
angular.module('demo.views.transfer', [
    'ui.router',
    'demo.components.transfer',
    'demo.setup'
])

    .config(function ($stateProvider) {
        $stateProvider.state({
            name: 'transfer',
            url: '/transfer',
            component: 'demoTransfer'
        });
    });