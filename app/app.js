'use strict';
angular.module('coupllector', [
    // load your modules here
    'main', // starting with the main module
]).run(run);
run.$inject = ['stateHandler', 'translationHandler', '$http', '$localStorage'];

function run(stateHandler, translationHandler, $http, $localStorage) {
    stateHandler.initialize();
        translationHandler.initialize();
        $http.defaults.headers.post['X-CSRF-TOKEN'] = $localStorage['X-CSRF-TOKEN'];
}
