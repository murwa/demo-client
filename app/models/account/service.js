/**
 * Created by mxgel on 5/4/17.
 */
angular.module('demo.models.account.service', [
    'demo.models.account.factory'
])
.service('AccountService', ['Account', '$q', function (Account, $q) {
    // Init
    var self = this;

    // Get
    self.get = function (params) {
        return Account.get(params).$promise;
    }

    // Save
    self.save = function (value, params) {
        return $q(function (resolve, reject) {
            return angular.extend(new Account(), value).$save(params, resolve, reject);
        });
    }
}]);