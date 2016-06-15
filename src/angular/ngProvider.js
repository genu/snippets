'use strict';

angular.module('__app__').provider('__providerName__', function (__dependencies__) {
    var config = {};

    this.$get = function(){
        return config;
    };
});
