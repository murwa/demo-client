/**
 * Created by mxgel on 5/4/17.
 */
'use strict';
angular.module('demo.views.home', [
    'ui.router',
    'demo.components.home',
    'demo.setup'
])

    .config(function ($stateProvider) {
        $stateProvider.state({
            name: 'home',
            url: '/home',
            component: 'demoHome'
        });
    });