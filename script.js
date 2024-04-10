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
    document.body.addEventListener(eventType, event => {
        eye.forEach(eye => {
            //getBoundingClientRect() returns the position relative to the viewport 
            let eyeX = eye.getBoundingClientRect().left + eye.clientWidth /2; 
            let eyeY= eye.getBoundingClientRect().top + eye.clientHeight/2; 
            console.log(eyeX, eyeY); 

            //ClientX clientY returns the position of client's cursor from top left of the screen 

            const x = !isTouchDevice() ? event.clientX : event.touchless[0].clientX;
            const y = !isTouchDevice() ? event.clientY : event.touchless[0].clientY;
            console.log(x, y);
        });

        
        // Substract x position of mouse from x position of eye and y postion of mouse from y posiion of eye. 
        //use atan2() returns angle in radiants




    });
});
