/**
 * Created by mxgel on 5/4/17.
 */
angular.module('demo.components.auth', [
    'satellizer'
])
    .component('demoAuth', {
        templateUrl: 'views/auth/main.html',
        controller: 'AuthController',
        bindings: {
            //
        }
    })
    .controller('AuthController', ['$auth', function ($auth) {
        // Init
        var self = this;
        self.$onInit = angular.noop;

        // Auth
        self.auth = function () {
            return $auth.login(self.user).then(function (data) {
                console.log(data);
            }).catch(function (error) {
                console.log(error);
            });
        }
    }]);