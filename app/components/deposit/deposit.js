/**
 * Created by mxgel on 5/4/17.
 */
angular.module('demo.components.deposit', [])
    .component('demoDeposit', {
        templateUrl: 'views/deposit/main.html',
        controller: 'DepositController',
        bindings: {
            $transition$: '<',
            service: '<'
        }
    })
    .controller('DepositController', [function () {
        // Init
        var self = this;

        // Deposit
        self.save = function () {
            return self.service.save(self.item, {endpoint: 'deposit', url: self.$transition$.params().url}).then(function (data) {
                self.account = data.data;
            }).catch(function (error) {
                console.log(error);
            })
        }
    }]);