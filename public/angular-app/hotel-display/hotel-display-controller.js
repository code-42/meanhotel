angular.module('meanhotel').controller('HotelController', HotelController);

function HotelController($route, $routeParams, hotelDataFactory){
  var vm = this;
  var id = $routeParams.id;
  console.log("1.id == " + id);
  vm.isSubmitted = false;

  hotelDataFactory.hotelDisplay(id).then(function (response) {
    // vm.hotel = response.data;
    // vm.stars = response.data.stars;
    // .data does not work, try without
 	  vm.hotel = response;
    vm.stars = _getStarRating(response.stars);
  });

  function _getStarRating(stars){
    return new Array(stars);
  }

  vm.addReview = function(){
    var postData = {
      name: vm.name,
      rating: vm.rating,
      review: vm.review
    };
    if (vm.reviewForm.$valid){
      console.log("2.inside if (vm.reviewForm.$valid){... ");
      hotelDataFactory.postReview(id, postData).then(function(response){
        console.log("3.inside vm.addReview " + id + " " + postData + " " + response);
        // if (response.status === 200){
          // console.log("inside response.status ");
          $route.reload();
        // }
      }).catch(function(error){
        console.log(error);
      });
    } else {
      vm.isSubmitted = true;
    }
  };
}


// function HotelController($routeParams, hotelDataFactory){
//   var vm = this;
//   var id = $routeParams.id;
//   console.log("id == " + id);
//   hotelDataFactory.hotelDisplay(id).then(function (response) {
//     // vm.hotel = response.data;
//     // vm.stars = response.data.stars;
//     // .data does not work, try without
//  	  vm.hotel = response;
//     vm.stars = _getStarRating(response.stars);
//   });
//
//   function _getStarRating(stars){
//     return new Array(stars);
//   }
// }

// function HotelController($http, $routeParams){
//     var vm = this;
//     var id = $routeParams.id;
//     console.log("id == " + id);
//     $http.get('/api/hotels/' + id).then(function (response) {
// 	 	vm.hotel = response.data;
//     });
// }
