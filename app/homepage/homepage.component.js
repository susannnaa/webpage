'use strict';


// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('getUsers').
  component('homepage', {
    templateUrl: 'homepage/homepage.template.html',
    controller: ['$http', '$scope',
      function PhoneDetailController($http, $scope) {
        $scope.results = [];
        var self = this;
        $http.get('homepage/userData.json').then(function (response) {
          self.users = response.data;
        });

        $scope.sendMessage = function () {
          localStorage.setItem('message', $scope.message);
          $scope.message = '';  
          $scope.results.push(localStorage.getItem('message'));
        }

      
        $scope.hide = 'true';
        $scope.send = function (user) {
          $scope.results = [];
          $scope.hide ='';
          user.value = 'true';
          $scope.show = user.value;
          $scope.user = user;
          $scope.name = user.name;
          $scope.lastName = user.lastName;
        }

        $scope.remove = function(){
          $scope.hide ='true';
        }
      }
    ]
  });