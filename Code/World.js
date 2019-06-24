var gridSize = 1;

class World
{
	constructor(width,deep,heigth, scene)
	{
		this.width = width;
		this.deep = deep;
		this.heigth = heigth;
		this.map = [];	
		this.scene = scene;
		this.rotation = 0.0;
		
		for(var i=0; i<this.width; i++) 
		{
			this.map[i] = [];
			for(var j=0; j<this.deep; j++) 
			{
				this.map[i][j] = [];
				for(var k=0; k<this.heigth; k++) 
				{
					this.map[i][j][k] = undefined;
				}
			}
		}

	}
	
	Update()
	{
		for(var i=0; i<this.width; i++) 
		{
			for(var j=0; j<this.deep; j++) 
			{
				for(var k=0; k<this.heigth; k++) 
				{
					if(this.map[i][j][k] != undefined)
					{
						this.map[i][j][k].Update(this);
					}					
				}
			}
		}
	}
	
	Draw()
	{
		for(var i=0; i<this.width; i++) 
		{
			for(var j=0; j<this.deep; j++) 
			{
				for(var k=0; k<this.heigth; k++) 
				{
					if(this.map[i][j][k] != undefined)
					{
						this.map[i][j][k].Draw();
					}					
				}
			}
		}
	}

	AddToWorld(x,y,z,cube){
		cube.position.set(x,y,z);
		this.map[x][z][y] = cube;
		cube.Start(this);
	}
	
	RemoveFromWorld(x,y,z){
		if(x >= 0 && y >= 0 && z >= 0)
		{
			if(x < this.width && z < this.deep && y < this.height)
			{
				if(this.map[x][z][y] != undefined){
					console.log("destroing");
					this.map[x][z][y].Destroy(this.scene);
				}
			}
		}
	}

	CheckLineX(y,z)
	{
		for(var i=0; i<this.width; i++) 
		{
			if(this.map[i][y][z] != undefined)
			{
				return false;
			}
		}
	}
	
	CheckLineY(x,z)
	{
		for(var j=0; j<this.deep; j++) 
		{
			if(this.map[x][j][z] != undefined)
			{
				return false;
			}
		}
	}
	
	CheckLayer(z)
	{
		for(var i=0; i<this.width; i++) 
		{
			for(var j=0; j<this.deep; j++) 
			{
				if(this.map[i][j][z] == undefined)
				{
					return false;
				}
			}
		}
		return true;
	}

	RemoveLayer(z)
	{
		for(var i=0; i<this.width; i++) 
		{
			for(var j=0; j<this.deep; j++) 
			{
				this.map[i][j][z] = undefined;
			}
		}
		if(z == this.height || z < -1){return; }
		
		for(var i=0; i<this.width; i++) 
		{
			for(var j=0; j<this.deep; j++) 
			{
				for(var k=z+1; k<this.height; k++) 
				{
					if(this.map[i][j][k] != undefined)
					{
						this.map[i][j][k-1] = this.map[i][j][k];
						this.map[i][j][k] = undefined;
					}
				}
			}
		}
	}

}