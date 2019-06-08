class World
{
	public class World(var width,var deep,var heigth)
	{
		this.map[][][];
		this.width = width;
		this.deep = deep;
		this.heigth = heigth;		
		
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
	
	public CheckLineX(var x,var z)
	{
		for(var i=0; i<width; i++) 
		{
			
		}
	}
	
	public CheckLineY(var y,var z)
	{
		for(var i=0; i<deep; i++) 
		{
			if(map[i][y][z] != undefined)
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

}