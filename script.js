window.onload = function() {
  var jobTitle = document.getElementById('jobTitle');
  var newText = "front end developer";
  var currentText = jobTitle.innerText;

  function replaceText(index) {
    if (index >= 0) {
      jobTitle.innerText = currentText.substring(0, currentText.length - index - 1) + newText.charAt(newText.length - index - 1);
      setTimeout(function() {
        replaceText(index - 1);
      }, 50); // Adjust this value to control the speed of typing effect
    } else {
      setTimeout(function() {
        replaceOriginalText(newText.length - 1);
      }, 3000); // Delay before reverting back
    }
  }

  function replaceOriginalText(index) {
    if (index >= 0) {
      jobTitle.innerText = newText.substring(0, newText.length - index - 1) + currentText.charAt(currentText.length - index - 1);
      setTimeout(function() {
        replaceOriginalText(index - 1);
      }, 50); // Adjust this value to control the speed of typing effect
    } else {
      setTimeout(function() {
        replaceText(newText.length - 1);
      }, 3000); // Delay before starting next animation
    }
  }

  replaceText(newText.length - 1); // Start the animation immediately
};

  // slider

$(document).ready(function(){
  $('.slider').slick({
    dots: true, // Show navigation dots
    infinite: true, // Enable infinite loop
    speed: 500, // Animation speed
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1 // Number of slides to scroll
  });
});
