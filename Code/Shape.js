class Shape
{
    constructor(x,y,z,cubePos,scene)
    {
        this.position = new THREE.Vector3(x,y,z);
        this.cubePos = cubePos;
        this.cubes = [];
        var type = Math.floor(Math.random()*materials.length-1);
		
        for(var i = 0; i < this.cubePos.length; i++)
        {
            this.cubes[i] = new Cube(this.cubePos[i].x,this.cubePos[i].y,this.cubePos[i].z,type);
        }
        for(var i = 0; i < this.cubes.length; i++)
        {
            scene.add(this.cubes[i].mesh);
        }
    }

	ChangueMaterial(materialID)
	{
		for(var i = 0; i < this.cubes.length; i++)
        {
            this.cubes[i].SetMaterial(materialID);
        }
	}

	Destroy(scene){

		for(var i = 0; i < this.cubes.length; i++)
		{
			this.cubes[i].Destroy(scene);
		}
	}

	Clone(scene){
		
		var clone = new Shape(this.position.x, this.position.y, this.position.z, this.cubePos, scene);

		for(var i = 0; i < clone.cubes.length; i++)
        {
            scene.add(clone.cubes[i].mesh);
        }

		return clone;
	}

    Update()
    {
        for(var i = 0; i < this.cubes.length; i++) 
        {
			this.cubes[i].OnShapeUpdate(this);
		}
    }

	SetPos(x,y,z){
		this.position.x = x;
        this.position.y = y;
        this.position.z = z;
	}

    Translate(x,y,z)
    {
        this.position.x += x;
        this.position.y += y;
        this.position.z += z;
    }

    Rotate(rotation) 
    {
        for(var i = 0; i < this.cubes.length; i++) 
        {
            this.cubes[i].RotateX(rotation.x);
            this.cubes[i].RotateY(rotation.y);
            this.cubes[i].RotateZ(rotation.z);
        }
    }
	
	RotationX()
	{
		for(var i = 0; i < this.cubes.length; i++) 
        {
			var temp = this.cubes[i].position.y;
			this.cubes[i].position.y = this.cubes[i].position.z;
			this.cubes[i].position.z = temp;
		}
	}
	
	RotationY()
	{
		for(var i = 0; i < this.cubes.length; i++) //??
        {
			var temp = this.cubes[i].position.x;
			this.cubes[i].position.x = this.cubes[i].position.z;
			this.cubes[i].position.z = temp;
		}
	}
	
	RotationZ()
	{
		for(var i = 0; i < this.cubes.length; i++) //??
        {
			var temp = this.cubes[i].position.y;
			this.cubes[i].position.y = this.cubes[i].position.x;
			this.cubes[i].position.x = temp;
		}
	}
}