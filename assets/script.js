// Event listener for our cat-button
$("#cat-button").on("click", function () {
  var i;
  for (i = 0; i < 5; i++) {

    // Storing our giphy API URL for a random cat image
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats";

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })

      // After the data from the AJAX request comes back
      .then(function (response) {

        // Saving the image_original_url property
        var imageUrl = response.data.image_original_url;

        // Creating and storing an image tag
        var catImage = $("<img>");

        // Setting the catImage src attribute to imageUrl
        catImage.attr("src", imageUrl);
        catImage.attr("alt", "cat image");

        // Prepending the catImage to the images div
        $("#images").prepend(catImage);
      });
  }
});

// Event listener for our dog-button
$("#dog-button").on("click", function () {
  var i;
  for (i = 0; i < 5; i++) {
    // Storing our giphy API URL for a random dog image
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=dogs";

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })

      // After the data from the AJAX request comes back
      .then(function (response) {

        // Saving the image_original_url property
        var imageUrl = response.data.image_original_url;

        // Creating and storing an image tag
        var dogImage = $("<img>");

        // Setting the dogImage src attribute to imageUrl
        dogImage.attr("src", imageUrl);
        dogImage.attr("alt", "dog image");

        // Prepending the dogImage to the images div
        $("#images").prepend(dogImage);
      });
  }
});

// Event listener for our walrus-button
$("#walrus-button").on("click", function () {
  var i;
  for (i = 0; i < 5; i++) {
    // Storing our giphy API URL for a random walrus image
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=walrus";

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })

      // After the data from the AJAX request comes back
      .then(function (response) {

        // Saving the image_original_url property
        var imageUrl = response.data.image_original_url;

        // Creating and storing an image tag
        var walrusImage = $("<img>");

        // Setting the walrusImage src attribute to imageUrl
        walrusImage.attr("src", imageUrl);
        walrusImage.attr("alt", "walrus image");

        // Prepending the walrusImage to the images div
        $("#images").prepend(walrusImage);
      });
  }
});

// Event listener for our narwhal-button
$("#narwhal-button").on("click", function () {
  var i;
  for (i = 0; i < 5; i++) {
    // Storing our giphy API URL for a random narwhal image
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=narwhals";

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })

      // After the data from the AJAX request comes back
      .then(function (response) {

        // Saving the image_original_url property
        var imageUrl = response.data.image_original_url;

        // Creating and storing an image tag
        var narwhalImage = $("<img>");

        // Setting the narwhalImage src attribute to imageUrl
        narwhalImage.attr("src", imageUrl);
        narwhalImage.attr("alt", "narwhal image");

        // Prepending the narwhalImage to the images div
        $("#images").prepend(narwhalImage);
      });
  }
});

$("#widget-button").on("click", function () {
  var i;
  for (i = 0; i < 5; i++) {
    // Storing our giphy API URL for a random widget image
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=widget";

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })

      // After the data from the AJAX request comes back
      .then(function (response) {

        // Saving the image_original_url property
        var imageUrl = response.data.image_original_url;

        // Creating and storing an image tag
        var widgetImage = $("<img>");

        // Setting the widgetImage src attribute to imageUrl
        widgetImage.attr("src", imageUrl);
        widgetImage.attr("alt", "widget image");

        // Prepending the widgetImage to the images div
        $("#images").prepend(widgetImage);
      });
  }
});

$("#widget-button").on("click", function () {
  var i;
  for (i = 0; i < 5; i++) {
    // Storing our giphy API URL for a random widget image
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=widget";

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })

      // After the data from the AJAX request comes back
      .then(function (response) {

        // Saving the image_original_url property
        var imageUrl = response.data.image_original_url;

        // Creating and storing an image tag
        var widgetImage = $("<img>");

        // Setting the widgetImage src attribute to imageUrl
        widgetImage.attr("src", imageUrl);
        widgetImage.attr("alt", "widget image");

        // Prepending the widgetImage to the images div
        $("#images").prepend(widgetImage);
      });
  }
});

$("#batman-button").on("click", function () {
  var i;
  for (i = 0; i < 5; i++) {
    // Storing our giphy API URL for a random batman image
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=batman";

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })

      // After the data from the AJAX request comes back
      .then(function (response) {

        // Saving the image_original_url property
        var imageUrl = response.data.image_original_url;

        // Creating and storing an image tag
        var batmanImage = $("<img>");

        // Setting the batmanImage src attribute to imageUrl
        batmanImage.attr("src", imageUrl);
        batmanImage.attr("alt", "batman image");

        // Prepending the batmanImage to the images div
        $("#images").prepend(batmanImage);
      });
  }
});


$(document).ready(function () {
  $("#create-button").click(function () {
    createInput();
  })
});
function createInput(){
  var buttonName = prompt("Please enter search query", "")
  var $input = $('<input type="button" value= '+ buttonName + ' />');
  $input.appendTo($("body"));
}