(function(){
    'use strict';
    angular.module('geek', [
        'ui.router',
        'comp.home'
    ]).config(function($urlRouterProvider){
        $urlRouterProvider.otherwise('/home');
    });
})();