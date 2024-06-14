var camera, scene, renderer;
var geometry, material, mesh;
var controller;
var state = 0;
/*
var animate = window.requestAnimationFrame || window.webkitRequestAnimationFrame || 
window.mozRequestAnimationFrame || function (callback) 
{
        window.setTimeout(callback, 1000 / 60)
};*/

//Scenes
var game,main,instructions,options; // esto se puede cambiar a lista

//init();
//loop();

function init(canvas,scale)
{
	this.mySound = new Audio('Sounds/MinecraftMusicfullPlaylist.mp3');
	this.mySound.play();
	
	main = new MainMenu();
	instructions = new Instructions();
	options = new Options();	
	this.controller = new Controller();
	//this.renderer = new THREE.WebGLRenderer({antialias:true, alpha: true});
	this.renderer = new THREE.WebGLRenderer({ 
		canvas: canvas, antialias: true, alpha: true 
	});
	this.renderer.autoClear = false;
    //this.renderer.setSize(window.innerWidth, window.innerHeight);
	this.renderer.setSize(canvas.width, canvas.height);
	this.renderer.shadowMap.enabled = true;
	this.renderer.shadowMap.type = THREE.PCFSoftShadowMap; 
	//document.body.appendChild(this.renderer.domElement);

	game = new Game(this.renderer,scale);
	//game = new Game(renderer);
}

function loop() 
{
	requestAnimationFrame(loop);	
	controller.Update();
	//this.renderer.clear();
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
		case 3:
			options.Update();
			options.Draw(this.renderer);
			break;
		default:
			Conosole.Log("[Scene 'id' error, id: "+state+" not found]");
			break;
	}
}


requestAnimationFrame(loop, 1000 / 60);


