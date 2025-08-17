# Street Block - Powered by HoneyComb + Verxio

## Verxio ApiKey

| API | API KEY |
|-------------|------------|
| Verxio | `s2id83jai3hgiwux` | 

---

## Short Description

`Street Block` is a 3D runner MVP where a player-controlled cube races down a straight street, collects diamonds and avoids obstacles. Progression and mission logic are driven by Honeycomb Protocol (missions, recall/claim flows) and Verxio (loyalty points / micro-rewards). The front-end is a Three.js scene (straight road, spawning obstacles/diamonds, collisions) and the server provides mission and profile integration endpoints.

---
1. [Overview](#overview)
2. [Tech Stack Implentation](#tech-stack---file-implenetation)
3. [How HoneyComb - Verxio Powers Our Program](#how-honeycomb--verxio-power-progression)
4. [Quick Dev Run](#quick-devrun-checklist)
5. [How server Works - Implementation](#our-server-implementation)
6. [Short Demo Video](#our-short-demo-video)
7. [Contributors](#contributors)


## Overview

**Gameplay**

Player cube moves along a Catmull-Rom spline (curved road).

Diamonds spawn ahead; picking one increments local diamond count.

Obstacles spawn; collision decrements diamonds and applies penalty.

A timed mission: collect requiredDiamonds before timer expires → success.


**On-chain & loyalty integration**

`Verxio`: awards/revokes loyalty points for diamond pickups / collisions (server-side).

`Honeycomb`: mission lifecycle mapped to Honeycomb flows:

createSendCharactersOnMissionTransaction (start/participate),

createRecallCharactersTransaction (claim/recall on success).


Server returns unsigned Honeycomb tx payloads (base64) which the client signs with the player's Solana wallet (e.g., Phantom) and submits to the network.


**Server endpoints (used by client/game)**

POST /api/hc/start → create run, optionally return Honeycomb "send" tx payload

POST /api/hc/progress → diamond pickup → award Verxio points

POST /api/hc/event → collision → revoke Verxio points and penalize

POST /api/hc/complete → evaluate success, create Honeycomb recall tx, return unsigned tx + updated XP/profile

GET /api/hc/profile/:pubkey → fetch profile (xp, points)


**Data flow (high level)**

1. Client calls /hc/start → server creates run and (optionally) generates a Honeycomb “join mission” tx.


2. During run the client calls /hc/progress and /hc/event for pickups and collisions; server updates profile & Verxio state.


3. On completion client calls /hc/complete. If successful, server returns a Honeycomb recall tx payload that the client signs and submits; after confirmation the profile XP is updated.

---

## Tech stack - File Implenetation

Front-end: Three.js (curved road, player cube, obstacle/diamond spawning, Box3 collisions)
 — public/js/index.js

`implementation:`
---
```javascript

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
```
`importedFiles:`
- ./client/cubeCollide.js
- ./client/diamondpick.js
- ./client/missionComplete.js

### Files Explanation - Implementation:
 
- **`cubeCollide.js`**
  if collision is ture triggers a response to our server to update live game honeycomb and axois
  ```javascript
   export async function notifyCollision(runId, userWallet) {
  const res = await fetch(`https://localhost:3000/api/hc/event`, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ runId, userWallet, event: 'collision' })
  });
  return res.json();
}
``
 - **`diamondpick.js`**
 handle when the player picks up a dimaond and automatically synchronize it to our server for immediate state update
 ```javascript
 
export async function notifyDiamondPicked(runId, userWallet) {
  const res = await fetch(`https://localhost:3000/api/hc/progress`, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ runId, userWallet, count: 1 })
  });
  return res.json();
}
```

- **`missionComplete.js`**
call when the player inishes the required objectives for a level/round sends completion status to the server(through axios/honeycomb api for recording progress/reward).

```javascript
import { Connection, Transaction } from '@solana/web3.js';

export async function completeRunAndClaim(runId, userWallet, characterAddress) {
  const res = await fetch(`https://localhost:3000/api/hc/complete`, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ runId, userWallet, characterAddress, requiredDiamonds: 5 })
  });
  const j = await res.json();
  if (!j.ok) throw new Error(j.error || 'complete failed');

  if (j.honeycombRecallTxBase64) {
    const raw = atob(j.honeycombRecallTxBase64);
    const bytes = Uint8Array.from(raw.split('').map(c => c.charCodeAt(0)));
    const tx = Transaction.from(bytes);

    if (window.solana && window.solana.isPhantom) {
      // Request user to sign
      const signed = await window.solana.signTransaction(tx);
      const connection = new Connection('https://api.devnet.solana.com'); 
      const sig = await connection.sendRawTransaction(signed.serialize());
      await connection.confirmTransaction(sig);
      console.log('Honeycomb recall tx submitted:', sig);

      // After confirmed, fetch updated profile
      const profileRes = await fetch(`${API_BASE}/hc/profile/${userWallet}`);
      const profileJson = await profileRes.json();
      return { success: j.success, newXp: j.newXp, profile: profileJson.profile };
    } else {
      console.warn('Wallet not available.');
      return { success: j.success, newXp: j.newXp, profile: null };
    }
  } else {

    return { success: j.success, newXp: j.newXp };
  }
}
```

## How Honeycomb & Verxio power progression
Missions are real game mechanics rather than visual UI only: the player literally “sends” their on-chain character to a mission when a run starts and “recalls/claims” on success. That recall/claim is what mints/awards the XP or on-chain reputation change — not a purely local counter.

Verxio gives loyalty points for in-game actions (diamonds) so players can see immediate programmatic rewards even before on-chain claim. Server can award/revoke points instantaneously for UX.

Together they provide: verifiable mission records (Honeycomb), programmable traits/points (Verxio), and portable reputation/XPs for the player profile.

---

## Quick dev/run checklist

1. npm install


2. Start front-end: npm run dev (Parcel serves public/index.html)


3. Start server: npm run server node server.js


4. Open UI, Connect Wallet, press Start Game , collect diamonds, test collisions, Complete Missions, Collect XPs

## Our Server Implementation
it is the intregation layer that handles all requests going to external services (Verxio, HoneyComb), by keeping api calls centralized instead of spreading them across your game logic, it handles authentication with api keys, signing retires, and error handling.

`Implementation:`
---
```javascript

import express from 'express';
import dotenv from 'dotenv';
import { EdgeClient } from '@honeycomb-protocol/edge-client';

dotenv.config();

const router = express.Router();

// Config
const HONEYCOMB_EDGE_URL = process.env.HONEYCOMB_EDGE_URL || undefined;
const VERXIO_API_KEY = process.env.VERXIO_API_KEY || undefined; 

// Initialize EdgeClient (Honeycomb)
const honeyClient = new EdgeClient({
  baseUrl: HONEYCOMB_EDGE_URL,
});


const store = {
  runs: new Map(),
  profiles: new Map()
};

// Helper: ensure profile exists
function ensureProfile(pubkey) {
  if (!store.profiles.has(pubkey)) store.profiles.set(pubkey, { xp: 0, points: 0 });
  return store.profiles.get(pubkey);
}


router.post('/hc/start', async (req, res) => {
  try {
    const { userWallet, missionId, characterAddress, duration = 60 } = req.body;
    if (!userWallet) return res.status(400).json({ ok: false, error: 'userWallet required' });

    const runId = `${userWallet}:${Date.now()}`;
    store.runs.set(runId, { userWallet, missionId, characterAddress, diamonds: 0, startTs: Date.now(), duration });

    if (!missionId || !characterAddress) {
      ensureProfile(userWallet);
      return res.json({ ok: true, runId });
    }

    try {
      const payload = await honeyClient.createSendCharactersOnMissionTransaction({
        data: {
          mission: missionId.toString(),
          characterAddresses: [characterAddress.toString()],
          authority: userWallet.toString(),
          payer: userWallet.toString()
        }
      });

      const txObj = payload.createSendCharactersOnMissionTransaction;
      // Best-effort: if txObj has .tx or .serialized, adapt here
      const serialized = txObj?.tx || txObj?.serialized || txObj;
      // If serialized is Buffer / Uint8Array, convert to base64; if object, JSON stringify
      let txBase64;
      if (serialized instanceof Uint8Array || Buffer.isBuffer(serialized)) {
        txBase64 = Buffer.from(serialized).toString('base64');
      } else {
        txBase64 = Buffer.from(JSON.stringify(serialized)).toString('base64');
      }

      ensureProfile(userWallet);
      return res.json({ ok: true, runId, honeycombSendTxBase64: txBase64 });
    } catch (e) {
      console.error('Honeycomb send tx creation failed:', e?.message || e);
    
      ensureProfile(userWallet);
      return res.json({ ok: true, runId, warning: 'Honeycomb tx creation failed, running in fallback mode' });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: err.message });
  }
});

/*
  Endpoint: progress (diamond picked)
  - Award Verxio loyalty points server-side (requires server authority).
  - Update in-memory run/profiles for demo.
*/
router.post('/hc/progress', async (req, res) => {
  try {
    const { runId, userWallet, count = 1 } = req.body;
    const run = store.runs.get(runId);
    if (!run) return res.status(404).json({ ok: false, error: 'run not found' });

    run.diamonds = (run.diamonds || 0) + Number(count);

    if (MOCK_MODE || !VERXIO_API_KEY) {
      // Demo: just update profile points
      const p = ensureProfile(userWallet);
      p.points = (p.points || 0) + Number(count) * 10;
      store.profiles.set(userWallet, p);
      return res.json({ ok: true, diamonds: run.diamonds, points: p.points });
    }

    try {
      const p = ensureProfile(userWallet);
      p.points = (p.points || 0) + Number(count) * 10;
      store.profiles.set(userWallet, p);
      return res.json({ ok: true, diamonds: run.diamonds, points: p.points, note: 'verxio placeholder used' });
    } catch (err) {
      console.error('Verxio award failed:', err);
      const p = ensureProfile(userWallet);
      p.points = (p.points || 0) + Number(count) * 10;
      store.profiles.set(userWallet, p);
      return res.json({ ok: true, diamonds: run.diamonds, points: p.points, warning: 'verxio call failed, used fallback' });
    }

  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: err.message });
  }
});

/*
  Endpoint: event (collision)
  - Penalize: revoke Verxio points and reduce diamonds locally
*/
router.post('/hc/event', async (req, res) => {
  try {
    const { runId, userWallet, event = 'collision' } = req.body;
    const run = store.runs.get(runId);
    if (!run) return res.status(404).json({ ok: false, error: 'run not found' });

    if (event === 'collision') {
      if (run.diamonds > 0) run.diamonds -= 1;

      if (MOCK_MODE || !VERXIO_API_KEY) {
        const p = ensureProfile(userWallet);
        p.points = Math.max(0, (p.points || 0) - 5);
        store.profiles.set(userWallet, p);
        return res.json({ ok: true, diamonds: run.diamonds, points: p.points });
      }

    
      try {
         await verxio.revokeLoyaltyPoints({ from: userWallet, points: 5, memo: `collision for ${runId}` });
        const p = ensureProfile(userWallet);
        p.points = Math.max(0, (p.points || 0) - 5);
        store.profiles.set(userWallet, p);
        return res.json({ ok: true, diamonds: run.diamonds, points: p.points, note: 'verxio placeholder used' });
      } catch (err) {
        console.error('Verxio revoke failed:', err);
        const p = ensureProfile(userWallet);
        p.points = Math.max(0, (p.points || 0) - 5);
        store.profiles.set(userWallet, p);
        return res.json({ ok: true, diamonds: run.diamonds, points: p.points, warning: 'verxio revoke failed' });
      }
    }

    return res.json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: err.message });
  }
});

/*
  Endpoint: complete run
  - If success, create Honeycomb recall (claim) transaction via EdgeClient
  - Return unsigned tx (base64) to client so they can sign & submit
*/
router.post('/hc/complete', async (req, res) => {
  try {
    const { runId, userWallet, characterAddress, requiredDiamonds = 5 } = req.body;
    const run = store.runs.get(runId);
    if (!run) return res.status(404).json({ ok: false, error: 'run not found' });

    const success = run.diamonds >= Number(requiredDiamonds);

    if (!success) {
      // failed: no Honeycomb tx, no XP
      return res.json({ ok: true, success: false, diamonds: run.diamonds });
    }

    const profile = ensureProfile(userWallet);
    profile.xp = (profile.xp || 0) + 100;

    if (MOCK_MODE || !characterAddress) {
      return res.json({
        ok: true,
        success: true,
        diamonds: run.diamonds,
        newXp: profile.xp,
        honeycombRecallTxBase64: Buffer.from(JSON.stringify({ mock: 'recall' })).toString('base64')
      });
    }
 
    try {
      const recallResp = await honeyClient.createRecallCharactersTransaction({
        data: {
          mission: run.missionId.toString(),
          characterAddresses: [characterAddress.toString()],
          authority: userWallet.toString(),
          payer: userWallet.toString()
        }
      });

      const txObj = recallResp.createRecallCharactersTransaction;
      const serialized = txObj?.tx || txObj?.serialized || txObj; // adapt to actual shape
      let txBase64;
      if (serialized instanceof Uint8Array || Buffer.isBuffer(serialized)) {
        txBase64 = Buffer.from(serialized).toString('base64');
      } else {
        txBase64 = Buffer.from(JSON.stringify(serialized)).toString('base64');
      }

      // Return new xp and the unsigned tx (base64) for client to sign & send
      return res.json({
        ok: true,
        success: true,
        diamonds: run.diamonds,
        newXp: profile.xp,
        honeycombRecallTxBase64: txBase64
      });

    } catch (err) {
      console.error('Honeycomb recall creation failed:', err);
      // fallback: return success and new xp, but no tx
      return res.json({
        ok: true,
        success: true,
        diamonds: run.diamonds,
        newXp: profile.xp,
        warning: 'honeycomb recall tx creation failed; check server logs'
      });
    }

  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: err.message });
  }
});

/*
  Endpoint: fetch profile
*/
router.get('/hc/profile/:pubkey', (req, res) => {
  const p = store.profiles.get(req.params.pubkey) || { xp: 0, points: 0 };
  res.json({ ok: true, profile: p });
});

export default router;
```

## Our Short Demo Video
[![Watch the video]()](https://x.com/devDpro?Ot5fkh4LWk0lcDPjN0WVtw&s=09) 

## Contributors
`Twitter`
@DevDpro
@elmajeedabbas






