var page = require('webpage').create();
page.open('http://localhost:3000/#/hotel/592b5de54b13a6f77c0fe1b5', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    console.log("status == " + status);
    var ua = page.evaluate(function() {
    return document.getElementsByname('name').value;
});
console.log(ua);
  }
  phantom.exit();
});
