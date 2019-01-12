<html>
	<head>
		<title>Cigna Network Diagram Start</title>
	</head>

	<body>
		
		<script src="js/three.js"></script>
		<script src="js/OrbitControls.js"></script>
		<script src="js/WebGL.js"></script>
		<script src="js/stats.min.js"></script>
		<script src="js/Projector.js"></script>

<div id="ThreeJS" style="position: absolute; left:0px; top:0px"></div>

		<script>
            
			var container, scene, camera, renderer, controls, stats;
			var pancho1;
			var pancho;
			var pancho2;
			var pancho3;
			var pancho4;
			var pancho5;
			var pancho6;
			var pancho000;
            var projector, mouse = { x: 0, y: 0 }, INTERSECTED;
            var sprite1;
            var canvas1, context1, texture1;

			var camera, controls, scene, renderer;

			init();
			
			animate();



			function init() {

				//Add Scene
				scene = new THREE.Scene();
				scene.background = new THREE.Color( 0xcccccc );
				scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );

				//Add Renderer
				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.body.appendChild( renderer.domElement );

				//Add Camera
				camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
				camera.position.set( 400, 200, 0 );

				// Camera Controls
				controls = new THREE.OrbitControls( camera, renderer.domElement );
				controls.enableDamping = true; 
				controls.dampingFactor = 0.25;
				controls.screenSpacePanning = false;
					//Enable 360 Y, X, & Z
				camera.rotation.order = 'YXZ';
				const heading = camera.rotation.y;
				const radians = heading > 0 ? heading : (2 * Math.PI) + heading;
 				const degrees = THREE.Math.radToDeg(radians);
				controls.minDistance = 100;
				controls.maxDistance = 500;






				// //Tooltip Start
				// //Add Projector
                // projector = new THREE.Projector();
                // document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				// //HTML element to listen on 
                // canvas1 = document.createElement('canvas');
                // context1 = canvas1.getContext('2d');
                // context1.font = "Bold 20px Arial";
                // context1.fillStyle = "rgba(0,0,0,0.95)";
                // context1.fillText('Hello, world!', 0, 20);
                // texture1 = new THREE.Texture(canvas1) 
				// texture1.needsUpdate = true;
				
				// //Sprite
                // var spriteMaterial = new THREE.SpriteMaterial( { map: texture1 } );
				// sprite1 = new THREE.Sprite( spriteMaterial );
				// sprite1.scale.set(200,100,1.0);
				// sprite1.position.set( 50, 50, 0 );
				// scene.add( sprite1 );	





				container = document.getElementById( 'ThreeJS' );
				container.appendChild(renderer.domElement);
				stats = new Stats();
				stats.domElement.style.position = 'absolute';
				stats.domElement.style.bottom = '0px';
				stats.domElement.style.zIndex = 100;
				container.appendChild(stats.domElement);
				



				//Node 0
				var test = new THREE.SphereGeometry(10,10,10);
				var testmat = new THREE.MeshLambertMaterial({color:0x620440, reflectivity: 5});
				var pancho = new THREE.Mesh(test,testmat);
				pancho.position.y = 25;
				pancho.position.z = 40;
				pancho.position.x = -40;
				pancho.name = "Object 1";
				scene.add(pancho);


				//Node 1
				var test1 = new THREE.SphereGeometry(10,10,10)
                var testmat1 = new THREE.MeshLambertMaterial({color:0x620440, reflectivity: 5});
				var pancho1 = new THREE.Mesh(test,testmat);
				pancho1.position.y = 45;
				pancho1.position.z = 60;
				pancho1.position.x = 20;
				pancho1.name = "Object 2";
				scene.add(pancho1);


				//Node 2
				var test2 = new THREE.SphereGeometry(10,10,10)
                var testmat2 = new THREE.MeshLambertMaterial({color:0x620440, reflectivity: 5});
				var pancho2 = new THREE.Mesh(test,testmat);
				pancho2.position.y = 65;
				pancho2.position.z = -80;
				pancho2.position.x = 40;
				pancho2.name = "Object 3";
				scene.add(pancho2);

                
				//Node 3
				var pancho3 = new THREE.Mesh(test,testmat);
				var test3 = new THREE.SphereGeometry(10,10,10)
                var testmat3 = new THREE.MeshLambertMaterial({color:0x620440,reflectivity: 5});
				var pancho3 = new THREE.Mesh(test,testmat);
				pancho3.position.y = -65;
				pancho3.position.z = -80;
				pancho3.position.x = -40;
				pancho3.name = "Object 4";
				scene.add(pancho3);



				//Node 4
				var pancho4 = new THREE.Mesh(test,testmat);
				var test4 = new THREE.SphereGeometry(10,10,10)
                var testmat4 = new THREE.MeshLambertMaterial({color:0x620440, reflectivity: 5});
				var pancho4 = new THREE.Mesh(test,testmat);
				pancho4.position.y = 65;
				pancho4.position.z = -80;
				pancho4.position.x = -40;
				pancho4.name = "Object 5";
				scene.add(pancho4);



				//Node 5
				var pancho5 = new THREE.Mesh(test,testmat);
				var test5 = new THREE.SphereGeometry(10,10,10)
                var testmat5 = new THREE.MeshLambertMaterial({color:0x620440, reflectivity: 5});
				var pancho5 = new THREE.Mesh(test,testmat);
				pancho5.position.y = 65;
				pancho5.position.z = -80;
				pancho5.position.x = -20;
				pancho5.name = "Object 6";
				scene.add(pancho5);


				//Node 6
				var pancho6 = new THREE.Mesh(test,testmat);
				var test6 = new THREE.SphereGeometry(10,10,10)
                var testmat6 = new THREE.MeshLambertMaterial({color:0x620440, reflectivity: 5});
				var pancho6 = new THREE.Mesh(test,testmat);
				pancho6.position.y = 35;
				pancho6.position.z = -80;
				pancho6.position.x = -20;
				pancho6.name = "Object 7";
				scene.add(pancho6);



				// CENTER NODE
				var test000 = new THREE.SphereGeometry(20,20,20);
				var testmat000 = new THREE.MeshLambertMaterial({color:0x025000,  reflectivity: 5});
				var pancho000 = new THREE.Mesh(test000,testmat000);
				pancho000.position.y = 0;
				pancho000.position.z = 0;
				pancho000.position.x = 0;
				pancho000.name = "Center Node";
				scene.add(pancho000);



				// LINES FOR NODES
				var material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
				var geometry = new THREE.Geometry();
				geometry.vertices.push(new THREE.Vector3( 0, 0, 0) );
				geometry.vertices.push(new THREE.Vector3( -40, 25, 40) );
				geometry.vertices.push(new THREE.Vector3( 0, 0, 0) );
				geometry.vertices.push(new THREE.Vector3( 20, 45, 60) );
				geometry.vertices.push(new THREE.Vector3( 0, 0, 0) );
				geometry.vertices.push(new THREE.Vector3( 40, 65, -80) );
				geometry.vertices.push(new THREE.Vector3( 0, 0, 0) );
				geometry.vertices.push(new THREE.Vector3( -40, -65, -80) );
				geometry.vertices.push(new THREE.Vector3( 0, 0, 0) );
				geometry.vertices.push(new THREE.Vector3( -40, 65, -80) );
				geometry.vertices.push(new THREE.Vector3( 0, 0, 0) );
				geometry.vertices.push(new THREE.Vector3( -20, 35, -80) );
				geometry.vertices.push(new THREE.Vector3( 0, 0, 0) );
				geometry.vertices.push(new THREE.Vector3( -20, 65, -80) );
				geometry.vertices.push(new THREE.Vector3( 0, 0, 0) );
				var line = new THREE.Line( geometry, material );
				scene.add( line );

            



				// Lights

				var light = new THREE.DirectionalLight( 0xffffff );
				light.position.set( 1, 1, 1 );
				scene.add( light );
				var light = new THREE.DirectionalLight( 0x002288 );
				light.position.set( - 1, - 1, - 1 );
				scene.add( light );
				var light = new THREE.AmbientLight( 0x222222 );
				scene.add( light );
				window.addEventListener( 'resize', onWindowResize, false );



			}
				       //Init function End
					   //
  					   //
				  	   //




			function onDocumentMouseMove( event ) 
			{
				// update sprite position
				sprite1.position.set( event.clientX, event.clientY - 20, 0 );
				
				// update the mouse variable
				mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
				mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

			}




				// Resize camera for different browser zoom
			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}


				// Tie together
			function animate() {

				requestAnimationFrame( animate ); 

				controls.update(); 

                update();

				render();

			}


				// Submit objects to render engine
			function render() {

				renderer.render( scene, camera );
				requestAnimationFrame(render);

			}

            function update() {
//             {

// // create a Ray with origin at the mouse position
// 	//   and direction into the scene (camera direction)
// 	var vector = new THREE.Vector3( mouse.x, mouse.y, 1 );
// 	//projector.unprojectVector( vector, camera );
// 	vector.unproject(camera);
	
// 	var ray = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );
// 	// create an array containing all objects in the scene with which the ray intersects
// 	var intersects = ray.intersectObjects( scene.children );
// 	// INTERSECTED = the object in the scene currently closest to the camera 
// 	//		and intersected by the Ray projected from the mouse position 	
	
// 	// if there is one (or more) intersections
// 	if ( intersects.length > 0 )
// 	{
// 		// if the closest object intersected is not the currently stored intersection object
// 		if ( intersects[ 0 ].object != INTERSECTED ) 
// 		{
// 		    // restore previous intersection object (if it exists) to its original color
// 			if ( INTERSECTED ) 
// 				INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
// 			// store reference to closest object as current intersection object
// 			INTERSECTED = intersects[ 0 ].object;
// 			// store color of closest object (for later restoration)
// 			INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
// 			// set a new color for closest object
// 			INTERSECTED.material.color.setHex( 0xffff00 );
// 			console.log('---');
// 			// update text, if it has a "name" field.
// 			if ( intersects[ 0 ].object.name )
// 			{
// 			    context1.clearRect(0,0,640,480);
// 				var message = intersects[ 0 ].object.name;
// 				var metrics = context1.measureText(message);
// 				var width = metrics.width;
// 				context1.fillStyle = "rgba(0,0,0,0.95)"; // black border
// 				context1.fillRect( 0,0, width+8,20+8);
// 				context1.fillStyle = "rgba(255,255,255,0.95)"; // white filler
// 				context1.fillRect( 2,2, width+4,20+4 );
// 				context1.fillStyle = "rgba(0,0,0,1)"; // text color
// 				context1.fillText( message, 4,20 );
// 				texture1.needsUpdate = true;
// 				console.log("This is correct. The object name is : " + intersects[0].object.name);
// 			}
// 			else
// 			{
// 				context1.clearRect(0,0,300,300);
// 				texture1.needsUpdate = true;
// 				console.log("CHECK" + intersects[0].object.name);


// 			}
// 		}
// 	} 
// 	else // there are no intersections
// 	{
// 		// restore previous intersection object (if it exists) to its original color
// 		if ( INTERSECTED ) 
// 			INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
// 		// remove previous intersection object reference
// 		//     by setting current intersection object to "nothing"
// 		INTERSECTED = null;
// 		context1.clearRect(0,0,300,300);
// 		texture1.needsUpdate = true;
// 	}
	
	controls.update();
	stats.update();



            }






			

		</script>

	</body>
</html>
