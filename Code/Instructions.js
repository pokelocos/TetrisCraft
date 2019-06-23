class Instructions
{
    constructor()
    {
		
		this.sceneHUD = new THREE.Scene();
		this.cameraHUD = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000 );
		//this.cameraHUD = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 50);
		this.cameraHUD.position.set(0,0,10);
		this.cameraHUD.lookAt(0,0,0);
		
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
		
		this.exitButton = new Item2D('../Assets/BackButton.png',400,60);
		this.exitButton.setPosition(0,(window.innerHeight/-2) +70,0);
		this.sceneHUD.add(this.exitButton.mesh);
		
		this.selector = new Item2D('../Assets/selector.png',400,60* 1.15);
		this.selector.setPosition(0,(window.innerHeight/-2) +70,0);
		this.sceneHUD.add(this.selector.mesh);
		
		this.arrowUpButton = new Item2D('../Assets/arrowUp.png',60,60);
		this.arrowUpButton.setPosition(400,150+70,0);
		this.sceneHUD.add(this.arrowUpButton.mesh);
		
		this.arrowDownButton = new Item2D('../Assets/arrowDown.png',60,60);
		this.arrowDownButton.setPosition(400,150,0);
		this.sceneHUD.add(this.arrowDownButton.mesh);
		
		this.arrowLeftButton = new Item2D('../Assets/arrowLeft.png',60,60);
		this.arrowLeftButton.setPosition(400-70,150,0);
		this.sceneHUD.add(this.arrowLeftButton.mesh);
		
		this.arrowRigth = new Item2D('../Assets/arrowRigth.png',60,60);
		this.arrowRigth.setPosition(400+70,150,0);
		this.sceneHUD.add(this.arrowRigth.mesh);
		
		this.spaceKey = new Item2D('../Assets/spaceKey.png',59*3,20*3);
		this.spaceKey.setPosition(400+90,-150,0);
		this.sceneHUD.add(this.spaceKey.mesh)
		
		this.enterKey = new Item2D('../Assets/enterKey.png',40*3,48*3);
		this.enterKey.setPosition(400-90,-150,0);
		this.sceneHUD.add(this.enterKey.mesh)
		
	}
	
	Update()
    {
		if (keyDown.includes(32) || keyDown.includes(13))
		{
			state = 0;
		}
    }

    Draw(buffer)
    {
        buffer.render(this.sceneHUD,this.cameraHUD);
    }

}