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
    .controller('TransferController', [function () {
        // Init
        var self = this;

        // Deposit
        self.save = function () {
            return self.service.save(self.item, {endpoint: 'transfer', url: self.$transition$.params().url}).then(function (data) {
                self.account = data.data;
            }).catch(function (error) {
                console.log(error);
            })
        }
    }]);