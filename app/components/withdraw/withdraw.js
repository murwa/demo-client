/**
 * Created by mxgel on 5/4/17.
 */
angular.module('demo.components.withdraw', [])
    .component('demoWithdraw', {
        templateUrl: 'views/withdraw/main.html',
        controller: 'WithdrawController',
        bindings: {
            $transition$: '<',
            service: '<'
        }
    })
    .controller('WithdrawController', ['$state', function ($state) {
        // Init
        var self = this;
        self.$onInit = function () {
            self.url = self.$transition$.params().url;
        }

        // Deposit
        self.save = function () {
            return self.service.save(self.item, {endpoint: 'withdraw', url: self.url}).then(function (data) {
                self.account = data.data;
                return $state.go('home', {url: self.url})
            }).catch(function (error) {
                console.log(error);
            })
        }
    }]);