class MainMenu
{
    constructor()
    {
		
		
		
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
        this.camera.position.z = 1;
        //this.camera.setUp();
		
		this.scene.add(this.camera);		
	}
	
	Update()
    {
		
    }

    Draw(buffer)
    {
        buffer.render(this.scene,this.camera);
    }

}