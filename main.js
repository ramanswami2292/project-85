//Create a reference for canvas an
canvas = document.getElementById('myCanvas') ;
ctx = canvas.getContext("2d");

//Give specific height and width to the car image
greencar_width = 75;
greencar_heught = 100;


background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
green_x = 5;
green_y = 225;

function add() {
	//upload car, and background images on the canvas.
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	green_imgTag = new Image ();
	green_imgTag.onload = uploadgreencar;
	green_imgTag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imagTag, 0,0, canvas.width, canvas.height,);

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’
	function uploadBackground() {
		ctx.drawImage(green_imgTag, greencar_x,green_y , greencar_width, green_height);
	}

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
}

function down()
{
	//Define function to move the car downward
}

function left()
{
	//Define function to move the car left side
}

function right()
{
	//Define function to move the car right side
}
