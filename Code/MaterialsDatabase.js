var materials = [];

var loader = new THREE.TextureLoader();
var stone = loader.load('../Assets/stone.png');
var coalOre = loader.load('../Assets/coal_ore.png');
var ironOre = loader.load('../Assets/iron_ore.png');
var goldOre = loader.load('../Assets/gold_ore.png');
var redStoneOre = loader.load('../Assets/redstone_ore.png');
var lapisOre = loader.load('../Assets/lapis_ore.png');
var diamondOre = loader.load('../Assets/diamond_ore.png');
var emeraldOre = loader.load('../Assets/emerald_ore.png');
var obsidian = loader.load('../Assets/obsidian.png');
var cobblestone = loader.load('../Assets/cobblestone.png');
var tntTop = loader.load('../Assets/tnt_top.png');
var tntSide = loader.load('../Assets/tnt_side.png');
var tntBottom = loader.load('../Assets/tnt_bottom.png');


//Stone
materials[1] = [
    new THREE.MeshPhongMaterial({map: stone}),
	new THREE.MeshPhongMaterial({map: stone}),
	new THREE.MeshPhongMaterial({map: stone}),
	new THREE.MeshPhongMaterial({map: stone}),
	new THREE.MeshPhongMaterial({map: stone}),
	new THREE.MeshPhongMaterial({map: stone})
  ];

  //Coal
materials[2] = [
    new THREE.MeshPhongMaterial({map: coalOre}),
	new THREE.MeshPhongMaterial({map: coalOre}),
	new THREE.MeshPhongMaterial({map: coalOre}),
	new THREE.MeshPhongMaterial({map: coalOre}),
	new THREE.MeshPhongMaterial({map: coalOre}),
	new THREE.MeshPhongMaterial({map: coalOre})
  ];

  //Iron
materials[3] = [
    new THREE.MeshPhongMaterial({map: ironOre}),
	new THREE.MeshPhongMaterial({map: ironOre}),
	new THREE.MeshPhongMaterial({map: ironOre}),
	new THREE.MeshPhongMaterial({map: ironOre}),
	new THREE.MeshPhongMaterial({map: ironOre}),
	new THREE.MeshPhongMaterial({map: ironOre})
  ];

  //Gold
materials[4] = [
    new THREE.MeshPhongMaterial({map: goldOre}),
	new THREE.MeshPhongMaterial({map: goldOre}),
	new THREE.MeshPhongMaterial({map: goldOre}),
	new THREE.MeshPhongMaterial({map: goldOre}),
	new THREE.MeshPhongMaterial({map: goldOre}),
	new THREE.MeshPhongMaterial({map: goldOre})
  ];

  //RedStone
materials[5] = [
    new THREE.MeshPhongMaterial({map: redStoneOre}),
	new THREE.MeshPhongMaterial({map: redStoneOre}),
	new THREE.MeshPhongMaterial({map: redStoneOre}),
	new THREE.MeshPhongMaterial({map: redStoneOre}),
	new THREE.MeshPhongMaterial({map: redStoneOre}),
	new THREE.MeshPhongMaterial({map: redStoneOre})
  ];

  //Lapis
materials[6] = [
    new THREE.MeshPhongMaterial({map: lapisOre}),
	new THREE.MeshPhongMaterial({map: lapisOre}),
	new THREE.MeshPhongMaterial({map: lapisOre}),
	new THREE.MeshPhongMaterial({map: lapisOre}),
	new THREE.MeshPhongMaterial({map: lapisOre}),
	new THREE.MeshPhongMaterial({map: lapisOre})
  ];

  //Diamond
materials[7] = [
    new THREE.MeshPhongMaterial({map: diamondOre}),
	new THREE.MeshPhongMaterial({map: diamondOre}),
	new THREE.MeshPhongMaterial({map: diamondOre}),
	new THREE.MeshPhongMaterial({map: diamondOre}),
	new THREE.MeshPhongMaterial({map: diamondOre}),
	new THREE.MeshPhongMaterial({map: diamondOre})
  ];

  //Emerald
materials[8] = [
    new THREE.MeshPhongMaterial({map: emeraldOre}),
	new THREE.MeshPhongMaterial({map: emeraldOre}),
	new THREE.MeshPhongMaterial({map: emeraldOre}),
	new THREE.MeshPhongMaterial({map: emeraldOre}),
	new THREE.MeshPhongMaterial({map: emeraldOre}),
	new THREE.MeshPhongMaterial({map: emeraldOre})
  ];

  //Obsidian
materials[9] = [
    new THREE.MeshPhongMaterial({map: obsidian}),
	new THREE.MeshPhongMaterial({map: obsidian}),
	new THREE.MeshPhongMaterial({map: obsidian}),
	new THREE.MeshPhongMaterial({map: obsidian}),
	new THREE.MeshPhongMaterial({map: obsidian}),
	new THREE.MeshPhongMaterial({map: obsidian})
  ];

  //CobbleStone
materials[10] = [
    new THREE.MeshPhongMaterial({map: cobblestone}),
	new THREE.MeshPhongMaterial({map: cobblestone}),
	new THREE.MeshPhongMaterial({map: cobblestone}),
	new THREE.MeshPhongMaterial({map: cobblestone}),
	new THREE.MeshPhongMaterial({map: cobblestone}),
	new THREE.MeshPhongMaterial({map: cobblestone})
  ];

  //TNT
materials[11] = [
    new THREE.MeshPhongMaterial({map: tntSide}),//Back
	new THREE.MeshPhongMaterial({map: tntSide}),//Front
	new THREE.MeshPhongMaterial({map: tntTop}),//Top
	new THREE.MeshPhongMaterial({map: tntBottom}),//Bottom
	new THREE.MeshPhongMaterial({map: tntSide}),//Left
	new THREE.MeshPhongMaterial({map: tntSide})//Right
  ];