var xPositions = [];
var yPositions = [];
var colorArray = [];

draw = function() //set up the starting page
{
fill(255);
fill(0); 
textSize(70);
text("RAIN RUN", 38, 133);
mouseClicked = function() //if the mouse is clicked...
    {
        draw = function() //...then start the game
        {
        background(204, 247, 255); //background blue 
        mousePressed = function() //if mouse is pressed, make a dot
            {
            xPositions.push(mouseX);
            yPositions.push(mouseY);
            colorArray.push(color(random(0, 255), random(0, 255), random(0, 255)));
            }; 
        for (var i = 0; i < xPositions.length; i++) //make the dots fall
            {
            noStroke();
            fill(colorArray[i]);
            ellipse(xPositions[i], yPositions[i], 10, 10);
            yPositions[i] += 2;
            if (yPositions[i] > 400) 
                {
                yPositions[i] = 0;
                }       
            }
        }; //close of inner draw function
    }; //close of mouse clicked function
}; //close of outer draw function













