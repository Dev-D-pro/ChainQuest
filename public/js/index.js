
import { notifyCollision } from "../../client/cubeCollide";
import { notifyDiamondPicked } from "../../client/diamondpick";
import { completeRunAndClaim } from "../../client/missionComplete";

var container, scene, camera, renderer, controls;
var keyboard = new THREEx.KeyboardState();
var clock = new THREE.Clock;
var roadSegments = [],roadLength = 1500,sidesSegments = [],diamondSegments = [];
var movingCube;
var collideMeshList = [];
var cubes = [];
var scoreText = document.getElementById("score");
 let diamondText  = document.querySelector(".diamond-container > div");
  let diamondContainer  = document.querySelector(".diamond-container");
    let xpContainer  = document.querySelector(".xp-container");
     let xp  = document.querySelector("#xp");
 let finishedContainer = document.querySelector(".finished-board");
 let finishedResult = document.querySelector(".game-result");
var id = 0;
var countNumber = 0,moveSpeed = 200,moveLength  = 0,elapseTime = 60,surfaceLength = 0,diamondAppearTime = 0,diamondEarn = 0,gotDiamond = "";

let gameObject = {
    elapseTime:0,
    startingSpeed:0,
    maxSpeed:0,
    playerMinSpeed:0,
    playerMaxSpeed:0,
    blocksAppearTime:0,
    blocksExistNum:0,
    blocksMaxNum:0
}

var isplayed = true;

function init() {
    // Scene
    scene = new THREE.Scene();
    // Camera
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    camera = new THREE.PerspectiveCamera(45, screenWidth / screenHeight, 1, 4000);
    camera.position.set(0, 170, 400);

    // Renderer
    if (Detector.webgl) {
        renderer = new THREE.WebGLRenderer({ antialias: true });
    } else {
        renderer = new THREE.CanvasRenderer();
    }
    renderer.setSize(screenWidth * 1, screenHeight * 1);
    container = document.getElementById("ThreeJS");
    container.appendChild(renderer.domElement);

    THREEx.WindowResize(renderer, camera);
    controls = new THREE.OrbitControls(camera, renderer.domElement);

    const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);


   
    var cubeGeometry = new THREE.BoxGeometry(50, 25, 60, 5, 5, 5);
    var wireMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        wireframe: false
    });


    movingCube = new THREE.Mesh(cubeGeometry, wireMaterial);
    movingCube.position.set(0, 25, -20);
    scene.add(movingCube);

for(let i = 0;i<5;i++){
createSurface();
}

 /// loading our ball 
 /* var ball;

  loader.load("/public/textures/ball/scene.gltf",(gltf)=>{
         ball = gltf.scene;
           ball.scale.set(1,1,1);
             scene.add(ball)
  },undefined,(err)=>{
        console.error(err)
  })
     */   
}
function destoryMesh(mesh){
     if(!mesh) return;
      scene.remove(mesh);
      if(mesh.geometry) mesh.geometry.dispose();
      if(mesh.material){
        if(Array.isArray(mesh.material)){
             mesh.material.forEach(mat => mat.dispose())
        }else{
            mesh.material.dispose();
        }
      }
      mesh = null;
}
function createSurface(){
    // let side material
 var sidematerial = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        wireframe: false
    });
// --- Add Road/Floor ---
var textureLoader = new THREE.TextureLoader();
var roadTexture = textureLoader.load('/public/textures/road.jpg'); // place a road.jpg in your textures folder
roadTexture.wrapS = THREE.ClampToEdgeWrapping;
roadTexture.wrapT = THREE.ClampToEdgeWrapping;
roadTexture.repeat.set(1, 1); // adjust for stretching
     
var roadMaterial = new THREE.MeshPhongMaterial({ map: roadTexture });

    let segGeom = new THREE.PlaneGeometry(600, roadLength);
    let lsideGeom = new THREE.PlaneGeometry(600,roadLength);
      let lsideMesh = new THREE.Mesh(lsideGeom, sidematerial);
       lsideMesh.position.set(300,300,-surfaceLength* roadLength);
       lsideMesh.rotation.y = -Math.PI / 2;
        lsideMesh.rotation.x = -Math.PI / 2;

     let rsideGeom = new THREE.PlaneGeometry(600,roadLength);
      let rsideMesh = new THREE.Mesh(rsideGeom, sidematerial);
      rsideMesh.position.set(-300,300,-surfaceLength* roadLength);
       rsideMesh.rotation.y = Math.PI/2;
        rsideMesh.rotation.x = -Math.PI / 2;
    let seg = new THREE.Mesh(segGeom, roadMaterial);
    seg.rotation.x = -Math.PI / 2;
    seg.position.set(0, 0, -surfaceLength * roadLength);
    roadSegments.push(seg);
      scene.add(lsideMesh);
      scene.add(rsideMesh);
       scene.add(seg);
       sidesSegments.push([lsideMesh,rsideMesh]);
       roadSegments.push(seg);
surfaceLength++;
}
function animate() {
     if(isplayed)
    requestAnimationFrame(animate);
    update();
    
    renderer.render(scene, camera);

}

function update() {
    var delta = 2*clock.getDelta();
    var moveDistance = 200 * delta;
    var rotateAngle = Math.PI / 2 * delta;
           elapseTime -= 1/60;
        if((moveLength%2)==0){moveSpeed+=getRandomInt(0.8,1.5);}
        movingCube.position.z -= (Math.min(moveSpeed,600)*delta);
        moveLength+=1;
        for(let i = 0;i<=roadSegments.length-1;i++){
             const seg = roadSegments[i];
              if(seg.position.z > movingCube.position.z+1300){
                 
                    roadSegments.splice(i,1);
                     createSurface();
                     try{
                   destoryMesh(sidesSegments[i-1][1]);
                   destoryMesh(sidesSegments[i-1][0]);
                     }catch(e){}
                  destoryMesh(seg);
                  if(sidesSegments[i-1]!=undefined)
                  sidesSegments.splice(i,1);
                     
                   
              }
        }
        for(let i = 0;i<diamondSegments.length;i++){
              diamondSegments[i].rotation.y += 0.01;
        }
        let res;
        if(res = isCollide(movingCube,diamondSegments)){
        
             destoryMesh(res[1]);
             diamondEarn++;
             diamondText.innerText = `${diamondEarn} Diamond`;
         }
    //            if (keyboard.pressed("A")) {
    //                camera.rotation.z -= 0.2 * Math.PI / 180;
    //                console.log("press A")
    //            }
    //            if (keyboard.pressed("D")) {
    //                movingCube.rotation.y += rotateAngle;
    //            }

    if (keyboard.pressed("left") || keyboard.pressed("A")) {
        if (movingCube.position.x > -270)
            movingCube.position.x -= moveDistance;
        if (camera.position.x > -150) {
            camera.position.x -= moveDistance * 0.6;
            if (camera.rotation.z > -5 * Math.PI / 180) {
                camera.rotation.z -= 0.2 * Math.PI / 180;
            }
        }
    }
    if (keyboard.pressed("right") || keyboard.pressed("D")) {
        if (movingCube.position.x < 270)
            movingCube.position.x += moveDistance;
        if (camera.position.x < 150) {
            camera.position.x += moveDistance * 0.6;
            if (camera.rotation.z < 5 * Math.PI / 180) {
                camera.rotation.z += 0.2 * Math.PI / 180;
            }
        }
    }
    if (keyboard.pressed("up") || keyboard.pressed("W")) {
        movingCube.position.z -= (Math.min(moveSpeed+30,600)*delta);
    }
    if (keyboard.pressed("down") || keyboard.pressed("B")) {
        movingCube.position.z += moveDistance;
    }

    if (!(keyboard.pressed("left") || keyboard.pressed("right") ||
        keyboard.pressed("A") || keyboard.pressed("D"))) {
        delta = camera.rotation.z;
        camera.rotation.z -= delta / 10;
    }
    
      if(countNumber === 0 || countNumber >=(getRandomInt(50,90))){
          for(let i = 0;i<(getRandomInt(1,3));i++){
             makeRandomCube();
          }
             countNumber = 1;
      }
      countNumber++;
      if(diamondAppearTime >= (getRandomInt(500,800))){
        makeDiamond();
          diamondAppearTime = 1;
      }
       diamondAppearTime++;
   
    if (isCollide(movingCube,collideMeshList)) {
        //            message.innerText = "crash";
        movingCube.material.color.setHex(0x346386);
         if(diamondEarn > 0){
             diamondEarn--;
          diamondText.innerText = `${diamondEarn} Diamond`;
         }

    } else {
        //            message.innerText = "Safe";
        movingCube.material.color.setHex(0x00ff00);
    }

    

     if(elapseTime <1){
         isplayed = false;
          container.style.display = "none";
           diamondContainer.style.display = "none";
            xpContainer.style.display = "flex";
             finishedContainer.style.display = "flex";
             xp.innerHTML =  diamondEarn*5+" XP";
             finishedResult.innerHTML = `<div class="finished-box">
          <span class="finished-label">
             Mission 1 
          </span>
           <div class="mission-profit">
              <div class="mission-req"><span>You Earn ${diamondEarn} Diamond </span></div>
               <div class="mission-xp">you get ${diamondEarn*5}xp</div>
           </div>
    </div>`;
    scoreText.style.display = "none";
     }
    scoreText.innerText = "time left: " + Math.floor(elapseTime);
     
       
 // adjust speed

// Camera follows the cube smoothly
camera.position.lerp(
    new THREE.Vector3(movingCube.position.x, movingCube.position.y + 150, movingCube.position.z + 400),
    0.1
);
camera.lookAt(movingCube.position);


}



function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function makeRandomCube() {
    
    var a = 1 * 50,
        b = getRandomInt(1, 3) * 50,
        c = 1 * 50;
    var geometry = new THREE.BoxGeometry(a,b,c,5,5,5);
    var material = new THREE.MeshBasicMaterial({
        color: 0xff0000
    });


    var box = new THREE.Mesh(geometry, material);
   
    box.position.x = getRandomArbitrary((Math.max(movingCube.position.x,-300)>=-300?100:movingCube.position.x), (Math.min(movingCube.position.x,300)>=300?-100:movingCube.position.x));
    box.position.y = 0;
    box.position.z =  getRandomArbitrary((movingCube.position.z-1500), movingCube.position.z-3500);
 
    cubes.push(box);
    box.name = "box_" + id;
    id++;
    collideMeshList.push(box);

    scene.add(box);
}
function createMission(level,description,xpearn){
return  {
     label:"mission "+level,lvl:level,description:description,earn:xpearn,xps:xpearn+'XP'
      
}
}
function makeDiamond(){
   const diamongeometry = new THREE.OctahedronGeometry(15,0);
  
         const diamondMaterial = new THREE.MeshPhongMaterial({
              color: "aqua",
               shininess:150,
               flatShading:true
                
         });

         const diamonMesh = new THREE.Mesh(diamongeometry,diamondMaterial);
         diamonMesh.position.set(getRandomInt(-280,280),30, movingCube.position.z-4000);
         diamonMesh.scale.y = 1.5;
             diamonMesh.name = "diamond_"+id;
            diamondSegments.push(diamonMesh);
            id++;
            scene.add(diamonMesh);
          
}
function isCollide(obj,collisionList){
     var originPoint = obj.position.clone();
      let postionAttribute = obj.geometry.attributes.position;
    for (var vertexIndex = 0; vertexIndex < postionAttribute.count; vertexIndex++) {
        let x = postionAttribute.getX(vertexIndex);
        let y = postionAttribute.getY(vertexIndex);
        let z = postionAttribute.getZ(vertexIndex);
        var localVertex = new THREE.Vector3(x,y,z).clone();

        var globalVertex = localVertex.applyMatrix4(obj.matrix);
        var directionVector = globalVertex.sub(obj.position);
                
        var ray = new THREE.Raycaster(originPoint, directionVector.clone().normalize());
        var collisionResults = ray.intersectObjects(collisionList);
        if (collisionResults.length > 0 && collisionResults[0].distance < directionVector.length()) {
         if(collisionResults[0].object.name == gotDiamond){return false;}
           gotDiamond = collisionResults[0].object.name;
            return [true,collisionResults[0].object];
        }
    }
      return false;

}
function startGame(){
    let missionArr = [];
     for(let i = 1;i<4;i++){
         missionArr.push(createMission(i,`Earn ${2*i} Diamonds`,10*i));
     }
      let missionBoard = document.querySelector(".mission-board");
      let startButton = document.querySelector(".start-button");
      let scoreContainer = document.querySelector(".score-container");
       let gameContainer = document.querySelector("#ThreeJS");
      let missionTop = document.querySelector(".mission-top-box");
      let diamondContainer = document.querySelector(".diamond-container");
      let xpContainer = document.querySelector(".xp-container");
      missionTop.innerHTML = "";
      if(!isplayed){
    
      }
         missionArr.map((e)=>{
            missionTop.innerHTML+=`<div class="mission-box">
          <span class="mission-label">
             ${e.label}
          </span>
           <div class="mission-profit">
              <div class="mission-req"><span>${e.description}</span></div>
               <div class="mission-xp">${e.xps}</div>
           </div>
    </div>`
         });
         startButton.onclick = function(){
         missionBoard.style.display = "none";
           gameContainer.style.display = "block";
           xpContainer.style.display = "none";
            diamondContainer.style.display = "block";
           scoreContainer.style.display = "block";
           isplayed = true;
           init();
        animate();

         }
}

window.addEventListener("load",startGame);
