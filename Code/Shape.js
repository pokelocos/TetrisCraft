class Shape
{
    constructor(x,y,z,cubePos,scene)
    {
        this.position = new THREE.Vector3(x,y,z);
        this.cubePos = cubePos;
        this.cubes = [];
        var type = Math.floor(Math.random()*materials.length);
        for(var i = 0; i < this.cubePos.length; i++)
        {
            this.cubes[i] = new Cube(this.cubePos[i].x,
                                    this.cubePos[i].y,
                                    this.cubePos[i].z,
                                    type);
        }
        for(var i = 0; i < this.cubes.length; i++)
        {
            scene.add(this.cubes[i].mesh);
        }
    }

    Update()
    {
        //console.log("hi");
        for(var i = 0; i < this.cubes.length; i++)
        {
            this.cubes[i].OnShapeUpdate(this);
        }
    }

    Translate(x,y,z)
    {
        this.position.x += x;
        this.position.y += y;
        this.position.z += z;
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