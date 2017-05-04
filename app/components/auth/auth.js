/**
 * Created by mxgel on 5/4/17.
 */
angular.module('demo.components.auth', [
    'satellizer',
    'demo.setup'
])
    .component('demoAuth', {
        templateUrl: 'views/auth/main.html',
        controller: 'AuthController',
        bindings: {
            //
        }
    })
    .controller('AuthController', ['$auth', '$state', function ($auth, $state) {
        // Init
        var self = this;
        self.$onInit = angular.noop;

        // Auth
        self.auth = function () {
            return $auth.login(self.user).then(function (data) {
                return $state.go('home');
            }).catch(function (error) {
                console.log(error);
            });
        }
    }]);