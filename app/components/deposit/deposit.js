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
    .controller('DepositController', ['$state', function ($state) {
        // Init
        var self = this;
        self.$onInit = function () {
            self.url = self.$transition$.params().url;
        }

        // Deposit
        self.save = function () {
            return self.service.save(self.item, {endpoint: 'deposit', url: self.url}).then(function (data) {
                self.account = data.data;
                return $state.go('home', {url: self.url});
            }).catch(function (error) {
                console.log(error);
            })
        }
    }]);