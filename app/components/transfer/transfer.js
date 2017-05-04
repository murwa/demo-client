/**
 * Created by mxgel on 5/4/17.
 */
angular.module('demo.components.transfer', [])
    .component('demoTransfer', {
        templateUrl: 'views/transfer/main.html',
        controller: 'TransferController',
        bindings: {
            $transition$: '<',
            service: '<'
        }
    })
    .controller('TransferController', ['$state', function ($state) {
        // Init
        var self = this;
        self.$onInit = function () {
            self.url = self.$transition$.params().url;
        }

        // Deposit
        self.save = function () {
            return self.service.save(self.item, {endpoint: 'transfer', url: self.url}).then(function (data) {
                self.account = data.data;
                return $state.go('home', {url: self.url});
            }).catch(function (error) {
                console.log(error);
            })
        }
    }]);