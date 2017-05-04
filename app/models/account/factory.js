/**
 * Created by mxgel on 5/4/17.
 */
angular.module('demo.models.account.factory', [
    'ngResource'
])
    .factory('Account', ['$resource', 'env', function ($resource, env) {
        return $resource(env.apiUrl + '/accounts/:url/:endpoint', {url: '@url'}, {
            get: {
                method: 'get',
                cache: false
            }
        });
    }]);