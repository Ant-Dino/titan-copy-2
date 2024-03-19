// app.controllers.js
(function() {
    'use strict';

    angular
        .module('app.controllers', ['app.services'])
        .controller('UserController', UserController);

    UserController.$inject = ['UserService'];

    function UserController(UserService) {
        var vm = this;

        vm.users = [];
        vm.newUser = {};

        vm.getUsers = function() {
            UserService.getUsers()
                .then(function(data) {
                    vm.users = data;
                });
        };

        vm.submitUser = function() {
            UserService.submitUser(vm.newUser)
                .then(function(data) {
                    vm.users.push(data);
                    vm.newUser = {}; // Reset form
                });
        };

        // Initialize
        vm.getUsers();
    }
})();