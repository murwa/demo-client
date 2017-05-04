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
            accounts: '<',
            $transition$: '<'
        }
    })
    .controller('HomeController', [function () {
        // Init
        var self = this;
        self.$onInit = function () {
            var url = self.$transition$.params().url;
            if (url === null) {
                self.account = self.accounts.data[0];
            } else {
                angular.forEach(self.accounts.data, function (item) {
                    if (item.url === url) {
                        return self.account = item;
                    }
                });
            }
        }
    }]);