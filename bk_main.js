import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const w = window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
const camera = new THREE.PerspectiveCamera(75, w/h, 0.1, 100);
camera.position.z = 2

// Load GLTF
const loader = new GLTFLoader();

loader.load( 'public/scene.gltf', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2,2,5)
scene.add(light);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

/*
const geometry = new THREE.BoxGeometry();
// MeshBasicMaterial
// const material = new THREE.MeshBasicMaterial({ 
//     color: 0x00ff00 
// });

// MeshStandardMaterial
const material = new THREE.MeshStandardMaterial({ 
    color: 0x00ff00 
});

// const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
// scene.add(hemiLight);

const cube = new THREE.Mesh(geometry, material);
cube.scale.setScalar(2);
// scene.add(cube);
*/

function animate(){
    requestAnimationFrame(animate);
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate()


