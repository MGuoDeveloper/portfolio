(function(){
    'use strict';
    angular.module('geek', [
        'ui.router',
        'comp.home',
        'comp.blog',
        'ser.home'
    ]).config(function($urlRouterProvider){
        $urlRouterProvider.otherwise('/');
    });
})();