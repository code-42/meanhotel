angular.module('meanhotel').controller('HotelsController', HotelsController);

function HotelsController(hotelDataFactory){
    var vm = this;
    vm.title = 'MEAN Hotel';
    hotelDataFactory.hotelList().then(function (response) {
      console.log("response == " + response);
	 	  vm.hotels = response;
    });
}

// function HotelsController($http){
//     var vm = this;
//     vm.title = 'MEAN Hotel';
//     $http.get('/api/hotels').then(function (response) {
// 	 	vm.hotels = response.data;
//     });
// }
