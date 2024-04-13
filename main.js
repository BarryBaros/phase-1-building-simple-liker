// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Wait for the DOM content to be fully loaded before executing the JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Select all heart icons
  const hearts = document.querySelectorAll('.like-glyph');

  // Iterate over each heart icon
  hearts.forEach(heart => {
    // Add a click event listener to each heart icon
    heart.addEventListener('click', function() {
      // Simulate a server call using the mimicServerCall function
      mimicServerCall()
        // If the server call is successful
        .then(() => {
          // Toggle the state of the heart icon
          if (heart.textContent === EMPTY_HEART) {
            heart.textContent = FULL_HEART;
            heart.classList.add('activated-heart');
          } else {
            heart.textContent = EMPTY_HEART;
            heart.classList.remove('activated-heart');
          }
        })
        // If there's an error with the server call
        .catch(error => {
          // Display the error message in the modal
          const modalMessage = document.getElementById('modal-message');
          modalMessage.textContent = error;
          // Show the modal by removing the 'hidden' class
          const modal = document.getElementById('modal');
          modal.classList.remove('hidden');
          // Hide the modal after 3 seconds by adding the 'hidden' class back
          setTimeout(() => {
            modal.classList.add('hidden');
          }, 3000);
        });
    });
  });
});





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
