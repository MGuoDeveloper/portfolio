(function(){
    'use strict';
    angular.module('geek', [
        'ui.router',
        'comp.home',
        'comp.apps',
        'comp.about',
        'comp.blog',
        'ser.home',
        'ser.app'
    ]).config(function($urlRouterProvider){
        $urlRouterProvider.otherwise('/');
    });
})();