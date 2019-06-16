var camera, scene, renderer;
var geometry, material, mesh;
var state = 1;

//Scenes
var game,main,instructions,options; // esto se puede cambiar a lista

init();
loop();

function init() 
{
	main = new MainMenu();
	instructions = new Instructions();
	options = new Options();	

	this.renderer = new THREE.WebGLRenderer({antialias:true});
    this.renderer.setSize(window.innerWidth, window.innerHeight);
	this.renderer.shadowMap.enabled = true;
	this.renderer.shadowMap.type = THREE.PCFSoftShadowMap; 
	document.body.appendChild(this.renderer.domElement);

	game = new Game(renderer);
}

function loop() 
{
	requestAnimationFrame(loop);
	switch(state)
	{
		case 0:
			main.Update();
			main.Draw(this.renderer);
			break;
		case 1:
			game.Update();
			game.Draw(this.renderer);
			break;
		case 2:
			instructions.Update();
			instructions.Draw(this.renderer);
			break;
		case 2:
			options.Update();
			Option.Draw(this.renderer);
			break;
		default:
			Conosole.Log("[Scene 'id' error, id: "+state+" not found]");
			break;
	}
}

