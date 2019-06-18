class Shape
{
    constructor(x,y,z,cubePos,scene,speed)
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
        //speed on ticks
        this.speed = speed;
        this.time = 0;
    }

    Update()
    {
        //console.log("hi");
        if(this.time >= (1/this.speed)*10)
        {
            this.Translate(0,-gridSize,0);
            this.time = 0;
        }
        for(var i = 0; i < this.cubes.length; i++)
        {
            this.cubes[i].OnShapeUpdate(this);
        }
        this.time++;
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