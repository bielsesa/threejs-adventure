import * as THREE from 'three';

// Get canvas
const canvas = document.querySelector('canvas.webgl');

// Create a scene
const scene = new THREE.Scene();

// Create a red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

// Add the cube to the scene
scene.add(mesh);

// Create a camera
const sizes = {
    width: 800,
    height: 600
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height); // usually recommended fov 35
camera.position.z = 3;
scene.add(camera);

// Create a renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);