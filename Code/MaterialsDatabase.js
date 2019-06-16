var materials = [];

var loader = new THREE.TextureLoader();
var stone = loader.load('../Assets/stone.png');

//Stone
materials[1] = [
    new THREE.MeshBasicMaterial({map: stone}),
	new THREE.MeshBasicMaterial({map: stone}),
	new THREE.MeshBasicMaterial({map: stone}),
	new THREE.MeshBasicMaterial({map: stone}),
	new THREE.MeshBasicMaterial({map: stone}),
	new THREE.MeshBasicMaterial({map: stone})
  ];