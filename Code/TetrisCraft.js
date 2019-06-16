var camera, scene, renderer;
var geometry, material, mesh;
var state = 0;

//Scenes
var game,main,instructions,options; // esto se puede cambiar a lista

init();
loop();

function init() 
{
	game = new Game();
	main = new MainMenu();
	instructions = new Instructions();
	options = new Options();	
	
	this.renderer = new THREE.WebGLRenderer();
        //renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(this.renderer.domElement);
}

function loop() 
{
	requestAnimationFrame(loop);
	switch(state)
	{
		case 0:
			main.Update();
			main.Draw(this.render);
			break;
		case 1:
			game.Update();
			game.Draw(this.render);
			break;
		case 2:
			instructions.Update();
			instructions.Draw(this.render);
			break;
		case 2:
			options.Update();
			Option.Draw(this.render);
			break;
		default:
			Conosole.Log("[Scene 'id' error, id: "+state+" not found]");
			break;
	}
}

