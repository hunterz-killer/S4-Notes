var app = angular.module('StudentRecordsApp', []);

app.controller('StudentController', function($scope) {
    // Sample student data (you can replace this with your data source)
    var students = [
        { id: 1, name: 'John Doe', rollNumber: '12345', course: 'Computer Science' },
        { id: 2, name: 'Jane Smith', rollNumber: '54321', course: 'Mathematics' },
        { id: 3, name: 'Alice Johnson', rollNumber: '67890', course: 'Physics' }
    ];

    $scope.getStudent = function() {
        // Find the student with the given ID
        var student = students.find(function(student) {
            return student.id === parseInt($scope.studentId);
        });

        // Display the student information if found, or show an error message
        if (student) {
            $scope.student = student;
        } else {
            $scope.student = null;
            alert('Student not found.');
        }
    };
});
