/**
 * Created by mxgel on 5/4/17.
 */
angular.module('demo.components.home', [
    'demo.components.auth.logout',
    'demo.models.account.service'
])
    .component('demoHome', {
        templateUrl: 'views/home/main.html',
        controller: 'HomeController',
        bindings: {
            accounts: '<'
        }
    })
    .controller('HomeController', [function () {
        // Init
        var self = this;
        self.$onInit = function () {
            self.account = self.accounts.data[0];
        }


    }]);