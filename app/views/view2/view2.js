'use strict';

angular.module('myApp.view2', ['ui.router'])

    .config(function ($stateProvider) {
        $stateProvider.state({
            name: 'view2',
            url: '/view2',
            templateUrl: 'views/view2/view2.html',
            controller: 'View2Ctrl as ctrl'
        });
    })

.controller('View2Ctrl', [function() {
    //
}]);