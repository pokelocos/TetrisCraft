class Cube
{
    constructor(x,y,z,materials)
    {
        this.position = new THREE.Vector3(x,y,z);
        var geometry = new THREE.BoxGeometry(gridSize,gridSize,gridSize);
        this.cube = new THREE.Mesh(geometry,materials);
        this.cube.setPostion(x*gridSize,y*gridSize,z*gridSize);
    }

    Update()
    {
        this.cube.setPostion(
            this.position.x*gridSize,
            this.position.y*gridSize,
            this.position.z*gridSize,
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
}