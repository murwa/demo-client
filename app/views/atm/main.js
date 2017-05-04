/**
 * Created by mxgel on 5/4/17.
 */
'use strict';
angular.module('demo.views.atm', [
    'ui.router'
])

    .config(function ($stateProvider) {
        $stateProvider.state({
            name: 'atm',
            url: '/',
            templateUrl: 'views/atm/main.html',
            controller: 'View1Ctrl as ctrl'
        });
    })

    .controller('View1Ctrl', [function () {
        //
    }]);