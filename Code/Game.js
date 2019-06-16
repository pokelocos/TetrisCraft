class Game
{
    constructor()
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
        //this.camera.setUp();

        this.scene.add(this.camera);

       // this.renderer = new THREE.WebGLRenderer({antialias: true});
       // this.renderer.setSize(window.innerWidth, window.innerHeight);
        //document.body.appendChild(this.renderer.domElement);

		var gridHelper = new THREE.GridHelper( 7, 7 );
		this.scene.add( gridHelper );

		this.cube = new Cube(1,0,1);
		this.scene.add(this.cube.mesh);
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