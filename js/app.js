var app = angular.module("myApp",['ngAnimate', 'ngRoute']);
app.config(function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
			controller: 'lbkgController',
			templateUrl: 'views/lb-kg-converter.html'
			})
			.when('/lb-kg-converter', {
			controller: 'lbkgController',
			templateUrl: 'views/lb-kg-converter.html'
			})
			.when('/list', {
			controller: 'listController',
			templateUrl: 'views/fruits.html'
			})
			.otherwise({
			redirectTo: '/'
			});
	});

	
app.controller("listController", function($scope){

	$scope.fruits = ["Apple","Apricot","Avocado","Banana","Breadfruit","Bilberry","Blackberry","Blackcurrant","Blueberry","Boysenberry","Cantaloupe","Currant","Cherry","Cherimoya","Cloudberry","Coconut","Cranberry","Cucumber","Damson","Date","Dragonfruit","Durian"];

	$scope.delete = function (index) {
		var deleteFruit = $scope.fruits[index];

		$scope.fruits.splice(index, 1);
	};
});

app.controller("lbkgController", function($scope){
	var param = 2.2046;
	var param2 = 0.035274;
	$scope.title="Weight Converter";
	
	$scope.calculaKg = function($event){
		var kg =  $scope.lb / param;
		$scope.kg = kg;		
	}
	$scope.calculaLb = function($event){
		var lb =  $scope.kg * param;
		$scope.lb = lb;
	}
	$scope.calculaG = function($event){
		var g =  $scope.oz / param2;
		$scope.g = g;
	}
	$scope.calculaOz = function($event){
		var oz =  $scope.g * param2;
		$scope.oz = oz;
	}
	
});


