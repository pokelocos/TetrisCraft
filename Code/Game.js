var dificulty = 1;

class Game
{
    constructor(renderer)
    {
		this.sceneHUD = new THREE.Scene();
		this.cameraHUD =new THREE.OrthographicCamera( window.innerWidth / - 20, window.innerWidth / 20, window.innerHeight / 20, window.innerHeight / - 20, 1, 1000 );
		//this.cameraHUD = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 50);
		this.cameraHUD.position.set(10,10,10);
		this.cameraHUD.lookAt(0,0,0);
		
		this.barhud = new Item2D('../Assets/barHUD.png',54.6,8);
		this.barhud.setPosition(0,(-window.innerHeight/2  + 10)/10,0);
		this.barhud.mesh.lookAt(10,10,10);
		this.sceneHUD.add(this.barhud.mesh);
		this.score = 0;

		//----------------------Score	
		this.scoreTextMesh = this.InitScoreText();
		this.scoreTextMesh.position.set(4,-26,0);
		this.scoreTextMesh.rotation.set(0,Math.PI/4,0);	
		this.sceneHUD.add(this.scoreTextMesh);
		//----------------------Score

		this.scene = new THREE.Scene();
        this.shape;
		this.shape_proyection;
		this.nextShapes = [];
		this.hintLimit = 3;
		this.world = new World(7,7,12, this.scene);
        
		this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 50);
		//var size = 78;
		//this.camera = new THREE.OrthographicCamera(window.innerWidth/size, -window.innerWidth/size, window.innerHeight/size, -window.innerHeight/size, 1, 100);

		this.camera.position.set(-7,18,-7);
		this.camera.lookAt(3.5,6,3.5);


		var gridHelper = new THREE.GridHelper( 7, 7 );
		gridHelper.position.set(3.5,0,3.5);
		this.scene.add( gridHelper );
		/*
		for(var y = 0; y < 7 ; y++){
			for(var x = -3; x < 4; x++){
				for(var z = -3; z < 4; z++){
					if(Math.random() > 0.7){
						var cube = new Cube(x,y,z, Math.floor(Math.random() * 11) + 1);
						this.scene.add(cube.mesh);
					}
				}
			}
		}*/

		/*
		var light = new THREE.PointLight( 0xddffdd, 0.4 );
		light.position.set(-70,-70,70);
		this.scene.add( light );
		
		var light2 = new THREE.PointLight( 0xffdddd, 0.4 );
		light.position.set(-70,70,70);
		this.scene.add( light2 );
		var light3 = new THREE.PointLight( 0xddddff, 0.4 );
		light.position.set(70,-70,70);
		this.scene.add( light3 );
		*/
		
		this.ambientHUD = new THREE.AmbientLight( 0xffffff, 1);
		//this.light.castShadow = true; 
		this.sceneHUD.add(this.ambientHUD);

		this.ambient = new THREE.AmbientLight( 0xffffff, 1);
		//this.light.castShadow = true; 
		this.scene.add(this.ambient);

		//SAO
		this.composer = new THREE.EffectComposer(renderer);
		this.renderPass = new THREE.RenderPass( this.scene, this.camera );
		this.composer.addPass(this.renderPass);
		this.saoPass = new THREE.SAOPass( this.scene, this.camera, false, true );
		this.composer.addPass(this.saoPass);
		
		this.speed  = 0.1 * dificulty;
        this.time = 0.0;
		
		this.gameOver = false;
		
		this.Start();
	}
	
	Start()
	{
		this.GenerateNewHints(-10,-10,-10,1);
		this.SpawnShape();
	}

    Update()
    {	
		if(this.gameOver){console.log("game over");return;}
		//this.world.Update();
		this.shape.Update();
		this.shape_proyection.Update();
		
		this.shape_proyection.SetPos(this.shape.position.x,this.shape.position.y,this.shape.position.z);

		while(!this.CheckShapeCollision(0,-1,0, this.shape_proyection)){
			this.shape_proyection.Translate(0,-1,0);
		}

		// Intento bajar, si esta vacio bajo
		if(this.time >= (1/this.speed)*10 || press.includes(32))
        {
			this.time = 0;
			
			if(!this.CheckShapeCollision(0,-1,0, this.shape))
			{
				this.shape.Translate(0,-1,0);
			}
			else
			{
				if(!this.CheckTopCollision())
				{
					this.ShapeToWorld();
					this.SpawnShape();
				}
				else
				{
					this.gameOver = true;
					// perdiste
				}
			}
		}
		
		
		//up
		if(keyDown.includes(38))
		{
			if(!this.CheckShapeCollision(1,0,0, this.shape))
			{
				this.shape.Translate(1,0,0);
			}
		} 
		//left
		else if(keyDown.includes(37))
		{
			if(!this.CheckShapeCollision(0,0,-1, this.shape))
			{
				this.shape.Translate(0,0,-1);
			}
		} 
		//rigth
		else if(keyDown.includes(39))
		{
			if(!this.CheckShapeCollision(0,0,1, this.shape))
			{
				this.shape.Translate(0,0,1);
			}
		} 
		//down
		else if(keyDown.includes(40))
		{
			if(!this.CheckShapeCollision(-1,0,0, this.shape))
			{
				this.shape.Translate(-1,0,0);
			}
		} 
		//keyQ
		if(keyDown.includes(81))
		{
			this.shape.Rotate(new THREE.Vector3(1,0,0));
			this.shape_proyection.Rotate(new THREE.Vector3(1,0,0));
			if(this.CheckShapeCollision(0,0,0, this.shape))
			{
				this.shape_proyection.Rotate(new THREE.Vector3(3,0,0));
				this.shape.Rotate(new THREE.Vector3(3,0,0));
			}
			
		} 
		//keyW
		else if(keyDown.includes(87))
		{
			this.shape.Rotate(new THREE.Vector3(0,1,0));
			this.shape_proyection.Rotate(new THREE.Vector3(0,1,0));
			if(this.CheckShapeCollision(0,0,0, this.shape))
			{
				this.shape_proyection.Rotate(new THREE.Vector3(0,3,0));
				this.shape.Rotate(new THREE.Vector3(0,3,0));
			}
		} 
		//keyE
		else if(keyDown.includes(69))
		{
			this.shape.Rotate(new THREE.Vector3(0,0,1));
			this.shape_proyection.Rotate(new THREE.Vector3(0,0,1));
			if(this.CheckShapeCollision(0,0,0, this.shape))
			{
				this.shape_proyection.Rotate(new THREE.Vector3(0,0,3));
				this.shape.Rotate(new THREE.Vector3(0,0,3));
			}
		} 
		
		this.time++;
    }

    Draw(buffer)
    {
        buffer.render(this.scene,this.camera);
		buffer.render(this.sceneHUD,this.cameraHUD);
    }

    SpawnShape()
    {
		if(this.shape_proyection != null)
			this.shape_proyection.Destroy(this.scene);

		for(var i = 0; i < this.nextShapes[0].cubes.length; i++)
		{
			this.sceneHUD.remove(this.nextShapes[0].cubes[i].mesh);
			this.scene.add(this.nextShapes[0].cubes[i].mesh);
		}
		
		this.shape = this.nextShapes[0];					
		this.shape.position.set((this.world.width - gridSize)/2,
								this.world.heigth,
								(this.world.deep - gridSize)/2);

		this.shape_proyection = this.shape.Clone(this.scene);
		this.shape_proyection.ChangueMaterial(materials.length-1);


		this.ReorderHints();
		this.GenerateNewHints(0,0,0,1);
	}
	
	CheckShapeCollision(dx,dy,dz, shap)
	{
		for(var i = 0; i < shap.cubes.length; i++)
		{
			var x = shap.cubes[i].position.x + shap.position.x;
			var y = shap.cubes[i].position.y + shap.position.y;
			var z = shap.cubes[i].position.z + shap.position.z;
			
			if(y + dy < 0 || x + dx < 0 || z + dz <0 ||
				x + dx >= this.world.width|| z + dz >= this.world.deep)
			{
				return true;
			}

			if(this.world.map[x+dx][z+dz][y+dy] != undefined)
			{
				return true;
			}
		}
		return false;
	}

	CheckTopCollision()
	{
		for(var i = 0; i < this.shape.cubes.length; i++)
		{
			if(this.shape.cubes[i].position.y + this.shape.position.y >= this.world.heigth)
			{
				return true;
			}
		}
		return false;
	}

	ShapeToWorld()
	{
		for(var i = 0; i < this.shape.cubes.length; i++)
		{
			var x = this.shape.cubes[i].position.x + this.shape.position.x;
			var y = this.shape.cubes[i].position.y + this.shape.position.y;
			var z = this.shape.cubes[i].position.z + this.shape.position.z;
			this.world.AddToWorld(x,y,z,this.shape.cubes[i]);
		}
	}
	
	GenerateNewHints(x,y,z,delta)
	{
		for(var i = 0; i < this.hintLimit; i++)
		{
			if(this.nextShapes[i] == null)
			{
				this.nextShapes[i] = new Shape(x + i*delta,y,z,
									shapes[Math.floor(Math.random()*shapes.length)],
									this.sceneHUD);
			}	
		}
	}

	ReorderHints()
	{
		for(var i = 1; i < this.hintLimit; i++)
		{
			this.nextShapes[i-1] = this.nextShapes[i];
			this.nextShapes[i] = undefined;
		}
	}

	InitScoreText()
	{
		var canvas1 = document.createElement('canvas');
		var context1 = canvas1.getContext('2d');
		context1.font = "30px MinecraftFont";
		context1.fillStyle = "#000000";
		context1.fillText('Score: ' + this.score, 50, 50);	
		var texture1 = new THREE.Texture(canvas1) 
		texture1.needsUpdate = true;		
		var material1 = new THREE.MeshBasicMaterial( {map: texture1, side:THREE.DoubleSide } );
		material1.transparent = true;
		var textMesh = new THREE.Mesh(new THREE.PlaneGeometry(22,14),material1);
		textMesh.needsUpdate = true;
		return textMesh;
	}

	UpdateScoreText(score)
	{
		this.score+=score;
		this.sceneHUD.remove(this.scoreTextMesh);
		this.scoreTextMesh = this.InitScoreText();
		this.scoreTextMesh.position.set(20,0,-20);
		this.scoreTextMesh.rotation.set(0,Math.PI/4,0);	
		this.sceneHUD.add(this.scoreTextMesh);
	}
}