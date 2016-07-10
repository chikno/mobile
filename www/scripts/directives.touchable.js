'use strict';
angular.module('app.directives').directive('touchable', function() {
  return {
    restrict: 'A',
    transclude: false,
    scope: false,
    link: function(scope, element, attrs){
    	element.on('touchstart', function(){
	        $(this).addClass('pressed');
	    }).on('touchend', function(){
	        $(this).removeClass('pressed');
	    });
    }
  }
});