import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const w = window.innerWidth;
const h = window.innerHeight;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd);

const camera = new THREE.PerspectiveCamera(45, w/h, 1, 5000);
// camera.rotation.y = 45/180 * Math.PI;
camera.position.z = 2;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const hlight = new THREE.AmbientLight(0x404040, 100);
scene.add(hlight);

// const spotLight = new THREE.SpotLight(0xffffff, 3000, 100, 0.22, 1);
// spotLight.position.set(0, 25, 0);
// spotLight.castShadow = true;
// spotLight.shadow.bias = -0.0001;
// scene.add(spotLight);

// const directionalLight = new THREE.DirectionalLight(0xffffff, 40);
// directionalLight.position.set(0,1,0);
// directionalLight.castShadow = true;
// scene.add(directionalLight);

// const light = new THREE.PointLight(0xc4c4c4, 100);
// light.position.set(0,300,500);
// scene.add(light);

const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', renderer);
// controls.minDistance = 2;
// controls.maxDistance = 5;

/* GLTF, GLB File */
const loader = new GLTFLoader().setPath('public/cat_with_scarf/');
loader.load('scene.gltf', (gltf) => {
  console.log('loading model');

  const model = gltf.scene.children[0];
  model.scale.set(0.5, 0.5, 0.5);

  scene.add( gltf.scene );
  
}, undefined, function ( error ) {

	console.error( error );

} );


function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
  
}

animate();