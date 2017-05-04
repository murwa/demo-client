/**
 * Created by mxgel on 5/4/17.
 */
'use strict';
angular.module('demo.views.transfer', [
    'ui.router',
    'demo.components.transfer',
    'demo.setup',
    'demo.views.layouts'
])

    .config(function ($stateProvider) {
        $stateProvider.state({
            name: 'transfer',
            parent: 'layout',
            url: '/transfer/{url:string}',
            component: 'demoTransfer'
        });
    });