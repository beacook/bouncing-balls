
var velocityx = 1;
var velocityx2 = 1;
var velocityx3 = 1.5;
var positionx = 100;
var positionx2 = 100;
var positionx3 = 100;
var positionxmax = 600;
var positionxmax2 = 600;
var positionxmax3 = 600;
var positionxmin = 100;
var positionxmin2 = 100;
var positionxmin3 = 100;
var time = 1;
var ball1 = document.getElementById('ball1');
var ball2 = document.getElementById('ball2');
var ball3 = document.getElementById('ball3');
var reverse_x = true;
var reverse_x2 = true;
var reverse_x3 = true;
/// after seeing the ball move in the horizontal direction, now duplicate variables for y axis. 
var velocityy = 1;
var velocityy2 = 1.5;
var velocityy3 = 1;
var positiony = 100;
var positiony2 = 100;
var positiony3 = 100;
var positionymax = 500;
var positionymax2 = 500;
var positionymax3 = 500;
var positionymin = 100;
var positionymin2 = 100;
var positionymin3 = 100;
var time = 1;
var reverse_y = true;
var reverse_y2 = true;
var reverse_y3 = true;
/// add 2 more variables for each when adding 2 more balls

function moveBall () { ///after adding y variables this function is still very similar just built on
if(reverse_x) {
positionx = positionx + velocityx; /// saying that if the reverse_x is true, then the position will be moving in a positive direction (+)
ball1.style.left = positionx + 'px'; } 
else {
    positionx = positionx - velocityx; ///here saying if reverse_x is FALSE, then the ball moves in negative dir
    ball1.style.left = positionx +'px';
}
if (reverse_y) {
    positiony = positiony + velocityy;
    ball1.style.top = positiony + 'px';
} 
else {
    positiony = positiony - velocityy;
    ball1.style.top = positiony + 'px';
}
if (
    positionx > positionxmax ||
    positionx === positionxmin
) {reverse_x = !reverse_x;} ///this is saying that IF the position is greater than position x max, aka 500 OR the position is equal to position min, aka 0, then reverse_x is false so will need to move directions
if (
    positiony > positionymax ||
    positiony === positionymin
    ) {reverse_y = !reverse_y;}
}

function moveBall2 () { ///after adding y variables this function is still very similar just built on
    if(reverse_x2) {
    positionx2 = positionx2 + velocityx2; /// saying that if the reverse_x is true, then the position will be moving in a positive direction (+)
    ball2.style.left = positionx2 + 'px'; } 
    else {
        positionx2 = positionx2 - velocityx2; ///here saying if reverse_x is FALSE, then the ball moves in negative dir
        ball2.style.left = positionx2 +'px';
    }
    if (reverse_y2) {
        positiony2 = positiony2 + velocityy2;
        ball2.style.top = positiony2 + 'px';
    } 
    else {
        positiony2 = positiony2 - velocityy2;
        ball2.style.top = positiony2 + 'px';
    }
    if (
        positionx2 > positionxmax2 ||
        positionx2 === positionxmin2
    ) {reverse_x2 = !reverse_x2;} ///this is saying that IF the position is greater than position x max, aka 500 OR the position is equal to position min, aka 0, then reverse_x is false so will need to move directions
    if (
        positiony2 > positionymax2 ||
        positiony2 === positionymin2
        ) {reverse_y2 = !reverse_y2;}
    }

    function moveBall3 () { ///after adding y variables this function is still very similar just built on
        if(reverse_x3) {
        positionx3 = positionx3 + velocityx3; /// saying that if the reverse_x is true, then the position will be moving in a positive direction (+)
        ball3.style.left = positionx3 + 'px'; } 
        else {
            positionx3 = positionx3 - velocityx3; ///here saying if reverse_x is FALSE, then the ball moves in negative dir
            ball3.style.left = positionx3 +'px';
        }
        if (reverse_y3) {
            positiony3 = positiony3 + velocityy3;
            ball3.style.top = positiony3 + 'px';
        } 
        else {
            positiony3 = positiony3 - velocityy3;
            ball3.style.top = positiony3 + 'px';
        }
        if (
            positionx3 > positionxmax3 ||
            positionx3 === positionxmin3
        ) {reverse_x3 = !reverse_x3;} ///this is saying that IF the position is greater than position x max, aka 500 OR the position is equal to position min, aka 0, then reverse_x is false so will need to move directions
        if (
            positiony3 > positionymax3 ||
            positiony3 === positionymin3
            ) {reverse_y3 = !reverse_y3;}

        }
setInterval (moveBall, time);
setInterval (moveBall2, time);
setInterval (moveBall3, time);

/// before we added var reverse_x, the ball was moving but infinitely in a right direction because we hadn't set any limits. 
/// var reverse_x will help add a limit. 