class Cube
{
    constructor(x,y,z)
    {
        this.position = new THREE.Vector3(x,y,z);
        var geometry = new THREE.BoxGeometry(gridSize,gridSize,gridSize);
		var material = new THREE.MeshBasicMaterial({color: 0xff0000});
       // this.cube = new THREE.Mesh(geometry,materials[type]);
        var mesh = new THREE.Mesh(geometry,material);
        //this.cube.setPostion(x*gridSize,y*gridSize,z*gridSize);
    }

    Update(shape)
    {
        this.mesh.setPostion(
            this.position.x*gridSize + shape.position.x*gridSize,
            this.position.y*gridSize + shape.position.y*gridSize,
            this.position.z*gridSize + shape.position.z*gridSize,
        );
    }

    Update()
    {

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
        this.position.applyEuler(euler);
    }

    RotateX(x)
    {
        this.Rotate(new THREE.Euler(THREE.deg(90)*x,0,0));
    }

    RotateY(y)
    {
        this.Rotate(new THREE.Euler(0,THREE.deg(90),0)*y);
    }

    RotateZ(z)
    {
        this.Rotate(new THREE.Euler(0,0,THREE.deg(90)*z));
    }
}