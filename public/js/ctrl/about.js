(function(){
    'use strict';
    angular.module('comp.about', [])
        .controller('aboutctrl', function(){
            var vm = this;

        })
        .config(function($stateProvider, $locationProvider){
            $stateProvider
                .state('about', {
                    url: '/about',
                    templateUrl: '/js/ctrl/about.html',
                    controller: 'aboutctrl as vm'
                });
            $locationProvider.html5Mode(true);
        })
})();