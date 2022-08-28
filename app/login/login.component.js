'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.module('setItem').component( 'login',{
  templateUrl: 'login/login.template.html',
  controller: function($scope){
      $scope.user = {
        email: '',
      };
  
      $scope.setItem = function(){
        localStorage.setItem('email', $scope.user.email);
      }
    }})
  
  