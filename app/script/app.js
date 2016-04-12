'use strict';


// Declare app level module which depends on filters, and services
angular.module( 'slideApp', [
    'ngRoute',
    'slideApp.filters',
    'slideApp.services',
    'slideApp.directives',
    'slideApp.controllers'
] );