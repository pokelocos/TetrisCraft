class Game
{
    constructor(renderer)
    {
		this.scene = new THREE.Scene();
        this.shape;
		this.nextShapes = [];
		this.hintLimit = 3;
        this.world = new World(7,7,12);	
        
		this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 50);
		//var size = 78;
		//this.camera = new THREE.OrthographicCamera(window.innerWidth/size, -window.innerWidth/size, window.innerHeight/size, -window.innerHeight/size, 1, 100);

		this.camera.position.set(-7,12,-7);
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

		var light = new THREE.PointLight( 0xddffdd, 0.4 );
		light.position.set(-70,-70,70);
		this.scene.add( light );
		var light2 = new THREE.PointLight( 0xffdddd, 0.4 );
		light.position.set(-70,70,70);
		this.scene.add( light2 );
		var light3 = new THREE.PointLight( 0xddddff, 0.4 );
		light.position.set(70,-70,70);
		this.scene.add( light3 );

		this.ambient = new THREE.AmbientLight( 0xffffff, 0.1);
		//this.light.castShadow = true; 
		this.scene.add(this.ambient);

		//SAO
		this.composer = new THREE.EffectComposer(renderer);
		this.renderPass = new THREE.RenderPass( this.scene, this.camera );
		this.composer.addPass(this.renderPass);
		this.saoPass = new THREE.SAOPass( this.scene, this.camera, false, true );
		this.composer.addPass(this.saoPass);
		this.Start();
	}
	
	Start()
	{
		this.GenerateNewHints(0,0,0,1);
		this.SpawnShape();
	}

    Update()
    {
		this.world.Update();
		this.shape.Update();
		if(this.shape.position.y > 0)
		{
			this.shape.Translate(0,-gridSize,0);
		}
		else
		{
			this.SpawnShape();
		}
		console.log(false);
    }

    Draw(buffer)
    {
        buffer.render(this.scene,this.camera);
    }

    SpawnShape()
    {
		this.shape = this.nextShapes[0];
		this.shape.position.set((this.world.width - gridSize)/2,
								this.world.heigth,
								(this.world.deep - gridSize)/2);
		this.ReorderHints();
		this.GenerateNewHints(0,0,0,1);
	}
	
	GenerateNewHints(x,y,z,delta)
	{
		for(var i = 0; i < this.hintLimit; i++)
		{
			if(this.nextShapes[i] == null)
			{
				this.nextShapes[i] = new Shape(x + i*delta,y,z,
									shapes[Math.floor(Math.random()*shapes.length)],
									this.scene);
			}
		}
	}

	ReorderHints()
	{
		for(var i = 1; i < this.hintLimit; i++)
		{
			this.nextShapes[i-1] = this.nextShapes[i];
			this.nextShapes[i] = null;
		}
	}
}