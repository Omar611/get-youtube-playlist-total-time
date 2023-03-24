// This script calculates the total length of a YouTube playlist.
// It works on the YouTube playlist page.
// copy the code below and paste it into the browser console (F12)
// Credits: Original code by Omar Tarek <omartarek611@outlook.com>

// get all video lengths from the page and convert them to seconds
function getVideoLengths() {
  var videoLengths = [];
  var videoLengthElements = document.querySelectorAll(".style-scope.ytd-thumbnail-overlay-time-status-renderer");
  for (var i = 0; i < videoLengthElements.length; i++) {
    var videoLengthElement = videoLengthElements[i];
    var videoLength = videoLengthElement.innerHTML;
    videoLengths.push(videoLength);
  }
  videoLengths = videoLengths.map(function (item) {
    if (item) {
      var time = item.split(":");
      return parseInt(time[0]) * 60 + parseInt(time[1]);
    }
  }).filter(function (item) {
    return item;
  });
  return videoLengths;
}

// collect all video lengths
var videoLengths = getVideoLengths();


// calculate total video length
var totalVideoLength = videoLengths.reduce(function (a, b) {
  return a + b;
});

// convert total video length to hours, minutes and seconds
var hours = Math.floor(totalVideoLength / 3600);
var minutes = Math.floor(totalVideoLength % 3600 / 60);
var seconds = Math.floor(totalVideoLength % 3600 % 60);

// display total video length
console.log("Total video length: " + hours + " hours, " + minutes + " minutes and " + seconds + " seconds");


