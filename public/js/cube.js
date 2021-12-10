//import three js module as THREE
console.log("hello")
import * as THREE from "../../node_modules/three/build/three.module.js"

//making neccerary objects to animate
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer()

//making objects to render
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: color.green, wirefram: true })
const cube = new THREE.Mesh(geometry, material)

//adding the objects we want to render to the scene
scene.add(cube);

//setting the camera position
renderer.setPixelRatio( window.devicePixelRatio )
renderer.setSize( window.innerWidth, window.innerHeight )
camera.position.setZ(30)

//setting the new positions to render
renderer.render( scene, camera )


//making an infinite loop to animate
function animate() 
{
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
}
//calling the function to animate
animate()