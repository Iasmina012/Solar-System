/*  Putina Iasmina-Elena
	AC CTI-RO AN 3
	Proiect EGIOC "Sistemul Solar" */

/* Elements:

	Sun, Earth, Jupiter, Mercury, Venus, Mars, Saturn, Uranus, Neptune, Moon, Pluto
	Stars, Comets

*/

var camera, scene, renderer, light, materialLight, plane;

var params = {
	shadows: true,
	exposure: 1.20,   
	bulbPower: 950,   
};

var sphere1, sphere2, sphere3, sphere4, sphere5, sphere6, sphere7, sphere8, sphere9, sphere10, sphere11, sphere12, sphere13, sphere14, sphere15;

var comet1, comet2, comet3;

init();
animate();

function init() {
	
	var container = document.getElementById('container');

	//CAMERA INIT
	camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 100);
	camera.position.x = 40;
	camera.position.z = 10;
	camera.position.y = 30;

	//SCENE INIT
	scene = new THREE.Scene();

	//SUN
	var sunTexture = new THREE.TextureLoader().load('textures/sun.jpg');
	var lightGeometry = new THREE.SphereGeometry(1.8, 50, 50);
    materialLight = new THREE.MeshStandardMaterial( { map: sunTexture} );

	lightGeometry.color = 0x872580;      
	light = new THREE.PointLight(0x872580, 1, 100, 2);  
	light.power = params.bulbPower;
	light.add(new THREE.Mesh(lightGeometry, materialLight));
	light.position.set(0, 20, 0);
	light.castShadow = true;
	scene.add(light);

	//PLANE INIT
	plane = new THREE.MeshStandardMaterial( {roughness: 1, color: 0x872580,  });

	var textureLoader = new THREE.TextureLoader();
	textureLoader.load('textures/galaxy.jpg', function( map ) {
		map.wrapS = THREE.RepeatWrapping;
		map.wrapT = THREE.RepeatWrapping;
		map.anisotropy = 9;
		map.repeat.set(1, 1);
		plane.map = map;
		plane.needsUpdate = true;
	} );
	
	var planeGeometry = new THREE.PlaneBufferGeometry(100, 100);
	var planeMesh = new THREE.Mesh(planeGeometry, plane);
	planeMesh.receiveShadow = true;
	planeMesh.rotation.x = -Math.PI / 2.0;
	scene.add(planeMesh);
	
	//RENDERER
	renderer = new THREE.WebGLRenderer();
	renderer.physicallyCorrectLights = true;
	renderer.gammaInput = true;
	renderer.gammaOutput = true;
	renderer.shadowMap.enabled = true;
	renderer.toneMapping = THREE.ReinhardToneMapping;
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	container.appendChild(renderer.domElement);

	//ORBITS
	var orbitControl = new THREE.OrbitControls(camera, renderer.domElement);
	orbitControl.target.set(0, 0, 0);
	orbitControl.update();
	orbitControl.maxPolarAngle = Math.PI/2 - 0.01;
	orbitControl.minPolarAngle = 0;
	orbitControl.maxDistance = 60;
	orbitControl.minDistance = 3;
	window.addEventListener('resize', onWindowResize, false);

	//MERCURY
	const mercuryTexture = new THREE.TextureLoader().load('textures/mercury.jpg');
	const geometry1 = new THREE.SphereGeometry(0.20, 32, 32);
    const material1 = new THREE.MeshStandardMaterial( { map: mercuryTexture } );
	sphere1 = new THREE.Mesh(geometry1, material1);
	sphere1.position.x = 1;
	sphere1.position.y = 0.7;
	sphere1.position.z = 1;
	sphere1.castShadow = true;
	scene.add(sphere1);

	//VENUS
	const venusTexture = new THREE.TextureLoader().load('textures/venus.jpg');
	const geometry2 = new THREE.SphereGeometry(0.40, 32, 32);
	const material2 = new THREE.MeshPhongMaterial( { map: venusTexture } );
	sphere2 = new THREE.Mesh(geometry2, material2);
	sphere2.position.x = 3.1;
	sphere2.position.y = 0.07;
	sphere2.position.z = 3.1;
	sphere2.castShadow = true;
	scene.add(sphere2);

	//EARTH
	const earthTexture = new THREE.TextureLoader().load('textures/earth.jpg');
	const geometry3 = new THREE.SphereGeometry(0.60, 32, 32);
	const material3 = new THREE.MeshPhongMaterial( { map: earthTexture } );
	sphere3 = new THREE.Mesh(geometry3, material3);
	sphere3.position.x = 2;
	sphere3.position.y = 0.07;
	sphere3.position.z = 2;
	sphere3.castShadow = true;
	scene.add(sphere3);

	//MARS
	const marsTexture = new THREE.TextureLoader().load('textures/mars.jpg');
	const geometry4 = new THREE.SphereGeometry(0.33, 32, 32 );
    const material4 = new THREE.MeshStandardMaterial( { map: marsTexture } );
	sphere4 = new THREE.Mesh(geometry4, material4);
	sphere4.position.x = 1.3;
	sphere4.position.y = 0.07;
	sphere4.position.z = 1.3;
	sphere4.castShadow = true;
	scene.add(sphere4);

	//JUPITER
	const jupiterTexture = new THREE.TextureLoader().load('textures/jupiter.jpg');
	const geometry5 = new THREE.SphereGeometry(0.80, 32, 32 );
    const material5 = new THREE.MeshStandardMaterial( { map: jupiterTexture } );
	sphere5 = new THREE.Mesh(geometry5, material5);
	sphere5.position.x = 1;
	sphere5.position.y = 0.07;
	sphere5.position.z = 1;
	sphere5.castShadow = true;
	scene.add(sphere5);

	//SATURN
	const saturnTexture = new THREE.TextureLoader().load('textures/saturn.jpg');
	const geometry6 = new THREE.SphereGeometry(0.73, 32, 32);
	const material6 = new THREE.MeshPhongMaterial( { map: saturnTexture } );
	sphere6 = new THREE.Mesh(geometry6, material6);
	sphere6.position.x = 2.5;
	sphere6.position.y = 0.07;
	sphere6. position.z = 2.5;
	sphere6.castShadow = true;
	scene.add(sphere6);

	//URANUS
	const uranusTexture = new THREE.TextureLoader().load('textures/uranus.jpg');
	const geometry7 = new THREE.SphereGeometry(0.65, 32, 32);
	const material7 = new THREE.MeshPhongMaterial( { map: uranusTexture } );
	sphere7 = new THREE.Mesh(geometry7, material7);
	sphere7.position.x = 2.8;
	sphere7.position.y = 0.07;
	sphere7.position.z = 2.8;
	sphere7.castShadow = true;
	scene.add(sphere7);

	//NEPTUNE
	const neptuneTexture = new THREE.TextureLoader().load('textures/neptune.jpg');
	const geometry8 = new THREE.SphereGeometry(0.64, 32, 32);
	const material8 = new THREE.MeshPhongMaterial( { map: neptuneTexture } );
	sphere8 = new THREE.Mesh(geometry8, material8);
	sphere8.position.x = 1.9;
	sphere8.position.y = 0.07;
	sphere8.position.z = 1.9;
	sphere8.castShadow = true;
	scene.add(sphere8);

	//PLUTO
	const plutoTexture = new THREE.TextureLoader().load('textures/pluto.jpg');
	const geometry9 = new THREE.SphereGeometry(0.15, 32, 32);
	const material9 = new THREE.MeshPhongMaterial( {  map: plutoTexture } );
	sphere9 = new THREE.Mesh(geometry9, material9);
	sphere9.position.x = 2.2;
	sphere9.position.y = 0.07;
	sphere9.position.z = 2.2;
	sphere9.castShadow = true;
	scene.add(sphere9);

	//MOON
	const moonTexture = new THREE.TextureLoader().load('textures/moon.jpg');
	const geometry10 = new THREE.SphereGeometry(0.25, 32, 32);
	const material10 = new THREE.MeshPhongMaterial( { map: moonTexture } );
	sphere10 = new THREE.Mesh(geometry10, material10);
	sphere10.position.x = 3.4;
	sphere10.position.y = 0.07;
	sphere10.position.z = 3.4;
	sphere10.castShadow = true;
	scene.add(sphere10);

	//STARS
	const geometry11 = new THREE.SphereGeometry(0.1, 32, 32);
	const material11 = new THREE.MeshPhongMaterial( { color: 0x2ADCFC, shading: THREE.FlatShading} );
	sphere11 = new THREE.Mesh(geometry11, material11);
	sphere11.position.x = 4;
	sphere11.position.y = 0.07;
	sphere11.position.z = 4;
	sphere11.castShadow = true;
	scene.add(sphere11);

	const geometry12 = new THREE.SphereGeometry(0.1, 32, 32);
	const material12 = new THREE.MeshPhongMaterial( { color: 0x29FCD2, shading: THREE.FlatShading} );
	sphere12 = new THREE.Mesh(geometry12, material12);
	sphere12.position.x = 4.3;
	sphere12.position.y = 0.07;
	sphere12.position.z = 4.3;
	sphere12.castShadow = true;
	scene.add(sphere12);

	const geometry13 = new THREE.SphereGeometry(0.1, 32, 32);
	const material13 = new THREE.MeshPhongMaterial( { color: 0x27FC86, shading: THREE.FlatShading} );
	sphere13 = new THREE.Mesh(geometry13, material13);
	sphere13.position.x = 4.6;
	sphere13.position.y = 0.07;
	sphere13.position.z = 4.6;
	sphere13.castShadow = true;
	scene.add(sphere13);

	const geometry14 = new THREE.SphereGeometry(0.1, 32, 32);
	const material14 = new THREE.MeshPhongMaterial( { color: 0x26FD39, shading: THREE.FlatShading} );
	sphere14 = new THREE.Mesh(geometry14, material14);
	sphere14.position.x = 4.9;
	sphere14.position.y = 0.07;
	sphere14.position.z = 4.9;
	sphere14.castShadow = true;
	scene.add(sphere14);

	const geometry15 = new THREE.SphereGeometry(0.1, 32, 32);
	const material15 = new THREE.MeshPhongMaterial( { color: 0x2C93FC, shading: THREE.FlatShading,emissiveIntensity:1 } );
	sphere15 = new THREE.Mesh(geometry15, material15);
	sphere15.position.x = 3.7;
	sphere15.position.y = 0.07;
	sphere15.position.z = 3.7;
	sphere15.castShadow = true;
	scene.add(sphere15);
	
	//COMETS
	var geometry = new THREE.SphereGeometry(0.1, 8, 8);
	comet1 = new THREE.PointLight(0x008AE6, 2, 50);   
	comet1.add( new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: 0x008ae6, shading: THREE.FlatShading } ) ) );
	comet1.position.y = 1.5;
	comet1.power = params.bulbPower - 150;
	scene.add(comet1);
	
	var geometry = new THREE.SphereGeometry(0.1, 8, 8);
	comet2 = new THREE.PointLight(0x6600cc, 2, 50);   
	comet2.add( new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: 0x6600cc, shading: THREE.FlatShading } ) ) );
	comet2.position.y = 1.5;
	comet2.power = params.bulbPower - 50;
	scene.add( comet2 );
	
	var geometry = new THREE.SphereGeometry(0.1, 8, 8);
	comet3 = new THREE.PointLight(0xffffe0, 2, 50);  
	comet3.add( new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: 0xffffe0, shading: THREE.FlatShading } ) ) );
	comet3.position.y = 1.5;
	comet3.power = params.bulbPower - 50;
	scene.add( comet3 );
	
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
	requestAnimationFrame(animate);
	render();
}

function render() {
	renderer.toneMappingExposure = Math.pow( params.exposure, 5.0 );

	materialLight.emissiveIntensity = light.intensity / Math.pow( 0.02, 2.0 );
	var timeLight = Date.now() * 0.0008;
	var timeSphere = Date.now() * 0.006;
	var timeComet = Date.now() * 0.002;
	light.position.y = Math.cos( timeLight ) * 0.75 + 2.8;

	sphere1.position.set(
		Math.cos( timeSphere * 0.1 ) * 2.2,
		Math.abs( Math.cos( timeSphere * 0.2 ) ) * 0.66 + 2.5,
		Math.sin( timeSphere * 0.1 ) * 2.2
	);
	sphere1.rotation.z = timeSphere * 0.005;

	sphere2.position.set(
		Math.cos( timeSphere * 0.15 ) * 3.3,
		Math.abs( Math.cos( timeSphere * 0.2 ) ) * 0.66 + 2.5,
		Math.sin( timeSphere * 0.15 ) * 3.3
	);
	sphere2.rotation.x = timeSphere * -0.09;

	sphere3.position.set(
		Math.cos( timeSphere * 0.2 ) * 5, 
		Math.abs( Math.cos( timeSphere * 0.2 ) ) * 0.66 + 2.5,
		Math.sin( timeSphere * 0.2 ) * 5
	);
	sphere3.rotation.x = timeSphere * 0.09;

	sphere4.position.set(
		Math.cos( timeSphere * 0.25 ) * 6.5,
		Math.abs( Math.cos( timeSphere * 0.2 ) ) * 0.66 + 2.5,
		Math.sin( timeSphere * 0.25 ) * 6.5
	);
	sphere4.rotation.x = timeSphere * 0.1;

	sphere5.position.set(
		Math.cos( timeSphere * 0.30 ) * 8.2,
		Math.abs( Math.cos( timeSphere * 0.2 ) ) * 0.66 + 2.5,
		Math.sin( timeSphere * 0.30 ) * 8.2
	);
	sphere5.rotation.x = timeSphere * 1.98;
	sphere5.rotation.y = ( Math.PI / 2 ) - timeSphere * 0.01;
	sphere5.rotation.z = timeSphere * 0.08;

	sphere6.position.set(
		Math.cos( timeSphere * 0.35 ) * 10.5,
		Math.abs( Math.cos( timeSphere * 0.2 ) ) * 0.66 + 2.5,
		Math.sin( timeSphere * 0.35 ) * 10.5
	);
	sphere6.rotation.x = timeSphere * 0.12;

	sphere7.position.set(
		Math.cos( timeSphere * 0.40 ) * 12.5,
		Math.abs( Math.cos( timeSphere * 0.2 ) ) * 0.66 + 2.5,
		Math.sin( timeSphere * 0.40 ) * 12.5
	);
	sphere7.rotation.x = ( Math.PI / 2 ) - timeSphere * 0.1;
	sphere7.rotation.y = timeSphere * 0.8;

	sphere8.position.set(
		Math.cos( timeSphere * 0.45 ) * 14,
		Math.abs( Math.cos( timeSphere * 0.2 ) ) * 0.66 + 2.5,
		Math.sin( timeSphere * 0.45 ) * 14
	);
	sphere8.rotation.x = timeSphere * 0.11;

	sphere9.position.set(
		Math.cos( timeSphere * 0.50 ) * 15, 
		Math.abs( Math.cos( timeSphere * 0.2 ) ) * 0.66 + 2.5,
		Math.sin( timeSphere * 0.50 ) * 15
	);
	sphere9.rotation.x = timeSphere * 0.18;

	sphere10.position.set(
		Math.cos( timeSphere * 0.55 ) * 16,
		Math.abs( Math.cos( timeSphere * 0.2 ) ) * 0.66 + 2.5,
		Math.sin( timeSphere * 0.55 ) * 16
	);
	sphere10.rotation.x = timeSphere * 0.1;

	sphere11.position.set(
		Math.cos( timeSphere * 0.11 ) * 4,
		Math.abs( Math.cos( timeSphere * 0.2 ) ) * 0.66 + 1.95,
		Math.sin( timeSphere * 0.11 ) * 4
	);
	sphere11.rotation.y = ( Math.PI / 2 ) - timeSphere * 0.1;
	sphere11.rotation.z = timeSphere * 0.8;

	sphere12.position.set(
		Math.cos( timeSphere * -0.31 ) * 4.3,
		Math.abs( Math.cos( timeSphere * 0.2 ) ) * 0.66 + 2,
		Math.sin( timeSphere * -0.31 ) * 4.3
	);
	sphere12.rotation.y = ( Math.PI / 2 ) - timeSphere * 0.1;
	sphere12.rotation.z = timeSphere * 0.8;

	sphere13.position.set(
		Math.cos( timeSphere * 0.5 ) * 4.6,
		Math.abs( Math.cos( timeSphere * 0.2 ) ) * 0.66 + 1.85,
		Math.sin( timeSphere * 0.5 ) * 4.6
	);
	sphere13.rotation.y = ( Math.PI / 2 ) - timeSphere * 0.1;
	sphere13.rotation.z = timeSphere * 0.8;

	sphere14.position.set(
		Math.cos( timeSphere * -0.22 ) * 4.9,
		Math.abs( Math.cos( timeSphere * 0.2 ) ) * 0.66 + 1.4,
		Math.sin( timeSphere * -0.22 ) * 4.9
	);
	sphere14.rotation.y = ( Math.PI / 2 ) - timeSphere * 0.1;
	sphere14.rotation.z = timeSphere * 0.8;

	sphere15.position.set(
		Math.cos( timeSphere * -0.14 ) * 3.7,
		Math.abs( Math.cos( timeSphere * 0.2 ) ) * 0.66 + 1.68,
		Math.sin( timeSphere * -0.14 ) * 3.7
	);
	sphere15.rotation.y = ( Math.PI / 2 ) - timeSphere * 0.1;
	sphere15.rotation.z = timeSphere * 0.8;
	
	var scale = 2 / (3 - Math.cos(2*timeComet)) + 2;
	
	comet1.position.x = scale * Math.cos(timeComet);
	comet1.position.z = scale * Math.sin(2*timeComet) / 2 - 3;
	
	comet2.position.x = scale * Math.cos(timeComet)
	comet2.position.z = scale * Math.sin(2*timeComet) / 2 + 3;
	
	comet3.position.x = scale * Math.cos(timeComet)
	comet3.position.z = scale * Math.sin(3*timeComet) / 2 + 4;
	
	renderer.render( scene, camera );
}