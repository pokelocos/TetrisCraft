class Cube
{
    constructor(x,y,z,id)
    {
        this.position = new THREE.Vector3(x,y,z);
        var geometry = new THREE.BoxGeometry(gridSize,gridSize,gridSize);
        this.mesh = new THREE.Mesh(geometry,materials[id]);

		this.mesh.castShadow = true; 
		this.mesh.receiveShadow = true;
        
		this.Update(this.mesh);
    }

    OnShapeUpdate(shape)
    {
        this.mesh.position.set(
            this.position.x * gridSize + shape.position.x * gridSize + gridSize/2,
            this.position.y * gridSize + shape.position.y * gridSize + gridSize/2,
            this.position.z * gridSize + shape.position.z * gridSize + gridSize/2,
        );
    }

    Update()
    {
		this.mesh.position.set(
				this.position.x * gridSize,
				this.position.y * gridSize + gridSize/2,
				this.position.z * gridSize,
			);
    }

    Translate(x,y,z)
    {
        this.position.add(new THREE.Vector3(x,y,z));
    }

    Translate(vector3)
    {
        this.position.add(vector3);
    }

    Rotate(euler)
    {
		if(this.position.x == 0 && this.position.y == 0 && this.position.z == 0 ) {return;}
        this.position.applyEuler(euler);
		this.position.set(Math.round(this.position.x),Math.round(this.position.y),Math.round(this.position.z));
    }

    RotateX(x)
    {
        this.Rotate(new THREE.Euler(THREE.Math.degToRad(90)*x,0,0));
    }

    RotateY(y)
    {
        this.Rotate(new THREE.Euler(0,THREE.Math.degToRad(90)*y,0));
    }

    RotateZ(z)
    {
        this.Rotate(new THREE.Euler(0,0,THREE.Math.degToRad(90)*z));
    }
}