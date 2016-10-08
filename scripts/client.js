var socket = io.connect('https://assistme-deividask.c9users.io');
socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });
  
console.log('Running');

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    this.suggestions = [
        "Dummy suggestion",
        "Dummy 2"
    ];
    
    socket.on('question', function (data) {
        suggestions.push(data);
    });
    
    $scope.SendData = function () {
        $http.post('https://assistme-deividask.c9users.io/api/answers', {text: $scope.example.text});
    };
    
});