import * as THREE from "three";

var scene = new THREE.Scene(); //创建场景
var camera = new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight,0.1,2000); //创建相机 (参数分别是   FOV:可视角度,  aspect ratio:宽高比,  near:近剪切面,  far:远剪切面)
var renderer =  new THREE.WebGLRenderer(); //创建渲染器

renderer.setSize(window.innerWidth,window.innerHeight); //设置渲染器的宽高
document.body.appendChild(renderer.domElement); // 将渲染器的dom添加进body中

renderer.render(scene,camera); // 将场景和相机交给渲染器进行渲染

var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial({color:0x123456});
var cube = new THREE.Mesh(geometry,material);
scene.add(cube);
// cube.material.
camera.position.z=10;

renderer.render(scene,camera);


function animate(){
    requestAnimationFrame(animate);

    cube.rotation.x+=0.01;
    cube.rotation.y+=0.01;

    renderer.render(scene, camera);
}

animate();

window.onresize=function(){
    camera.aspect=window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight);
}

export{
    THREE,
    scene,
    camera,
    renderer,
    cube
}