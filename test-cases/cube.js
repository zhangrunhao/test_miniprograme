// export function renderCube(canvas, THREE) {
//   var camera, scene, renderer;
//   var mesh;
//   init();
//   animate();
//   function init() {
//     camera = new THREE.PerspectiveCamera(70, canvas.width / canvas.height, 1, 1000);
//     camera.position.z = 400;
//     scene = new THREE.Scene();

//         // lights
//         var light = new THREE.HemisphereLight(0xffffff, 0x444444);
//         light.position.set(0, 20, 0);
//         scene.add(light);
//         light = new THREE.DirectionalLight(0xffffff);
//         light.position.set(0, 20, 10);
//         scene.add(light);

//     // var texture = new THREE.TextureLoader().load('/assets/crate.png');
//     var texture = new THREE.TextureLoader().load('https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg');
//     var geometry = new THREE.BoxBufferGeometry(200, 200, 200);
//     var material = new THREE.MeshBasicMaterial({ map: texture });
//     mesh = new THREE.Mesh(geometry, material);
//     scene.add(mesh);

//     renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setPixelRatio(wx.getSystemInfoSync().pixelRatio);
//     renderer.setSize(canvas.width, canvas.height);
//   }
//   function onWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(canvas.width, canvas.height);
//   }
//   function animate() {
//     canvas.requestAnimationFrame(animate);
//     mesh.rotation.x += 0.005;
//     mesh.rotation.y += 0.01;
//     renderer.render(scene, camera);
//   }
// }