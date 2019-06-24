var shapes = [];
// *
shapes[0] = [
    new THREE.Vector3(0,0,0)
];

// *-
shapes[1] = [
    new THREE.Vector3(0,0,0),
    new THREE.Vector3(1,0,0)
]

// -*-
shapes[2] = [
    new THREE.Vector3(-1,0,0),
    new THREE.Vector3(0,0,0),
    new THREE.Vector3(1,0,0)
]

// -*--
shapes[3] = [
    new THREE.Vector3(-1,0,0),
    new THREE.Vector3(0,0,0),
    new THREE.Vector3(1,0,0),
    new THREE.Vector3(2,0,0)
]

// -
// *-
shapes[4] = [
    new THREE.Vector3(1,0,0),
    new THREE.Vector3(0,0,0),
    new THREE.Vector3(0,0,1),
]

// -
// -*-
shapes[5] = [
    new THREE.Vector3(-1,0,1),
    new THREE.Vector3(-1,0,0),
    new THREE.Vector3(0,0,0),
    new THREE.Vector3(0,0,1),
]

// -
// *-
//  -
shapes[6] = [
    new THREE.Vector3(0,0,1),
    new THREE.Vector3(0,0,0),
    new THREE.Vector3(1,0,0),
    new THREE.Vector3(1,0,-1),
]

//  -
// -*-
shapes[7] = [
    new THREE.Vector3(0,0,1),
    new THREE.Vector3(-1,0,0),
    new THREE.Vector3(0,0,0),
    new THREE.Vector3(1,0,0),
]

// -,- -,-
// *,- -,- 
shapes[8] = [
    new THREE.Vector3(1,1,0),
    new THREE.Vector3(1,0,0),
    new THREE.Vector3(0,1,0),
    new THREE.Vector3(0,0,0),
    new THREE.Vector3(1,1,1),
    new THREE.Vector3(1,0,1),
    new THREE.Vector3(0,1,1),
    new THREE.Vector3(0,0,1)
]

//  -
// -*-
//  -

shapes[9] = [
    new THREE.Vector3(0,0,1),
    new THREE.Vector3(-1,0,0),
    new THREE.Vector3(0,0,0),
    new THREE.Vector3(1,0,0),
    new THREE.Vector3(0,0,-1),
]

//  --
//  *
// --
shapes[10] = [
    new THREE.Vector3(0,0,1),
    new THREE.Vector3(1,0,1),
    new THREE.Vector3(0,0,0),
    new THREE.Vector3(0,0,-1),
    new THREE.Vector3(-1,0,-1),
]

// -*-
// - -
shapes[11] = [
    new THREE.Vector3(1,0,0),
    new THREE.Vector3(0,0,0),
    new THREE.Vector3(-1,0,0),
    new THREE.Vector3(1,0,-1),
    new THREE.Vector3(-1,0,-1),
]

for(var i = 0; i < 7 ; i++)
{
    for(var j = 0; j < 7; j++)
    {
        shapes[12][i*7 + j] = new THREE.Vector3(i-3,0,j-3);
    }
}
shapes[12][49] = new THREE.Vector3(0,-1,0);
