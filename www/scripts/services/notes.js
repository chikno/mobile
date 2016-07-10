'use strict';
angular.module('app.services').factory('NoteService', function($http) {
  return {
    all: function() {
        return $http({
            url: 'http://localhost:3000',
            //headers: RootService.headers(JSON.parse(window.localStorage.user)),
            method: 'GET'
        });
    },

    get: function(id) {
        return $http({
            url: 'http://localhost:3000'+ id,
            method: 'GET'
          });
    }
  };
});
