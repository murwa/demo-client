/**
 * Created by mxgel on 5/4/17.
 */
angular.module('demo.views.layouts', [
    'ui.router',
    'demo.models.account.service'
])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state({
                name: 'layout',
                template: '<ui-view>',
                abstract: true,
                resolve: {
                    service: 'AccountService'
                },
                data: {
                    requireAuth: true,
                    redirectTo: 'auth'
                }
            });
    }]);