class Options
{
    constructor()
    {
		this.sceneHUD = new THREE.Scene();
		this.cameraHUD = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000 );
		//this.cameraHUD = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 50);
		this.cameraHUD.position.set(0,0,10);
		this.cameraHUD.lookAt(0,0,0);
		
		this.loader = new THREE.TextureLoader();
		this.texture = this.loader.load('Assets/BackGround.png');
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
		
		this.pacefulTexture = this.loader.load('Assets/peacefulButton.png');
		this.pacefulTexture.magFilter = THREE.NearestFilter;
		this.pacefulTexture.minFilter = THREE.NearestFilter;	
		this.easyTexture = this.loader.load('Assets/easyButton.png');
		this.easyTexture.magFilter = THREE.NearestFilter;
		this.easyTexture.minFilter = THREE.NearestFilter;	
		this.normalTexture = this.loader.load('Assets/normalButton.png');
		this.normalTexture.magFilter = THREE.NearestFilter;
		this.normalTexture.minFilter = THREE.NearestFilter;	
		this.hardTexture = this.loader.load('Assets/hardButton.png');
		this.hardTexture.magFilter = THREE.NearestFilter;
		this.hardTexture.minFilter = THREE.NearestFilter;	
		
		this.dificultButton = new Item2D('Assets/normalButton.png',400,60);
		this.dificultButton.setPosition(0,70,0);
		this.sceneHUD.add(this.dificultButton.mesh);
		
		this.exitButton = new Item2D('Assets/BackButton.png',400,60);
		this.exitButton.setPosition(0,0,0);
		this.sceneHUD.add(this.exitButton.mesh);
		
		this.selector = new Item2D('Assets/selector.png',400,60* 1.15);
		this.selector.setPosition(0,-70,0);
		this.sceneHUD.add(this.selector.mesh);
		
		this.selected = 0;
		this.posY = 70;
		
		this.clickSound = new Audio('Sounds/click.mp3');
		this.selectSound = new Audio('Sounds/harp.mp3');	

		this.OptionsTitle = this.InitText("Options",0,100,260,140,80);
		this.OptionsTitle.position.set(10,300,2);
		this.sceneHUD.add(this.OptionsTitle);
	}
	
	Update()
    {
		
		this.selector.setPosition(0,this.posY,0);
		
		if (keyDown.includes(38) && this.selected > 0)
		{
			this.clickSound.play();
			this.selected--;
			this.posY += 70;
		}
		else if (keyDown.includes(40) && this.selected < 1)
		{
			this.clickSound.play();
			this.selected++;
			this.posY -= 70;
		}
		
		if (keyDown.includes(32) || keyDown.includes(13))
		{
			this.selectSound.play();
			if(this.selected == 0)
			{
				switch(dificulty)
				{
					case 1:
						this.dificultButton.mesh.material.map  = this.easyTexture;
						dificulty = 2;
						break;
					case 2:
						this.dificultButton.mesh.material.map  = this.normalTexture;
						dificulty = 3;
						break;
					case 3:
						this.dificultButton.mesh.material.map  = this.hardTexture;
						dificulty = 4;
						break;
					case 4:
						this.dificultButton.mesh.material.map  = this.pacefulTexture;
						dificulty = 1;
						break;
					default:
						this.dificultButton.mesh.material.map  = this.normalTexture;
						dificulty = 3;
						break;
				}
			}
			else
			{
				state = 0;
			}
		}
    }

    Draw(buffer)
    {
        buffer.render(this.sceneHUD,this.cameraHUD);
	}
	
	InitText(sentence,x,y,width,height,fontSize)
	{
		var canvas1 = document.createElement('canvas');
		var context1 = canvas1.getContext('2d');
		context1.font = fontSize+"px MinecraftFont";
		context1.fillStyle = "#ffffff";
		context1.fillText(sentence, x, y);	
		var texture1 = new THREE.Texture(canvas1) 
		texture1.needsUpdate = true;		
		var material1 = new THREE.MeshBasicMaterial( {map: texture1, side:THREE.DoubleSide } );
		material1.transparent = true;
		var textMesh = new THREE.Mesh(new THREE.PlaneGeometry(width,height),material1);
		textMesh.needsUpdate = true;
		return textMesh;
	}

}