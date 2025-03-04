class Item2D
{
    constructor(ruteImage,w,h)
    {
		this.loader = new THREE.TextureLoader();
		this.texture = this.loader.load(ruteImage);
		this.texture.magFilter = THREE.NearestFilter;
		this.texture.minFilter = THREE.NearestFilter;	
		this.material = new THREE.MeshBasicMaterial({map: this.texture,transparent: true});
		
		this.geometry = new THREE.PlaneGeometry(w,h);
        this.mesh = new THREE.Mesh(this.geometry,this.material);
		this.mesh.material.side = THREE.DoubleSide;
	}
	
	Update()
    {

    }
	
	setPosition(x,y,z)
	{
		this.mesh.position.set(x,y,z);
	}
}