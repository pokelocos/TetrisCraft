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
		
		this.dificultButton = new Item2D('../Assets/normalButton.png',400,60);
		this.dificultButton.setPosition(0,-70,0);
		this.sceneHUD.add(this.dificultButton.mesh);
		
		this.exitButton = new Item2D('../Assets/BackButton.png',400,60);
		this.exitButton.setPosition(0,-140,0);
		this.sceneHUD.add(this.exitButton.mesh);
		
		this.selector = new Item2D('../Assets/selector.png',400,60* 1.15);
		this.selector.setPosition(0,-70,0);
		this.sceneHUD.add(this.selector.mesh);
		
	}
	
	Update()
    {

    }

    Draw(buffer)
    {
        buffer.render(this.sceneHUD,this.cameraHUD);
    }

}