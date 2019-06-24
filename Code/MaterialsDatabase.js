var materials = [];

var loader = new THREE.TextureLoader();
var texture = [];
texture[0] = loader.load('../Assets/textures/block/dirt.png');
texture[1] = loader.load('../Assets/textures/block/stone.png');
texture[2] = loader.load('../Assets/textures/block/coal_ore.png');
texture[3] = loader.load('../Assets/textures/block/iron_ore.png');
texture[4] = loader.load('../Assets/textures/block/gold_ore.png');
texture[5] = loader.load('../Assets/textures/block/redstone_ore.png');
texture[6] = loader.load('../Assets/textures/block/lapis_ore.png');
texture[7] = loader.load('../Assets/textures/block/diamond_ore.png');
texture[8] = loader.load('../Assets/textures/block/emerald_ore.png');
texture[9] = loader.load('../Assets/textures/block/obsidian.png');
texture[10] = loader.load('../Assets/textures/block/cobblestone.png');
texture[11] = loader.load('../Assets/textures/block/tnt_top.png');
texture[12] = loader.load('../Assets/textures/block/tnt_side.png');
texture[13] = loader.load('../Assets/textures/block/tnt_bottom.png');
texture[14] = loader.load('../Assets/textures/block/grass_block_side.png');
texture[15] = loader.load('../Assets/textures/block/grass_block_top.png');
texture[16] = loader.load('../Assets/textures/block/glass.png');
texture[17] = loader.load('../Assets/textures/block/sand.png');
texture[18] = loader.load('../Assets/textures/block/gravel.png');

texture.forEach(function (item) {
	item.magFilter = THREE.NearestFilter;
	item.minFilter = THREE.NearestFilter;
});

//Dirt
materials[0] = [
    new THREE.MeshPhongMaterial({map: texture[14]}),//Back
	new THREE.MeshPhongMaterial({map: texture[14]}),//Front
	new THREE.MeshPhongMaterial({map: texture[15]}),//Top
	new THREE.MeshPhongMaterial({map: texture[0]}),//Bottom
	new THREE.MeshPhongMaterial({map: texture[14]}),//Left
	new THREE.MeshPhongMaterial({map: texture[14]})//Right
]
//Stone
materials[1] = [
    new THREE.MeshPhongMaterial({map: texture[1]}),
	new THREE.MeshPhongMaterial({map: texture[1]}),
	new THREE.MeshPhongMaterial({map: texture[1]}),
	new THREE.MeshPhongMaterial({map: texture[1]}),
	new THREE.MeshPhongMaterial({map: texture[1]}),
	new THREE.MeshPhongMaterial({map: texture[1]})
  ];

  //Coal
materials[2] = [
    new THREE.MeshPhongMaterial({map: texture[2]}),
	new THREE.MeshPhongMaterial({map: texture[2]}),
	new THREE.MeshPhongMaterial({map: texture[2]}),
	new THREE.MeshPhongMaterial({map: texture[2]}),
	new THREE.MeshPhongMaterial({map: texture[2]}),
	new THREE.MeshPhongMaterial({map: texture[2]})
  ];

  //Iron
materials[3] = [
    new THREE.MeshPhongMaterial({map: texture[3]}),
	new THREE.MeshPhongMaterial({map: texture[3]}),
	new THREE.MeshPhongMaterial({map: texture[3]}),
	new THREE.MeshPhongMaterial({map: texture[3]}),
	new THREE.MeshPhongMaterial({map: texture[3]}),
	new THREE.MeshPhongMaterial({map: texture[3]})
  ];

  //Gold
materials[4] = [
    new THREE.MeshPhongMaterial({map: texture[4]}),
	new THREE.MeshPhongMaterial({map: texture[4]}),
	new THREE.MeshPhongMaterial({map: texture[4]}),
	new THREE.MeshPhongMaterial({map: texture[4]}),
	new THREE.MeshPhongMaterial({map: texture[4]}),
	new THREE.MeshPhongMaterial({map: texture[4]})
  ];

  //RedStone
materials[5] = [
    new THREE.MeshPhongMaterial({map: texture[5]}),
	new THREE.MeshPhongMaterial({map: texture[5]}),
	new THREE.MeshPhongMaterial({map: texture[5]}),
	new THREE.MeshPhongMaterial({map: texture[5]}),
	new THREE.MeshPhongMaterial({map: texture[5]}),
	new THREE.MeshPhongMaterial({map: texture[5]})
  ];

  //Lapis
materials[6] = [
    new THREE.MeshPhongMaterial({map: texture[6]}),
	new THREE.MeshPhongMaterial({map: texture[6]}),
	new THREE.MeshPhongMaterial({map: texture[6]}),
	new THREE.MeshPhongMaterial({map: texture[6]}),
	new THREE.MeshPhongMaterial({map: texture[6]}),
	new THREE.MeshPhongMaterial({map: texture[6]})
  ];

  //Diamond
materials[7] = [
    new THREE.MeshPhongMaterial({map: texture[7]}),
	new THREE.MeshPhongMaterial({map: texture[7]}),
	new THREE.MeshPhongMaterial({map: texture[7]}),
	new THREE.MeshPhongMaterial({map: texture[7]}),
	new THREE.MeshPhongMaterial({map: texture[7]}),
	new THREE.MeshPhongMaterial({map: texture[7]})
  ];

  //Emerald
materials[8] = [
    new THREE.MeshPhongMaterial({map: texture[8]}),
	new THREE.MeshPhongMaterial({map: texture[8]}),
	new THREE.MeshPhongMaterial({map: texture[8]}),
	new THREE.MeshPhongMaterial({map: texture[8]}),
	new THREE.MeshPhongMaterial({map: texture[8]}),
	new THREE.MeshPhongMaterial({map: texture[8]})
  ];

  //Obsidian
materials[9] = [
    new THREE.MeshPhongMaterial({map: texture[9]}),
	new THREE.MeshPhongMaterial({map: texture[9]}),
	new THREE.MeshPhongMaterial({map: texture[9]}),
	new THREE.MeshPhongMaterial({map: texture[9]}),
	new THREE.MeshPhongMaterial({map: texture[9]}),
	new THREE.MeshPhongMaterial({map: texture[9]})
  ];

  //CobbleStone
materials[10] = [
    new THREE.MeshPhongMaterial({map: texture[10]}),
	new THREE.MeshPhongMaterial({map: texture[10]}),
	new THREE.MeshPhongMaterial({map: texture[10]}),
	new THREE.MeshPhongMaterial({map: texture[10]}),
	new THREE.MeshPhongMaterial({map: texture[10]}),
	new THREE.MeshPhongMaterial({map: texture[10]})
  ];

  

  //TNT
materials[11] = [
    new THREE.MeshPhongMaterial({map: texture[12]}),//Back
	new THREE.MeshPhongMaterial({map: texture[12]}),//Front
	new THREE.MeshPhongMaterial({map: texture[11]}),//Top
	new THREE.MeshPhongMaterial({map: texture[13]}),//Bottom
	new THREE.MeshPhongMaterial({map: texture[12]}),//Left
	new THREE.MeshPhongMaterial({map: texture[12]})//Right
  ];

  //Sand
materials[12] = [
    new THREE.MeshPhongMaterial({map: texture[17]}),//Back
	new THREE.MeshPhongMaterial({map: texture[17]}),//Front
	new THREE.MeshPhongMaterial({map: texture[17]}),//Top
	new THREE.MeshPhongMaterial({map: texture[17]}),//Bottom
	new THREE.MeshPhongMaterial({map: texture[17]}),//Left
	new THREE.MeshPhongMaterial({map: texture[17]})//Right
  ];
  
  //Gravel
  materials[13] = [
    new THREE.MeshPhongMaterial({map: texture[18]}),//Back
	new THREE.MeshPhongMaterial({map: texture[18]}),//Front
	new THREE.MeshPhongMaterial({map: texture[18]}),//Top
	new THREE.MeshPhongMaterial({map: texture[18]}),//Bottom
	new THREE.MeshPhongMaterial({map: texture[18]}),//Left
	new THREE.MeshPhongMaterial({map: texture[18]})//Right
  ];

  //Glass
  materials[14] = [
    new THREE.MeshLambertMaterial({map: texture[16], transparent: true}),//Back
	new THREE.MeshLambertMaterial({map: texture[16], transparent: true}),//Front
	new THREE.MeshLambertMaterial({map: texture[16], transparent: true}),//Top
	new THREE.MeshLambertMaterial({map: texture[16], transparent: true}),//Bottom
	new THREE.MeshLambertMaterial({map: texture[16], transparent: true}),//Left
	new THREE.MeshLambertMaterial({map: texture[16], transparent: true})//Right
  ];      