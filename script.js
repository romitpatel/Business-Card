// Code goes here
(function() {
  'use strict';

  angular
    .module('example', [])
    .controller('MainController', MainController)
    .directive('businessCard', businessCard);

  MainController.$inject = [];

  function MainController() {
    var mainVm = this;
    mainVm.line = 'Angular Js';


    mainVm.user = {
      "id": "cca42caa-e188-4263-bd7d-4e6d8078833f",
      "firstName": "Bernard",
      "lastName": "Daniel",
      "email": "Orville45@gmail.com",
      "address": {
        "street": "76416 Durgan Ranch",
        "city": "North Destinee",
        "zip": "66963",
        "state": "MN",
        "country": "USA"
      },
      "dateCreated": "2016-10-02T13:27:26.264Z",
      "company": {
        "name": "Morissette Inc",
        "website": "http://rafael.net"
      },
      "profilePic": "http://lorempixel.com/640/480/food"
    };


    mainVm.manager = {
      "id": "d036aaa3-ff69-4443-9ccc-f91979825a14",
      "firstName": "Monte",
      "lastName": "Weimann",
      "email": "Alena_Willms@gmail.com",
      "address": {
        "street": "48404 Ora Plain",
        "city": "Rhiannonfort",
        "zip": "54939",
        "state": "IA",
        "country": "USA"
      },
      "dateCreated": "2016-10-03T07:57:28.457Z",
      "company": {
        "name": "Johnston LLC",
        "website": "http://franco.com"
      },
      "profilePic": "http://lorempixel.com/640/480/abstract"
    };

    mainVm.logger = function() {
      console.dir(mainVm.user)
    }

  }

  function businessCard() {
    var directive = {
      transclude : true,
      replace: true,
      scope: {
        person: '=', //two way binding
        tagLine: '@', // one way binding
        logFn: '&'
      },
      // restrict:'E',
      templateUrl: 'business-card.tmpl.html',
      link: function(scope, elem, attrs) {
        elem.on('click', function() {
          scope.logFn();
        });
      }
    };

    return directive;
  }




})();