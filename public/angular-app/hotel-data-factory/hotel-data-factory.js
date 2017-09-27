angular.module('meanhotel').factory('hotelDataFactory', hotelDataFactory);

function hotelDataFactory($http){
  return {
    hotelList: hotelList,
    hotelDisplay: hotelDisplay,
    postReview: postReview
  };

  function hotelList(){
    return $http.get('/api/hotels?count=10').then(complete).catch(failed);
  }

  function hotelDisplay(id){
    return $http.get('/api/hotels/' + id).then(complete).catch(failed);
  }

  function postReview(id, review){
    // console.log("inside postReview " + id + " : " + review.name + review.rating + review.review);
    return $http.post('/api/hotels/' + id + '/reviews', review).then(complete).catch(failed);
  }

  function complete(response){
      console.log("response.data == " + response.data.name);
      return response.data;
  }

  function failed(error){
      console.log("error.data.name == " + error.data.name);
  }
}
