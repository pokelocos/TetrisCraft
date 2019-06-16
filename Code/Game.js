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

		this.cube = new Cube(1,0,1, 1);
		this.cube2 = new Cube(1,2,1, 1);

		this.scene.add(this.cube.mesh);
		this.scene.add(this.cube2.mesh);

		this.light = new THREE.AmbientLight( 0xffffff, 1);
		this.light.position.set( 0, 10, 0 );
		this.light.castShadow = true; 
		this.scene.add(this.light);

		//SAO
		this.composer = new THREE.EffectComposer(renderer);
		this.renderPass = new THREE.RenderPass( this.scene, this.camera );
		this.composer.addPass(this.renderPass);
		this.saoPass = new THREE.SAOPass( scene, camera, false, true );
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