var camera, scene, renderer;
var geometry, material, mesh;
var state = 1;

//Scenes
var game,main,instructions,options; // esto se puede cambiar a lista

init();
loop();

function init() 
{
	game = new Game();
	//main = new MainMenu();
	//instructions = new Instructions();
	//options = new Options();	
}

function loop() 
{
	requestAnimationFrame(loop);
	switch(state)
	{
		case 0:
			main.Update();
			main.Draw();
			break;
		case 1:
			game.Update();
			game.Draw();
			break;
		case 2:
			instructions.Update();
			instructions.Draw();
			break;
		case 2:
			options.Update();
			Option.Draw();
			break;
		default:
			Conosole.Log("[Scene 'id' error, id: "+state+" not found]");
			break;
	}
}

