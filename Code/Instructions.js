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
		this.arrowUpButton.setPosition(400,200+110,0);
		this.sceneHUD.add(this.arrowUpButton.mesh);
		
		this.arrowDownButton = new Item2D('../Assets/arrowDown.png',60,60);
		this.arrowDownButton.setPosition(400,240,0);
		this.sceneHUD.add(this.arrowDownButton.mesh);
		
		this.arrowLeftButton = new Item2D('../Assets/arrowLeft.png',60,60);
		this.arrowLeftButton.setPosition(400-70,240,0);
		this.sceneHUD.add(this.arrowLeftButton.mesh);
		
		this.arrowRigth = new Item2D('../Assets/arrowRigth.png',60,60);
		this.arrowRigth.setPosition(400+70,240,0);
		this.sceneHUD.add(this.arrowRigth.mesh);
		
		this.spaceKey = new Item2D('../Assets/spaceKey.png',59*3,20*3);
		this.spaceKey.setPosition(400+90,-150,0);
		this.sceneHUD.add(this.spaceKey.mesh)
		
		this.enterKey = new Item2D('../Assets/enterKey.png',40*3,48*3);
		this.enterKey.setPosition(400-90,-150,0);
		this.sceneHUD.add(this.enterKey.mesh)
		
		this.qKey = new Item2D('../Assets/qKey.png',60,60);
		this.qKey.setPosition(400-70,70,0);
		this.sceneHUD.add(this.qKey.mesh)
		
		this.wKey = new Item2D('../Assets/wKey.png',60,60);
		this.wKey.setPosition(400,70,0);
		this.sceneHUD.add(this.wKey.mesh)
		
		this.eKey = new Item2D('../Assets/eKey.png',60,60);
		this.eKey.setPosition(400+70,70,0);
		this.sceneHUD.add(this.eKey.mesh)

		//------- Texts
		this.titleTextMesh = this.InitText("Controls",0,140,260,140,60);
		this.titleTextMesh.position.set(430,430,2);
		this.sceneHUD.add(this.titleTextMesh);

		this.titleTextMesh = this.InitText("To move",0,140,240,110,40);
		this.titleTextMesh.position.set(450,230,2);
		this.sceneHUD.add(this.titleTextMesh);
		this.titleTextMesh = this.InitText("the pieces",0,140,240,110,40);
		this.titleTextMesh.position.set(440,190,2);
		this.sceneHUD.add(this.titleTextMesh);

		this.rotateTextMesh = this.InitText("To rotate",0,100,240,110,40);
		this.rotateTextMesh.position.set(450,30,2);
		this.sceneHUD.add(this.rotateTextMesh);
		this.titleTextMesh = this.InitText("the pieces",0,100,240,110,40);
		this.titleTextMesh.position.set(440,-10,2);
		this.sceneHUD.add(this.titleTextMesh);

		this.rotateTextMesh = this.InitText("To move down",0,100,240,110,40);
		this.rotateTextMesh.position.set(415,-240,2);
		this.sceneHUD.add(this.rotateTextMesh);
		this.titleTextMesh = this.InitText("the pieces",0,100,240,110,40);
		this.titleTextMesh.position.set(440,-280,2);
		this.sceneHUD.add(this.titleTextMesh);

		this.titleTextMesh = this.InitText("Credits",0,140,260,140,60);
		this.titleTextMesh.position.set(-300,430,2);
		this.sceneHUD.add(this.titleTextMesh);

		this.titleTextMesh = this.InitText("Nicolas Romero",0,140,260,140,40);
		this.titleTextMesh.position.set(-350,300,2);
		this.sceneHUD.add(this.titleTextMesh);
		this.titleTextMesh = this.InitText("Santiago Cervera",0,140,260,140,40);
		this.titleTextMesh.position.set(-350,200,2);
		this.sceneHUD.add(this.titleTextMesh);
		this.titleTextMesh = this.InitText("Gabriel Sepulveda",0,140,260,150,40);
		this.titleTextMesh.position.set(-350,100,2);
		this.sceneHUD.add(this.titleTextMesh);
		this.titleTextMesh = this.InitText("Cristobal Venegas",0,140,260,150,40);
		this.titleTextMesh.position.set(-350,0,2);
		this.sceneHUD.add(this.titleTextMesh);

		//------- Texts

		
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