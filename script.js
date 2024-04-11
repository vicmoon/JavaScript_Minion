document.addEventListener("DOMContentLoaded", function() {
  // Select the eye elements
  let eyes = document.querySelectorAll(".eye");

  // Check for touch screen
  function isTouchDevice() {
      try {
          document.createEvent("TouchEvent");
          return true;
      } catch (e) {
          return false;
      }
  }

  // Event types to listen for
  let events = ["mousemove", "touchmove"];

  // Add event listeners for both mousemove and touchmove
  events.forEach(eventType => {
      document.body.addEventListener(eventType, event => {
          eyes.forEach(eye => {
              // Get the position of the eye
              let eyeRect = eye.getBoundingClientRect();
              let eyeX = eyeRect.left + eyeRect.width / 2;
              let eyeY = eyeRect.top + eyeRect.height / 2;

              // Get the position of the cursor
              let x = !isTouchDevice() ? event.clientX : event.touches[0].clientX;
              let y = !isTouchDevice() ? event.clientY : event.touches[0].clientY;

              // Calculate the angle
              let radian = Math.atan2(y - eyeY, x - eyeX);
              let rotationDegrees = radian * (180 / Math.PI) * -1 + 180;

              // Apply the rotation
              eye.style.transform = "rotate(" + rotationDegrees + "deg)";
          });
      });
  });
});
