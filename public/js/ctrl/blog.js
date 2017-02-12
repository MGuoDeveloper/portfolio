(function(){
    'use strict';
    angular.module('comp.blog', [])
        .controller('blogctrl', function(){
            var vm = this;

        })
        .config(function($stateProvider, $locationProvider){
            $stateProvider
                .state('angular1vs2', {
                    url: '/blog/angular1vs2',
                    templateUrl: '/blog/angular1vs2.html',
                    controller: 'blogctrl as vm'
                });
            $locationProvider.html5Mode(true);
        })
})();