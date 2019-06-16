class MainMenu
{
    constructor()
    {	
		this.sceneHUD = new THREE.Scene();
		this.cameraHUD =new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000 );
		//this.cameraHUD = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 50);
		this.cameraHUD.position.set(0,0,10);
		this.cameraHUD.lookAt(0,0,0);
		
		//this.raycaster = new THREE.Raycaster();
		//this.mouse = new THREE.Vector2();
		
		//		'../Assets/TetrisCraft_title.png'
		
				
			
		
		/*
        this.geometry = new THREE.PlaneGeometry( 3, 1.5);
		this.material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
        this.background = new THREE.Mesh(this.geometry,this.material);
		this.sceneHUD.add(this.background);
		
		this.geometry1 = new THREE.PlaneGeometry( 3, 1.5);
		this.material1 = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
        this.button1 = new THREE.Mesh(this.geometry1,this.material1);
		this.sceneHUD.add(this.button1);
		
		this.geometry2 = new THREE.PlaneGeometry( 3, 1.5);
		this.material2 = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
        this.button2 = new THREE.Mesh(this.geometry2,this.material2);
		this.sceneHUD.add(this.button2);
		
		this.geometry3 = new THREE.PlaneGeometry( 3, 1.5);
		this.material3 = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
        this.button3 = new THREE.Mesh(this.geometry3,this.material3);
		this.sceneHUD.add(this.button3);
		
		this.geometry4 = new THREE.PlaneGeometry( 3, 1.5);
		this.material4 = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
        this.selector = new THREE.Mesh(this.geometry4,this.material4);
		this.sceneHUD.add(this.selector);
		*/
		
		this.title = new Item2D('../Assets/TetrisCraft_title.png',787,89);
		this.sceneHUD.add(this.title.mesh);	
		
		this.playButton = new Item2D('../Assets/TetrisCraft_title.png',787,89);
		this.sceneHUD.add(this.playButton.mesh);	
		
		this.optionButton = new Item2D('../Assets/TetrisCraft_title.png',787,89);
		this.sceneHUD.add(this.optionButton.mesh);
		
		this.InstructButton = new Item2D('../Assets/TetrisCraft_title.png',787,89);
		this.sceneHUD.add(this.InstructButton.mesh);	
		
		this.exitButton = new Item2D('../Assets/TetrisCraft_title.png',787,89);
		this.sceneHUD.add(this.exitButton.mesh);	
		
			
	}
	
	Update()
    {
		
    }

    Draw(buffer)
    {
        //buffer.render(this.scene,this.camera);
		buffer.render(this.sceneHUD,this.cameraHUD);
    }
	
	/*
	onMouseMove( event )
	{

	// calculate mouse position in normalized device coordinates
	// (-1 to +1) for both components

	this.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	this.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

	}
	*/
}




