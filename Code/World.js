class World
{
	public class World(var width,var deep,var heigth)
	{
		this.map[][][];
		this.width = width;
		this.deep = deep;
		this.heigth = heigth;		
		
		this.rotation = 0.0f;
		
		for(var i=0; i<width; i++) 
		{
			for(var j=0; j<deep; j++) 
			{
				for(var k=0; k<heigth; k++) 
				{
					map[i][j][k] = undefined;
				}
			}
		}

	}
	
	public Update()
	{
		for(var i=0; i<width; i++) 
		{
			for(var j=0; j<deep; j++) 
			{
				for(var k=0; k<heigth; k++) 
				{
					if(map[i][j][k] != undefined;
					{
						//map[i][j][k].Update();
					}					
				}
			}
		}
	}
	
	public Draw()
	{
		for(var i=0; i<width; i++) 
		{
			for(var j=0; j<deep; j++) 
			{
				for(var k=0; k<heigth; k++) 
				{
					if(map[i][j][k] != undefined;
					{
						//map[i][j][k].Draw();
					}					
				}
			}
		}
	}
	
	public CheckLineX(var y,var z)
	{
		for(var i=0; i<width; i++) 
		{
			if(map[i][y][z] != undefined)
			{
				return false;
			}
		}
	}
	
	public CheckLineY(var x,var z)
	{
		for(var j=0; j<deep; j++) 
		{
			if(map[x][j][z] != undefined)
			{
				return false;
			}
		}
	}
	
	public CheckLayer(var z)
	{
		for(var i=0; i<width; i++) 
		{
			for(var j=0; j<deep; j++) 
			{
				if(map[i][j][z] != undefined)
				{
					return false;
				}
			}
		}
		
		return true;
	}

	public RemoLayer(var z)
	{
		for(var i=0; i<width; i++) 
		{
			for(var j=0; j<deep; j++) 
			{
				map[i][j][z] = undefined;
			}
		}
		if(z == height || z < -1){return; }
		
		for(var i=0; i<width; i++) 
		{
			for(var j=0; j<deep; j++) 
			{
				for(var k=z+1; k<height; k++) 
				{
					if(map[i][j][k] != undefined)
					{
						map[i][j][k-1] = map[i][j][k];
						map[i][j][k] = undefined;
					}
				}
			}
		}
	}

}