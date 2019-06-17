var selected = 0;
var posY = 70;
var links = [1,3,2];

class MainMenu
{
    constructor()
    {	
		this.sceneHUD = new THREE.Scene();
		this.cameraHUD =new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000 );
		//this.cameraHUD = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 50);
		this.cameraHUD.position.set(0,0,10);
		this.cameraHUD.lookAt(0,0,0);
		
		/*
		this.loader = new THREE.TextureLoader();
		this.texture = this.loader.load('../Assets/BackGround.png');
		this.texture.magFilter = THREE.NearestFilter;
		this.texture.minFilter = THREE.NearestFilter;
		this.texture.wrapS = THREE.RepeatWrapping;
		this.texture.wrapT = THREE.RepeatWrapping;
		this.texture.repeat.set(6,6);
		this.material = new THREE.MeshBasicMaterial({map: this.texture,transparent: true});
		this.geometry = new THREE.PlaneGeometry(2048,2048);	
		this.background = new THREE.Mesh(this.geometry,this.material);
		this.background.material.side = THREE.DoubleSide;
		this.sceneHUD.add(this.background);
		*/
		
		this.loader = new THREE.TextureLoader();
		this.texture = this.loader.load('../Assets/BackGround_2.png');
		this.texture.magFilter = THREE.NearestFilter;
		this.texture.minFilter = THREE.NearestFilter;
		this.material = new THREE.MeshBasicMaterial({map: this.texture,transparent: true});
		this.geometry = new THREE.PlaneGeometry(4000,2048);	
		this.background = new THREE.Mesh(this.geometry,this.material);
		this.mov = -1000;
		this.dir = 1;
		this.background.position.set(this.mov,0,0);
		this.background.material.side = THREE.DoubleSide;
		this.sceneHUD.add(this.background);
		
		this.title = new Item2D('../Assets/TetrisCraft_title.png',787,89);
		this.title.setPosition(0,(window.innerHeight/2) -150,0);
		this.sceneHUD.add(this.title.mesh);	
		
		this.playButton = new Item2D('../Assets/playButton.png',400,60);
		this.playButton.setPosition(0,70,0);
		this.sceneHUD.add(this.playButton.mesh);
		
		this.optionButton = new Item2D('../Assets/optionsButton.png',400,60);
		this.sceneHUD.add(this.optionButton.mesh);
		
		this.InstructButton = new Item2D('../Assets/instructionsButton.png',400,60);
		this.InstructButton.setPosition(0,-70,0);
		this.sceneHUD.add(this.InstructButton.mesh);	
		
		this.exitButton = new Item2D('../Assets/ExitButton.png',400,60);
		this.exitButton.setPosition(0,-140,0);
		this.sceneHUD.add(this.exitButton.mesh);
		
		this.selector = new Item2D('../Assets/selector.png',400,60* 1.15);
		this.selector.setPosition(0,posY,0);
		this.sceneHUD.add(this.selector.mesh);
		
		
			
	}
	
	Update()
    {
		this.mov = this.background.position.x+this.dir*0.2;
		this.background.position.set(this.mov ,0,0);
		
		if((this.mov >= 1000 && this.dir>0) || (this.mov <= -1000 && this.dir<0) )
		{
			this.dir = -this.dir;
		}
		
		this.selector.setPosition(0,posY,0);
		
    }

    Draw(buffer)
    {
        //buffer.render(this.scene,this.camera);
		buffer.render(this.sceneHUD,this.cameraHUD);
    }

}

document.addEventListener('keydown', function(event) 
{
  if (event.keyCode == 38)
  {
    if(selected > 0)
	{
		selected--;
		posY += 70;
	}
  }
  
  if (event.keyCode == 40)
  {
    if(selected < 3)
	{
		selected++;
		posY -= 70;
	}
  }
  
  if(event.keyCode == 32 || event.keyCode == 13)
  {
	  if(selected != 3)
	  {
		state = links[selected];
	  }
	  else
	  {
		  window.close();
	  }
  }
});





