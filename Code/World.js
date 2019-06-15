var gridSize = 0.2;

class World
{
	constructor(width,deep,heigth)
	{
		this.width = width;
		this.deep = deep;
		this.heigth = heigth;
		this.map = [];	
		
		this.rotation = 0.0;
		
		for(var i=0; i<width; i++) 
		{
			map[i] = [];
			for(var j=0; j<deep; j++) 
			{
				map[i][j] = [];
				for(var k=0; k<heigth; k++) 
				{
					map[i][j][k] = undefined;
				}
			}
		}

	}
	
	Update()
	{
		for(var i=0; i<width; i++) 
		{
			for(var j=0; j<deep; j++) 
			{
				for(var k=0; k<heigth; k++) 
				{
					if(map[i][j][k] != undefined)
					{
						//map[i][j][k].Update();
					}					
				}
			}
		}
	}
	
	Draw()
	{
		for(var i=0; i<width; i++) 
		{
			for(var j=0; j<deep; j++) 
			{
				for(var k=0; k<heigth; k++) 
				{
					if(map[i][j][k] != undefined)
					{
						map[i][j][k].Draw();
					}					
				}
			}
		}
	}
	
	CheckLineX(y,z)
	{
		for(var i=0; i<width; i++) 
		{
			if(map[i][y][z] != undefined)
			{
				return false;
			}
		}
	}
	
	CheckLineY(x,z)
	{
		for(var j=0; j<deep; j++) 
		{
			if(map[x][j][z] != undefined)
			{
				return false;
			}
		}
	}
	
	CheckLayer(z)
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

	RemoveLayer(z)
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