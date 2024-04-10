//eye div 
let eye = document.querySelectorAll(".eye");


//mousemove for devices with mouse 
let events = ["mousemove", "touchmove"]; 

//Check for touch screen 

function isTouchDevice(){
 try{
    document.createEvent("TouchEvent"); 
    return true; 

}catch (e){
  return false; 
}

}


//the same function for both events 

events.forEach((eventType) => {
    document.body.addEventListener(eventType, (event) => {
        eye.forEach(eye => {
            //getBoundingClientRect() returns the position relative to the viewport 
            let eyeX = eye.getBoundingClientRect().left + eye.clientWidth /2; 
            let eyeY= eye.getBoundingClientRect().top + eye.clientHeight/2; 
            console.log(eyeX, eyeY); 

            //ClientX clientY returns the position of client's cursor from top left of the screen 

            let x = !isTouchDevice() ? event.clientX : event.touches[0].clientX;
           let y = !isTouchDevice() ? event.clientY : event.touches[0].clientY;
        
    
       
        // Substract x position of mouse from x position of eye and y postion of mouse from y position of eye. 
        //use atan2() returns angle in radiants
        let radian = Math.atan2(x - eyeX, y- eyeY);

        // convert Radians t Degrees 

        let rotationDegrees= radian * (180 / Math.PI) * -1 + 180; 
        console.log(rotationDegrees); 

        // Rotate the eye 

        eye.style.transform = " rotate("  + rotationDegrees + " deg)" ; 
      });
    });
});
