class Shape
{
    constructor(x,y,z,cubePos)
    {
        this.position = new THREE.Vector3(x,y,z);
        this.cubePos = cubePos;
        this.cubes = [];
    }

    Update()
    {
        this.Translate(0,-1,0)
    }

    Translate(x,y,z)
    {
        this.x += x;
        this.y += y;
        this.z += z;
    }

    Rotate()
    {
        //Trabajar con cubePos
    }
}