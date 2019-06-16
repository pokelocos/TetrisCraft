class Game
{
    constructor(renderer)
    {
        this.shape;
        this.nextShape;
        this.world = new World(7,7,12);
        
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 50);
		//var size = 78;
		//this.camera = new THREE.OrthographicCamera(window.innerWidth/size, -window.innerWidth/size, window.innerHeight/size, -window.innerHeight/size, 1, 100);

		this.camera.position.set(-7,7,7);
		this.camera.lookAt(0,0,0);

		var gridHelper = new THREE.GridHelper( 7, 7 );
		this.scene.add( gridHelper );

		for(var y = 0; y < 7 ; y++){
			for(var x = -3; x < 4; x++){
				for(var z = -3; z < 4; z++){
					if(Math.random() > 0.7){
						var cube = new Cube(x,y,z, Math.floor(Math.random() * 11) + 1);
						this.scene.add(cube.mesh);
					}
				}
			}
		}

		var light = new THREE.PointLight( 0xddffdd, 0.4 );
		light.position.z = 70;
		light.position.y = - 70;
		light.position.x = - 70;
		this.scene.add( light );
		var light2 = new THREE.PointLight( 0xffdddd, 0.4 );
		light2.position.z = 70;
		light2.position.x = - 70;
		light2.position.y = 70;
		this.scene.add( light2 );
		var light3 = new THREE.PointLight( 0xddddff, 0.4 );
		light3.position.z = 70;
		light3.position.x = 70;
		light3.position.y = - 70;
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
    }

    Update()
    {
        this.world.Update();
       // this.shape.Update();
    }

    Draw(buffer)
    {
        buffer.render(this.scene,this.camera);
    }

    SpawnShape()
    {
        this.shape = new Shape(
            this.world.width/(2*gridSize),
            this.world.height/gridSize,
            this.world.deep/(2*gridSize),
            shapes[Math.floor(Math.random()*shapes.length)],
            this.scene);
    }
}