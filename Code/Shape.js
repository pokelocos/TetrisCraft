class Shape
{
    constructor(x,y,z,cubePos,scene)
    {
        this.position = new THREE.Vector3(x,y,z);
        this.cubePos = cubePos;
        this.cubes = [];
        var type = Math.floor(Math.random()*materials.length);
        for(var i = 0; i < cubePos.length; i++)
        {
            cubes[i] = new Cube(cubePos[i].x,
                                cubePos[i].y,
                                cubePos[i].z,
                                type);
            scene.add(cubes[i]);
        }
    }

    Update()
    {
        this.Translate(0,-gridSize,0);
        for(var cube in cubes)
        {
            cube.Update(this);
        }
    }

    Translate(x,y,z)
    {
        this.x += x;
        this.y += y;
        this.z += z;
    }

    Rotate(rotation)
    {
        for(var cube in cubes)
        {
            cube.RotateX(rotation.x);
            cube.RotateY(rotation.y);
            cube.RotateZ(rotation.z);
        }
    }
}