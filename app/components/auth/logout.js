/**
 * Created by mxgel on 5/4/17.
 */
angular.module('demo.components.auth.logout', [
    'demo.setup'
])
    .component('demoLogout', {
        template: '<md-button class="md-raised md-warn" ng-click="$ctrl.logout()">Logout</md-button>',
        controller: 'LogoutController',
        bindings: {
            //
        }
    })
    .controller('LogoutController', ['$auth', '$state', function ($auth, $state) {
        // Init
        var self = this;
        self.logout = function () {
            $auth.logout().then(function () {
                return $state.go('auth');
            })
        }
    }])