class Game
{
    constructor()
    {
        this.shape;
        this.nextShape;
        this.world;
        
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
        this.camera.position.z = 1;
        this.camera.setUp();

        this.scene.add(this.camera);

        this.renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

    }

    Update()
    {
        world.Update();
        shape.Update();
    }

    Draw()
    {

        this.world.Draw();
        this.shape.Draw();
        this.nextShape.Draw();
        this.renderer.render(this.scene,this.camera);
    }


}