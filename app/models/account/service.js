/**
 * Created by mxgel on 5/4/17.
 */
angular.module('demo.models.account.service', [
    'demo.models.account.factory'
])
.service('AccountService', ['Account', function (Account) {
    // Init
    var self = this;

    // Get
    self.get = function (params) {
        return Account.get(params).$promise;
    }
}]);