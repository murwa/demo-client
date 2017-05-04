/**
 * Created by mxgel on 5/4/17.
 */
angular.module('demo.setup', [
    'ngMaterial',
])
    .config([
        '$mdIconProvider',
        '$mdThemingProvider',
        function ($mdIconProvider, $mdThemingProvider) {
            // Theming
            $mdThemingProvider.theme('blue')
                .primaryPalette('pink')
                .accentPalette('orange');
            // Icons
            $mdIconProvider
                .iconSet('action', 'icon-sets/action-icons.svg', 24);
        }]);