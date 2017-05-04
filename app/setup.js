/**
 * Created by mxgel on 5/4/17.
 */
angular.module('demo.setup', [
    'ngMaterial',
    'satellizer',
    'angular-loading-bar'
])
    .config([
        '$mdIconProvider',
        '$mdThemingProvider',
        '$authProvider',
        'env',
        function ($mdIconProvider, $mdThemingProvider, $authProvider, env) {
            // Theming
            $mdThemingProvider.theme('blue')
                .primaryPalette('pink')
                .accentPalette('orange');
            // Icons
            $mdIconProvider
                .iconSet('action', 'icon-sets/action-icons.svg', 24);

            // Auth
            $authProvider.loginUrl = env.apiUrl + '/auth'
        }])
    .constant('env', {
        apiUrl: 'https://demo-atm.herokuapp.com/api'
    });