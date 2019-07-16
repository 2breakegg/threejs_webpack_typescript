import {THREE,scene,camera,renderer,cube} from "../mylib/init";


// let material:any = getMaterial(cube.material);


// 我知道cube.material 是一个 MeshBasicMaterial
// 那怎么让他被TS识别成 MeshBasicMaterial 并使用呢
// any 不给提示啊
let material:THREE.MeshBasicMaterial = cube.material as THREE.MeshBasicMaterial; 
material.color=new THREE.Color(0xff00ff); 
console.log(material);
// setT
requestAnimationFrame
