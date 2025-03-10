class Cube
{
    constructor(x,y,z,id)
    {
        this.position = new THREE.Vector3(x,y,z);
        this.geometry = new THREE.BoxGeometry(gridSize,gridSize,gridSize);
        this.mesh = new THREE.Mesh(this.geometry, materials[id]);
        this.id = id;
        this.score = (id+1)*10;
		this.mesh.castShadow = true; 
		this.mesh.receiveShadow = true;
        
		//this.Update(this.mesh);
    }

	SetMaterial(id){
		this.mesh.material = materials[id];
	}

    OnShapeUpdate(shape)
    {
        this.mesh.position.set(
            this.position.x * gridSize + shape.position.x * gridSize + gridSize/2,
            this.position.y * gridSize + shape.position.y * gridSize + gridSize/2,
            this.position.z * gridSize + shape.position.z * gridSize + gridSize/2,
        );
    }

	Start(world){
        switch(this.id)
        {
            case 1: 
                if(this.position.y > 0)
                {
                    while(world.map[this.position.x][this.position.z][this.position.y-1] == undefined)
                    {
                        this.position.y -= 1;
                    }
                }
            break;
            case 2:
                if(this.position.y > 0)
                {
                    while(world.map[this.position.x][this.position.z][this.position.y-1] == undefined)
                    {
                        this.position.y -= 1;
                    }
                }
            break;
            case 13:
                for(var y = -1; y < 2; y++)
                {
                    for(var x = -1; x < 2; x++)
                    {
                        for(var z = -1; z < 2; z++)
                        {
                            world.RemoveFromWorld(this.position.x + x, this.position.z + z, this.position.y+y);
                        }
                    }
                }
            break;
            default: break;
		}
        this.mesh.position.set(
            this.position.x * gridSize + gridSize/2,
            this.position.y * gridSize + gridSize/2,
            this.position.z * gridSize + gridSize/2,
        );
    }
    
    Update(world)
    {
        switch(this.id)
        {
            case 1: 
                if(this.position.y > 0)
                {
                    while(world.map[this.position.x][this.position.z][this.position.y-1] == undefined)
                    {
                        this.position.y -= 1;
                    }
                }
            break;
            case 2:
                if(this.position.y > 0)
                {
                    while(world.map[this.position.x][this.position.z][this.position.y-1] == undefined)
                    {
                        this.position.y -= 1;
                    }
                }
            break;
            default: break;
        }
        this.mesh.position.set(
            this.position.x * gridSize + gridSize/2,
            this.position.y * gridSize + gridSize/2,
            this.position.z * gridSize + gridSize/2,
        );
    }

    /*
	Destroy(scene){
        this.geometry.dispose();
        scene.remove(this.mesh);
        this.mesh.dispose();
        delete(this);
	}
        */

    Destroy(scene) {
        // Elimina la geometría y el material asociados al mesh
        if (this.mesh.geometry) {
            this.mesh.geometry.dispose();
        }
        if (this.mesh.material) {
            // Si hay varios materiales, dispóselos todos
            if (Array.isArray(this.mesh.material)) {
                this.mesh.material.forEach(material => material.dispose());
            } else {
                this.mesh.material.dispose();
            }
        }
        // Elimina el mesh de la escena
        scene.remove(this.mesh);
        this.mesh = null; // Opcional, ayuda a evitar usos futuros de un objeto eliminado
        delete(this);
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