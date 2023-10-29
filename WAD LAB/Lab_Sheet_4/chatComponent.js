angular.module('myApp', [])
    .component('chatBox', {
        templateUrl: 'chatBox.html',
        controller: 'ChatController'
    })
    .controller('ChatController', function ($scope) {
        $scope.messages = [];
        $scope.sendMessage = function () {
            const userMessage = $scope.newMessage.toLowerCase();
            if (userMessage != '') {
                $scope.messages.push({ text: "User: " + $scope.newMessage, sender: 'user' });
            }


            if (userMessage === 'hi') {
                $scope.messages.push({ text: "Bot: " + 'Hello', sender: 'bot' });
            }
            else if (userMessage === 'hello') {
                $scope.messages.push({ text: "Bot: " + 'Hi', sender: 'bot' });
            }


            $scope.newMessage = ''; // Clear the input field after sending
        };
    });
