export function renderDemo(canvas, THREE) {
  var camera, scene, renderer, mesh, lon = 0.1;

  function init() {
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(wx.getSystemInfoSync().devicePixelRatio);
    renderer.setSize(canvas.width, canvas.height);

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(90, canvas.width / canvas.height, 0.1, 100);

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
    update()
  }

  function update() {
    lon += 0.1;

    var phi = THREE.Math.degToRad(90);
    var theta = THREE.Math.degToRad(lon);

    var x = Math.sin(phi) * Math.cos(theta);
    var y = Math.cos(phi);
    var z = Math.sin(phi) * Math.sin(theta);
    
    camera.lookAt(new THREE.Vector3(x, y, z))
    renderer.render(scene, camera)
  }
  init()
  animate()
}