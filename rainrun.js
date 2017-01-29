
var xPositions = [];
var yPositions = [];
var colorArray = [];

draw = function() //set up the starting page
    {
    background(0);
    fill(255);
    textSize(70);
    text("RAIN RUN", 38, 133);
    textSize(20);
    text("Click anywhere to continue", 100, 175);
    textSize(15);
    text("You could click here.", 50, 200);
    text("Or here.", 200, 225);
    text("Or here.", 175, 275);
    text("Or here.", 300, 300);
    text("I wouldn't care." , 100, 325);
    text("Just click SOMEWHERE, 'cause I'm getting impatient.", 25, 350);
    text("Still here? Well, MOVE IT!", 150, 375);
    mouseClicked = function() //if the mouse is clicked...
        {
            //starter dot
            xPositions.push(random(0,400));
            yPositions.push(0);
            colorArray.push(color(random(0, 255), random(0, 255), random(0, 255)));
    
            draw = function() //...then start the game
                {
                    
                background(204, 247, 255); //background blue 
                for (var i = 0; i < xPositions.length; i++) //make the dots fall
                    {
                    noStroke();
                    fill(255, 0, 0);
                    rect(75, 370, 30, 30);
                    fill(colorArray[i]);
                    ellipse(xPositions[i], yPositions[i], 10, 10);
                    yPositions[i] += 2;
                    if (yPositions[0] > 400) 
                        {
                        var delay = random(-400, 0);
                            
                        xPositions.push(random(0,400));
                        yPositions.push(delay);
                        colorArray.push(color(random(0, 255), random(0, 255), random(0, 255)));
                        
                        }
                    if (yPositions[i] > 400) 
                        {
                        yPositions[i] = 0;
                        xPositions[i] = random(0, 400);
                        }               
                }//close of for loop
            }; //close of inner draw function
        }; //close of mouse clicked function
    }; //close of outer draw function
