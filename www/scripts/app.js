'use strict';
angular.module('app', ['ui.router','app.services', 'app.controllers', 'app.constants', 'app.directives', 'ngTouch'])


.run(function($rootScope, $state) {

$rootScope.$on('$stateChangeStart', function (event, next) {


});

    //phonegap deviceready function. init globals and local storage items here
    function onDeviceReady() {
    }
    document.addEventListener('deviceready', onDeviceReady, false);
})


.config(function($stateProvider, $urlRouterProvider) {

$stateProvider

.state('home', {
    url: '/home',
    templateUrl: 'views/home/home.html',
    controller: 'AppCtrl'
})

//note states
.state('notes', {
    abstract: true,
    url: '/notes',
    data: {
        authorizedRoles: ['*']
    },
    template: '<ui-view></ui-view>'
})
.state('notes.list', {
    url: '/list',
    templateUrl: 'views/notes/notes.list.html',
    controller: 'NoteListCtrl'
})
.state('notes.detail', {
    url: '/id/:id',
    templateUrl: 'views/notes/notes.detail.html',
    controller: 'NoteDetailCtrl'
})

$urlRouterProvider.otherwise('home');

});
