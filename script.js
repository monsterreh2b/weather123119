

$(document).ready(function(){
$("#getForecast").click(function() {
  var city = $("#city").val();
  var key = "6a45c48e46201ad932cb29b2f1863923";
   
  if(city!=''){

  }else{
    // $("#error").html('field cannot be empty');
    alert("field cannot be empty");
  }

  $.ajax({
    url:
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=imperial&appid=" +
      key,

    type: "GET",
    dataType: "jsonp",

    success: function(data) {
      var icon =
        "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      var weather = data.weather[0].description;
      var temp = Math.floor(data.main.temp) + "&#8457;"; 
      // console.log(data);
      $('.icon').attr('src', icon);
    $('.weather').append(weather);
     $('.temp').append(temp);  
     
     setTimeout(function() {
       window.location.reload(1);
     }, 5000);
    }
  });

});
});


// $.getJSON(
//   "https://api.openweathermap.org/data/2.5/weather?q=Cypress&units=imperial&appid=6a45c48e46201ad932cb29b2f1863923",
//   function (data) {
//     console.log(data);

//     var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
//     var weather = data.weather[0].description;  
//     var temp = Math.floor(data.main.temp) + "&#8457;";    
  
//     $('.icon').attr('src', icon);
//     $('.weather').append(weather);
//     $('.temp').append(temp);  
//   });