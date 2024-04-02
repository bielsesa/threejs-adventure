import * as THREE from 'three';
import gsap from 'gsap';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Object
const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x82f000, wireframe: true })
);
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(0.2, 0.2, 0.2),
    new THREE.MeshBasicMaterial({ color: 0x920000 })
);
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(1),
    new THREE.MeshBasicMaterial({ color: 0x550055, wireframe: true })
);
scene.add(cube);
scene.add(cube2);
scene.add(sphere);

cube2.position.set(-1.5, 1, 1);

// Sizes
const sizes = {
    width: 800,
    height: 600
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);

// let time = Date.now();
const clock = new THREE.Clock();

// gsap has its own 'tick' and does its own requestAnimationFrame
gsap.to(cube2.position, { duration: 1, delay: 1, x: 1 });
gsap.to(cube2.position, { duration: 1, delay: 2, x: -1 });

// Animations
const gameLoop = () => {

    // // Adapt framerate (calculate 'delta time', the time difference between last frame and current)
    // const currentTime = Date.now();
    // const deltaTime = currentTime - time;
    // time = currentTime;
    // console.log(deltaTime);

    // Use Clock (from three.js) to get delta time
    const elapsedTime = clock.getElapsedTime();
    // console.log(elapsedTime);

    // Update objects
    // mesh.rotation.x += 0.001; // * deltaTime;
    // mesh.rotation.y += 0.001; // * deltaTime;
    cube.rotation.x = elapsedTime * Math.PI * 0.5;
    cube.rotation.y = elapsedTime * Math.PI;
    cube.position.x = Math.sin(elapsedTime);
    cube.position.y = Math.cos(elapsedTime);
    sphere.position.z = Math.sin(elapsedTime);
    // cube2.lookAt(cube.position);
    
    // Render
    renderer.render(scene, camera);

    window.requestAnimationFrame(gameLoop);
};

gameLoop();