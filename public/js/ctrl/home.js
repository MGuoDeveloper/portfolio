(function(){
    'use strict';
    angular.module('comp.home', [])
        .controller('homectrl', function($scope){

        })
        .config(function($stateProvider, $locationProvider){
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'js/ctrl/home.html',
                    controller: 'homectrl as vm'
                });
            $locationProvider.html5Mode(true);
        })
})();