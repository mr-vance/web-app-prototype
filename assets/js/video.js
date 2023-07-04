// Get the video modal
var modal = document.getElementById("videoModal");

// Get the button that opens the video modal
var btn = document.getElementById("videoButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  // Pause the video when the modal is closed
  var videoPlayer = document.getElementById("videoPlayer");
  videoPlayer.pause();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    // Pause the video when the modal is closed
    var videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.pause();
  }
}
