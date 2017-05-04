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
    .controller('WithdrawController', [function () {
        // Init
        var self = this;

        // Deposit
        self.save = function () {
            return self.service.save(self.item, {endpoint: 'withdraw', url: self.$transition$.params().url}).then(function (data) {
                self.account = data.data;
            }).catch(function (error) {
                console.log(error);
            })
        }
    }]);