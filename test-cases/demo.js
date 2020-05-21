export function renderDemo(canvas, THREE) {
  var camera, scene, renderer, mesh;

  function init() {
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(wx.getSystemInfoSync().devicePixelRatio);
    renderer.setSize(canvas.width, canvas.height);

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(90, canvas.width / canvas.height, 0.1, 100);
    camera.position.z = 0.01;

    var materials = getMaterials();
    mesh = new THREE.Mesh(new THREE.BoxBufferGeometry(1, 1, 1), materials);
    mesh.geometry.scale(1, 1, -1)
    scene.add(mesh)
  }

  function getMaterials() {
    var materials = []
    for (var i = 0; i < 6; i++) {
      var texture = new THREE.TextureLoader().load(`https://zhangrunhao.oss-cn-beijing.aliyuncs.com/test/${i+1}.jpg`);
      materials.push(new THREE.MeshBasicMaterial({
        map: texture
      }))
    }
    return materials;
  }
  
  function animate() {
    canvas.requestAnimationFrame(animate)
    mesh.rotation.x += 0.001;
    mesh.rotation.y += 0.005;
    renderer.render(scene, camera)
  }

  init()
  animate()
}