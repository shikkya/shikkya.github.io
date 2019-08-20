var scene, camera, cameraCtrl, renderer;

const nbTrucs = 200, tRadius = 2, tMargin = 0.2, radius=10;
var trucs, tGeometry;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
  cameraCtrl = new THREE.OrbitControls(camera);
  cameraCtrl.autoRotate = true;
  cameraCtrl.autoRotateSpeed = 5;

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  initScene();

  onWindowResize();
  window.addEventListener('resize', onWindowResize, false);

  animate();
};

function initScene() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);
  camera.position.z = 50;
  // camera.position.y = -50;

  // this.initLights();
  this.initGeo();

  var geometry = new THREE.SphereGeometry(radius, 16, 16);
  var material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  var sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  trucs = [];
  for (var i = 0; i < nbTrucs; i++) {
    var truc = new Truc();
    trucs.push(truc);
    scene.add(truc.o3d);
  }
}

function initGeo() {
  const shape = new THREE.Shape();
  const y = Math.sin(-Math.PI / 6) * tRadius;
  const x = Math.cos(Math.PI / 6) * tRadius;
  shape.moveTo(0, tRadius);
  shape.lineTo(-x, y);
  shape.lineTo(x, y);
  shape.lineTo(0, tRadius);
  tGeometry = new THREE.ShapeBufferGeometry(shape);
}

function initLights() {
  const lightIntensity = 0.5;
  const lightDistance = 200;

  scene.add(new THREE.AmbientLight(0xeeeeee));

  var light;

  light = new THREE.PointLight(randomColor({ luminosity: 'light' }), lightIntensity, lightDistance);
  light.position.set(0, 100, 0);
  scene.add(light);
  light = new THREE.PointLight(randomColor({ luminosity: 'light' }), lightIntensity, lightDistance);
  light.position.set(0, -100, 0);
  scene.add(light);

  light = new THREE.PointLight(randomColor({ luminosity: 'light' }), lightIntensity, lightDistance);
  light.position.set(100, 0, 0);
  scene.add(light);
  light = new THREE.PointLight(randomColor({ luminosity: 'light' }), lightIntensity, lightDistance);
  light.position.set(-100, 0, 0);
  scene.add(light);

  light = new THREE.PointLight(randomColor({ luminosity: 'light' }), lightIntensity, lightDistance);
  light.position.set(0, 0, 100);
  scene.add(light);
  light = new THREE.PointLight(randomColor({ luminosity: 'light' }), lightIntensity, lightDistance);
  light.position.set(0, 0, -100);
  scene.add(light);
}

function animate() {
  requestAnimationFrame(animate);

  cameraCtrl.update();

  renderer.render(scene, camera);
};

function Truc() {
  if (!Truc.points) {
    Truc.counter = 0;
    Truc.points = getFibonacciSpherePoints(nbTrucs, radius, false);
  }
  this.init();
}

Truc.prototype.init = function () {
  this.o3d = new THREE.Object3D();

  var p = Truc.points[Truc.counter++];
  this.o3d.position.set(p.x, p.y, p.z);
  this.o3d.lookAt(p.multiplyScalar(2));

  // var material = new THREE.MeshStandardMaterial({ color: randomColor({ luminosity: 'light' }), roughness: 0.4, metalness: 0.9, side: THREE.DoubleSide });
  var material = new THREE.MeshBasicMaterial({ color: randomColor({ luminosity: 'light' }), side: THREE.DoubleSide });

  var t0 = new THREE.Mesh(tGeometry, material);
  this.o3d.add(t0);

  var dx = Math.cos(Math.PI / 6);
  var dy = Math.sin(Math.PI / 6);
  var dr = dy * tRadius;

  this.t1 = group(material);
  this.t1.rotation.z = Math.PI;
  this.t1.position.y = - dr - tMargin;
  this.o3d.add(this.t1);

  this.t2 = group(material);
  this.t2.rotation.z = Math.PI / 3;
  var v = (new THREE.Vector3(-dx, dy, 0)).multiplyScalar(dr + tMargin);
  this.t2.position.x = v.x;
  this.t2.position.y = v.y;
  this.o3d.add(this.t2);

  this.t3 = group(material);
  this.t3.rotation.z = - Math.PI / 3;
  v = (new THREE.Vector3(dx, dy, 0)).multiplyScalar(dr + tMargin);
  this.t3.position.x = v.x;
  this.t3.position.y = v.y;
  this.o3d.add(this.t3);

  // var tconf = { x: 0, ease: Power1.easeInOut, repeat: -1, yoyo: true };
  // TweenMax.to(t1.group1.rotation, 1, tconf);
  // TweenMax.to(t2.group1.rotation, 1, tconf);
  // TweenMax.to(t3.group1.rotation, 1, tconf);

  this.shuffle();

  // this.o3d.add(t2);
  // this.o3d.add(t3);
};

Truc.prototype.shuffle = function () {
  this.scale = 0.2+rnd(0.2);
  this.o3d.scale.set(0.01, 0.01, 0.01);

  const duration = 2 + rnd(2);
  const bloomDuration = 2;
  const stayDuration = 3 + rnd(2);
  var tweens = [];
  tweens.push(TweenMax.to(this.o3d.scale, duration, { x: this.scale, y: this.scale, z: this.scale, ease: Power1.easeIn }));
  tweens.push(TweenMax.to(this.o3d.rotation, duration, { z: 3 * Math.PI + rnd(Math.PI / 3), ease: Power0.easeInOut }));

  var tconf = { x: Math.PI / 8, ease: Power0.easeIn, delay: duration - bloomDuration };
  tweens.push(TweenMax.to(this.t1.group1.rotation, bloomDuration, tconf));
  tweens.push(TweenMax.to(this.t2.group1.rotation, bloomDuration, tconf));
  tweens.push(TweenMax.to(this.t3.group1.rotation, bloomDuration, tconf));

  TweenMax.to({}, duration + stayDuration, {
    onComplete: function () {
      for (var i = 0; i < tweens.length; i++) {
        tweens[i].reverse();
      }
      TweenMax.to({}, duration, {
        onComplete: function () {
          this.shuffle();
        },
        onCompleteScope: this
      });
    },
    onCompleteScope: this
  });
};

function group(material) {
  var group = new THREE.Object3D();
  group.group1 = group1(material);
  group.add(group.group1);

  return group;
}

function group1(material) {
  var mesh = new THREE.Mesh(tGeometry, material);
  mesh.position.y = Math.sin(Math.PI / 6) * tRadius;
  var group1 = new THREE.Object3D();
  group1.add(mesh);
  group1.rotation.x = Math.PI * 0.62;
  return group1;
}

function getFibonacciSpherePoints(samples, radius, randomize) {
  samples = samples || 1;
  radius = radius || 1;
  randomize = randomize || true;
  var random = 1;
  if (randomize === true) {
    random = Math.random() * samples;
  }
  var points = [];
  var offset = 2 / samples;
  var increment = Math.PI * (3 - Math.sqrt(5));
  for (var i = 0; i < samples; i++) {
    var y = ((i * offset) - 1) + (offset / 2);
    var distance = Math.sqrt(1 - Math.pow(y, 2));
    var phi = ((i + random) % samples) * increment;
    var x = Math.cos(phi) * distance;
    var z = Math.sin(phi) * distance;
    x = x * radius;
    y = y * radius;
    z = z * radius;
    var point = new THREE.Vector3(x, y, z);
    points.push(point);
  }
  return points;
}

function rnd(max, negative) {
  return negative ? Math.random() * 2 * max - max : Math.random() * max;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

init();