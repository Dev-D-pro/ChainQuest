var container, scene, camera, renderer, controls;
var keyboard = new THREEx.KeyboardState();
var clock = new THREE.Clock;
var roadSegments = [], roadLength = 1500;
var movingCube;
var collideMeshList = [];
var cubes = [];
var message = document.getElementById("message");
var crash = false;
var score = 0;
var scoreText = document.getElementById("score");
var id = 0;
var countNumber = 0, moveSpeed = 200, moveLength = 0, elapseTime = 60, surfaceLength = 0;
var crashId = " ";
var lastCrashId = " ";
let gameObject = {
    elapseTime: 0,
    startingSpeed: 0,
    maxSpeed: 0,
    playerMinSpeed: 0,
    playerMaxSpeed: 0,
    blocksAppearTime: 0,
    blocksExistNum: 0,
    blocksMaxNum: 0
};
var isplayed = true;
init();
animate();
function init() {
    // Scene
    scene = new THREE.Scene();
    // Camera
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    camera = new THREE.PerspectiveCamera(45, screenWidth / screenHeight, 1, 4000);
    camera.position.set(0, 170, 400);
    // Renderer
    if (Detector.webgl) renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    else renderer = new THREE.CanvasRenderer();
    renderer.setSize(screenWidth * 0.85, screenHeight * 0.85);
    container = document.getElementById("ThreeJS");
    container.appendChild(renderer.domElement);
    THREEx.WindowResize(renderer, camera);
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);
    // cube wireframes 
    var cubeGeometry = new THREE.BoxGeometry(50, 25, 60, 5, 5, 5);
    var wireMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        wireframe: false
    });
    movingCube = new THREE.Mesh(cubeGeometry, wireMaterial);
    movingCube.position.set(0, 25, -20);
    scene.add(movingCube);
    for(let i = 0; i < 5; i++)createSurface();
/// loading our ball 
/*var ball;

  loader.load("/textures/ball/scene.gltf",(gltf)=>{
         ball = gltf.scene;
           ball.scale.set(1,1,1);
             scene.add(ball)
  },undefined,(err)=>{
        console.error(err)
  })
        */ }
function destoryMesh(mesh) {
    if (!mesh) return;
    scene.remove(mesh);
    if (mesh.geometry) mesh.geometry.dispose();
    if (mesh.material) {
        if (Array.isArray(mesh.material)) mesh.material.forEach((mat)=>mat.dispose());
        else mesh.material.dispose();
    }
    mesh = null;
}
function createSurface() {
    // let side material
    var sidematerial = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        wireframe: false
    });
    // --- Add Road/Floor ---
    var textureLoader = new THREE.TextureLoader();
    var roadTexture = textureLoader.load('/textures/road.jpg'); // place a road.jpg in your textures folder
    roadTexture.wrapS = THREE.ClampToEdgeWrapping;
    roadTexture.wrapT = THREE.ClampToEdgeWrapping;
    roadTexture.repeat.set(1, 1); // adjust for stretching
    var roadMaterial = new THREE.MeshPhongMaterial({
        map: roadTexture
    });
    let segGeom = new THREE.PlaneGeometry(600, roadLength);
    let lsideGeom = new THREE.PlaneGeometry(600, roadLength);
    let lsideMesh = new THREE.Mesh(lsideGeom, sidematerial);
    lsideMesh.position.set(300, 300, -surfaceLength * roadLength);
    lsideMesh.rotation.y = -Math.PI / 2;
    lsideMesh.rotation.x = -Math.PI / 2;
    let rsideGeom = new THREE.PlaneGeometry(600, roadLength);
    let rsideMesh = new THREE.Mesh(rsideGeom, sidematerial);
    rsideMesh.position.set(-300, 300, -surfaceLength * roadLength);
    rsideMesh.rotation.y = Math.PI / 2;
    rsideMesh.rotation.x = -Math.PI / 2;
    let seg = new THREE.Mesh(segGeom, roadMaterial);
    seg.rotation.x = -Math.PI / 2;
    seg.position.set(0, 0, -surfaceLength * roadLength);
    roadSegments.push(seg);
    scene.add(lsideMesh);
    scene.add(rsideMesh);
    scene.add(seg);
    roadSegments.push(seg);
    surfaceLength++;
}
function animate() {
    if (isplayed) requestAnimationFrame(animate);
    update();
    renderer.render(scene, camera);
}
function update() {
    var delta = 2 * clock.getDelta();
    var moveDistance = 200 * delta;
    var rotateAngle = Math.PI / 2 * delta;
    elapseTime -= 1 / 60;
    if (moveLength % 2 == 0) moveSpeed += getRandomInt(0.8, 1.5);
    movingCube.position.z -= Math.min(moveSpeed, 600) * delta;
    moveLength += 1;
    for(let i = 0; i <= roadSegments.length - 1; i++){
        const seg = roadSegments[i];
        if (seg.position.z > movingCube.position.z + 1200) {
            roadSegments.splice(i, 1);
            createSurface();
            destoryMesh(seg);
        }
    }
    //            if (keyboard.pressed("A")) {
    //                camera.rotation.z -= 0.2 * Math.PI / 180;
    //                console.log("press A")
    //            }
    //            if (keyboard.pressed("D")) {
    //                movingCube.rotation.y += rotateAngle;
    //            }
    if (keyboard.pressed("left") || keyboard.pressed("A")) {
        if (movingCube.position.x > -270) movingCube.position.x -= moveDistance;
        if (camera.position.x > -150) {
            camera.position.x -= moveDistance * 0.6;
            if (camera.rotation.z > -5 * Math.PI / 180) camera.rotation.z -= 0.2 * Math.PI / 180;
        }
    }
    if (keyboard.pressed("right") || keyboard.pressed("D")) {
        if (movingCube.position.x < 270) movingCube.position.x += moveDistance;
        if (camera.position.x < 150) {
            camera.position.x += moveDistance * 0.6;
            if (camera.rotation.z < 5 * Math.PI / 180) camera.rotation.z += 0.2 * Math.PI / 180;
        }
    }
    if (keyboard.pressed("up") || keyboard.pressed("W")) movingCube.position.z -= Math.min(moveSpeed + 30, 600) * delta;
    if (keyboard.pressed("down") || keyboard.pressed("B")) movingCube.position.z += moveDistance;
    if (!(keyboard.pressed("left") || keyboard.pressed("right") || keyboard.pressed("A") || keyboard.pressed("D"))) {
        delta = camera.rotation.z;
        camera.rotation.z -= delta / 10;
    }
    if (countNumber === 0 || countNumber >= getRandomInt(50, 90)) {
        for(let i = 0; i < getRandomInt(1, 3); i++)makeRandomCube();
        countNumber = 1;
    }
    countNumber++;
    var originPoint = movingCube.position.clone();
    let postionAttribute = movingCube.geometry.attributes.position;
    for(var vertexIndex = 0; vertexIndex < postionAttribute.count; vertexIndex++){
        let x = postionAttribute.getX(vertexIndex);
        let y = postionAttribute.getY(vertexIndex);
        let z = postionAttribute.getZ(vertexIndex);
        var localVertex = new THREE.Vector3(x, y, z).clone();
        var globalVertex = localVertex.applyMatrix4(movingCube.matrix);
        var directionVector = globalVertex.sub(movingCube.position);
        var ray = new THREE.Raycaster(originPoint, directionVector.clone().normalize());
        var collisionResults = ray.intersectObjects(collideMeshList);
        if (collisionResults.length > 0 && collisionResults[0].distance < directionVector.length()) {
            crash = true;
            crashId = collisionResults[0].object.name;
            break;
        }
        crash = false;
    }
    if (crash) {
        //            message.innerText = "crash";
        movingCube.material.color.setHex(0x346386);
        if (crashId !== lastCrashId) {
            score -= 100;
            lastCrashId = crashId;
        }
    } else //            message.innerText = "Safe";
    movingCube.material.color.setHex(0x00ff00);
    if (elapseTime < 1) isplayed = false;
    scoreText.innerText = "time remain:" + Math.floor(elapseTime);
    // adjust speed
    // Camera follows the cube smoothly
    camera.position.lerp(new THREE.Vector3(movingCube.position.x, movingCube.position.y + 150, movingCube.position.z + 400), 0.1);
    camera.lookAt(movingCube.position);
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function makeRandomCube() {
    var a = 50, b = getRandomInt(1, 3) * 50, c = 50;
    var geometry = new THREE.BoxGeometry(a, b, c, 5, 5, 5);
    var material = new THREE.MeshBasicMaterial({
        color: 0xff0000
    });
    var box = new THREE.Mesh(geometry, material);
    box.position.x = getRandomArbitrary(Math.max(movingCube.position.x, -300) >= -300 ? 100 : movingCube.position.x, Math.min(movingCube.position.x, 300) >= 300 ? -100 : movingCube.position.x);
    box.position.y = 0;
    box.position.z = getRandomArbitrary(movingCube.position.z - 1500, movingCube.position.z - 3500);
    cubes.push(box);
    box.name = "box_" + id;
    id++;
    collideMeshList.push(box);
    scene.add(box);
}

//# sourceMappingURL=race-game-threejs-master.81cf15bf.js.map
