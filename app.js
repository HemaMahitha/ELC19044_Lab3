var app=angular.module('myApp',[]);

app.controller('MyController',['$scope',function($scope){
    $scope.form={};
    $scope.addReview=function(){
        $scope.reviews.push($scope.form);
    }
    $scope.reviews=[
        {
            comment:'good service',
            by:'bhavana.kanna99@gmail.com'
        },
        {
            comment:'well done to the team',
            by:'random.89@gmail.com'
        }
    ];
}]);


