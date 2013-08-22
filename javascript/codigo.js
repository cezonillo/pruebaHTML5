/*****variables javascript***/

var map;
var noSesion;

/***Lanzamos la funcion cuando se carga el documento***/
$(document).ready(function(){
	
	/*****Aplicamos movimiento al cubo en funcion de la opción clickcada***/
	$('#tipografias a').on('click', function(){
		$('#cubo').addClass('hoverIzq');	
		setTimeout(function(){$('#opcionesCubo').hide();},400)		
		$('#seccionTipografias').show();		
	})
	
	$('#videos a').on('click', function(){
		$('#cubo').addClass('hoverArriba');	
		setTimeout(function(){$('#opcionesCubo').hide();},400)		
		$('#seccionVideos').show();		
	})
	
	$('#geolocalizacion a').on('click', function(){
		$('#cubo').addClass('hoverDcha');	
		setTimeout(function(){$('#opcionesCubo').hide();},400)		
		$('#seccionGeolocalizacion').show();		
	})
	
	$('#js a').on('click', function(){
		$('#cubo').addClass('hoverIzq');	
		setTimeout(function(){$('#opcionesCubo').hide();},400)		
		$('#seccionJavascript').show();		
	})
	
	$('#html5 a').on('click', function(){
		$('#cubo').addClass('hoverIzq');	
		setTimeout(function(){$('#opcionesCubo').hide();},400)		
		$('#seccionHtml5').show();		
	})
	
	$('#canvas a').on('click', function(){
		$('#cubo').addClass('hoverDcha');	
		setTimeout(function(){$('#opcionesCubo').hide();},400)		
		$('#seccionCanvas').show();		
	})
	
	$('#sesiones a').on('click', function(){
		$('#cubo').addClass('hoverIzq');	
		setTimeout(function(){$('#opcionesCubo').hide();},400)		
		$('#seccionSesiones').show();		
	})
	
	$('#semantica a').on('click', function(){
		$('#cubo').addClass('hoverAbajo');	
		setTimeout(function(){$('#opcionesCubo').hide();},400)		
		$('#seccionSemantica').show();		
	})
	
	$('#responsivo a').on('click', function(){
		$('#cubo').addClass('hoverDcha');	
		setTimeout(function(){$('#opcionesCubo').hide();},400)		
		$('#seccionResponsivo').show();		
	})
	
	$('.volver a').on('click', function(){
		$('#cubo').removeClass('hoverIzq');	
		$('#cubo').removeClass('hoverDcha');
		$('#cubo').removeClass('hoverArriba');	
		$('#cubo').removeClass('hoverAbajo');
		setTimeout(function(){
			$('#seccionTipografias').hide();
			$('#seccionVideos').hide();
			$('#seccionGeolocalizacion').hide();
			$('#seccionJavascript').hide();
			$('#seccionHtml5').hide();
			$('#seccionCanvas').hide();
			$('#seccionSesiones').hide();
			$('#seccionSemantica').hide();
			$('#seccionResponsivo').hide();
		
		},400)		
		$('#opcionesCubo').show();		
	})
	/******fin movimiento cubo****/
	
	/*****funciones para resetear y fullscreen del video****/
	/****resetear el video****/
	$('.reseteaVideo').on('click', function(){
		var video = document.getElementById("tubo");
		if(video != null){
			video.currentTime=0;
		}
	})
	
	/*****pantalla completa****/
	$('.fullScreen').on('click', function(){
		var video = document.getElementById("tubo");
		if(video != null){
			//Para Chromey Safari
			video.webkitEnterFullScreen();
			//Para firefox
			video.mozRequestFullScreen();
		}
	})
	/******fin funciones vídeo****/
	
	
	/******funciones de geolocalización****/
	$("button#geo").click(
		function(){
			getGeolocation();
		}
	);
	
	/*** Calcula la Geolocalización**** */
	function getGeolocation() {
		return navigator.geolocation.getCurrentPosition(handleGeolocation, handleErrors);
	}
	
	/*** Muestra un mapa, Google Maps, con los datos de la Geolocalización. ******/
	function handleGeolocation(position) {
		map = new GMaps({
			div: '#map',
			lat: position.coords.latitude,
			lng: position.coords.longitude,
			height: '400px',
			width:'580px'
		});
		
		map.addMarker({
  			lat: position.coords.latitude,
			lng: position.coords.longitude,
			title: 'Estoy Aquí'
		});
	} 
	
	/*** Controla los errores******/
	function handleErrors(error){
		switch(error.code)
		{
			case error.PERMISSION_DENIED:
				alert("No tienes permisos para utilizar la Geolocalización de Google");
				break;
			case error.POSITION_UNAVAILABLE:
				break;
				alert("No se puede determinar tu posición");
			case error.TIMEOUT:
				alert("Se agotó el tiempo de espera");
				break;
			default:
				alert("Algo ha ido mal, inténtalo de nuevo");
				break;
		}
	}
	/******fin funciones de geolocalización****/
	
	/*****sesiones****/
	if (!localStorage) {
		alert("Tu navegador no soporta Local Storage API");
	}	
	$("#add1").click(function(event) {
	addElemento(1);
	});

	$("#add2").click(function(event) {
		addElementoSession(2);
	});
	
	$("#add3").click(function(event) {
		addElementoNoSession(3);
	});
	
	$("#rem1").click(function(event) {
		remElemento(1);
	});

	$("#rem2").click(function(event) {
		remElementoSession(2);
	});
	
	$("#rem3").click(function(event) {
		remElementoNoSession(3);
	});

	updateElemento(1);
	updateElementoSession(2);
	updateElementoNoSession(3);
	

	function addElemento(elemento) {
		cantidad = localStorage.getItem(elemento);
		if (cantidad == null)
			cantidad = 0;
		localStorage.setItem(elemento, parseInt(cantidad) + 1);
		updateElemento(elemento);
	}

	function remElemento(elemento) {
		cantidad = localStorage.getItem(elemento);
		if (cantidad == null)
			cantidad = 0;
		if (cantidad > 0)
			localStorage.setItem(elemento, parseInt(cantidad) - 1);
		updateElemento(elemento);
	}

	function updateElemento(elemento) {
		cantidad = localStorage.getItem(elemento);
		if (cantidad == null)
			cantidad = 0;
		$("#" + elemento).val(cantidad);
	}
	
	function addElementoSession(elemento) {
		cantidad = sessionStorage.getItem(elemento);
		if (cantidad == null)
			cantidad = 0;
		sessionStorage.setItem(elemento, parseInt(cantidad) + 1);
		updateElementoSession(elemento);
	}

	function remElementoSession(elemento) {
		cantidad = sessionStorage.getItem(elemento);
		if (cantidad == null)
			cantidad = 0;
		if (cantidad > 0)
			sessionStorage.setItem(elemento, parseInt(cantidad) - 1);
		updateElementoSession(elemento);
	}

	function updateElementoSession(elemento) {
		cantidad = sessionStorage.getItem(elemento);
		if (cantidad == null)
			cantidad = 0;
		$("#" + elemento).val(cantidad);
	}
	
	function addElementoNoSession(elemento) {
		cantidad = sessionStorage.getItem(elemento);
		if (noSesion == null)
			noSesion = 0;
		noSesion = noSesion+1;
		updateElementoNoSession(elemento);
	}

	function remElementoNoSession(elemento) {
		if (noSesion == null)
			noSesion = 0;
		if (noSesion > 0)
			noSesion = noSesion-1;
		updateElementoNoSession(elemento);
	}

	function updateElementoNoSession(elemento) {
		if (noSesion == null)
			noSesion = 0;
		$("#" + elemento).val(noSesion);
	}
	
	/*****fin sesiones*****/
	
	/******funciones drag & drop*****/
	
	var hucha = document.getElementById("hucha");
	var euro = document.getElementById("euro").src;
	var dolar= document.getElementById("dolar").src;
	var pound = document.getElementById("pound").src;
	
	monedas = document.getElementById("monedas");
	images = monedas.getElementsByTagName("img");
	
	for(i=0; i < images.length; i++){
		images[i].addEventListener("dragstart", addLight);
		images[i].addEventListener("dragend", removeLight);
	}
	
	hucha.addEventListener("dragover", cancel);
	
	hucha.addEventListener("dragenter", cancel);
	
	hucha.addEventListener("drop", function(event) {
		if (event.preventDefault) {
			event.preventDefault();
		}
		
		switch(event.dataTransfer.getData("Text")){
			case euro:
				alert("Un eurito para la saca!");
				break;
				break;
			case dolar:
				alert("¡Un dolar para la saca!");
				break;
				break;
			case pound:
				alert("Una libra para la saca!");
				break;			
		}
		return false;
	});
	
	/**resaltamos el elemento****/
	function addLight(event) {
		hucha.classList.add("resaltar");
		return false;
	}
	
	/*** Eliminamos el resaltado ***/
	function removeLight(event) {
		hucha.classList.remove("resaltar");
		return false;
	}
	
	/*** Elimina el funcionamiento por defecto del evento.****/
	function cancel(event) {
		if (event.preventDefault) {
			event.preventDefault();
		}
		return false;
	}
	
	/*****fin funciones drag & drop*****/
	
	
	/******funciones canvas, juego piedra papel o tijera*****/
	
	/****cargamos las imágenes al inicio****/
	
	/*$("#juego").addLayer({
	  type: "rectangle",
	  fillStyle: "#fff",
	  x: 0, y: 0,
	  width: 580, height: 500
	})
	.drawLayers();*/
	
	var random;
	
	function pintaInicial(){
		$("#juego").drawImage({
				source: "./images/piedra.jpg",
				layer:true,
				x: 60, y: 65,
				scale: 0.6,
				click:function(layer){
					juega(1);
				}
		});
		
		$("#juego").drawImage({
				source: "./images/papel.jpg",
				layer:true,
				x: 60, y: 175,
				scale: 0.6,
				click:function(layer){
					juega(2);
				}
		});
		
		$("#juego").drawImage({
				source: "./images/tijera.jpg",
				layer:true,
				x: 60, y: 285,
				scale: 0.6,
				click:function(layer){
					juega(3);
				}
		});
		
		$("#juego").drawImage({
				source: "./images/piedra-d.jpg",
				layer:true,
				x: 520, y: 65,
				scale: 0.6
				
		});
		
		$("#juego").drawImage({
				source: "./images/papel-d.jpg",
				layer:true,
				x: 520, y: 175,
				scale: 0.6
		});
		
		$("#juego").drawImage({
				source: "./images/tijera-d.jpg",
				layer:true,
				x: 520, y: 285,
				scale: 0.6
		});
	}
	
	pintaInicial();
	
	function juega(opcion){
		random = Math.floor(Math.random() * 3) + 1;
		switch(opcion){
			case 1:
				switch(random){
					case 1: 
						$("#juego").drawImage({
								source: "./images/piedra.jpg",
								layer:true,
								x: 120, y: 395,
								scale: 0.6,
								click:function(layer){
									juega(1);
								}
						});
						$("#juego").drawImage({
								source: "./images/piedra-d.jpg",
								layer:true,
								x: 460, y: 395,
								scale: 0.6
								
						});
						alert("piedra contra piedra; EMPATE :|!"); 
						break;
					case 2: 
						$("#juego").drawImage({
								source: "./images/piedra.jpg",
								layer:true,
								x: 120, y: 395,
								scale: 0.6,
								click:function(layer){
									juega(1);
								}
						});
						$("#juego").drawImage({
								source: "./images/papel-d.jpg",
								layer:true,
								x: 460, y: 395,
								scale: 0.6
								
						});
						alert("la piedra pierde con el papel; PIERDES :(!"); 
						break;
					case 3: 
						$("#juego").drawImage({
								source: "./images/piedra.jpg",
								layer:true,
								x: 120, y: 395,
								scale: 0.6,
								click:function(layer){
									juega(1);
								}
						});
						$("#juego").drawImage({
								source: "./images/tijera-d.jpg",
								layer:true,
								x: 460, y: 395,
								scale: 0.6
								
						});
						alert("la piedra gana a la tijera; GANAS :)!"); 
						break;
				}
				$('#juego').clearCanvas();
				pintaInicial();
				return false;
				
			case 2:
				switch(random){
					case 1: 
						$("#juego").drawImage({
								source: "./images/papel.jpg",
								layer:true,
								x: 120, y: 395,
								scale: 0.6,
								click:function(layer){
									juega(1);
								}
						});
						$("#juego").drawImage({
								source: "./images/piedra-d.jpg",
								layer:true,
								x: 460, y: 395,
								scale: 0.6
								
						});
						alert("el papel gana a la piedra; GANAS :)!"); 
						break;
					case 2: 
						$("#juego").drawImage({
								source: "./images/papel.jpg",
								layer:true,
								x: 120, y: 395,
								scale: 0.6,
								click:function(layer){
									juega(1);
								}
						});
						$("#juego").drawImage({
								source: "./images/papel-d.jpg",
								layer:true,
								x: 460, y: 395,
								scale: 0.6
								
						});
						alert("el papel empata con el papel; EMPATE :|!"); 
						break;
					case 3: 
						$("#juego").drawImage({
								source: "./images/papel.jpg",
								layer:true,
								x: 120, y: 395,
								scale: 0.6,
								click:function(layer){
									juega(1);
								}
						});
						$("#juego").drawImage({
								source: "./images/tijera-d.jpg",
								layer:true,
								x: 460, y: 395,
								scale: 0.6
								
						});
						alert("el papel pierde con la tijera;  PIERDES :(!"); 
						break;
				}
				$('#juego').clearCanvas();
				pintaInicial();
				return false;
			
			case 3:
				switch(random){
					case 1: 
						$("#juego").drawImage({
								source: "./images/tijera.jpg",
								layer:true,
								x: 120, y: 395,
								scale: 0.6,
								click:function(layer){
									juega(1);
								}
						});
						$("#juego").drawImage({
								source: "./images/piedra-d.jpg",
								layer:true,
								x: 460, y: 395,
								scale: 0.6
								
						});
						alert("la tijera pierde con la piedra; PIERDES :(!"); 
						break;
					case 2: 
						$("#juego").drawImage({
								source: "./images/tijera.jpg",
								layer:true,
								x: 120, y: 395,
								scale: 0.6,
								click:function(layer){
									juega(1);
								}
						});
						$("#juego").drawImage({
								source: "./images/papel-d.jpg",
								layer:true,
								x: 460, y: 395,
								scale: 0.6
								
						});
						alert("la tijera gana al papel; GANAS :)! "); 
						break;
					case 3: 
						$("#juego").drawImage({
								source: "./images/tijera.jpg",
								layer:true,
								x: 120, y: 395,
								scale: 0.6,
								click:function(layer){
									juega(1);
								}
						});
						$("#juego").drawImage({
								source: "./images/tijera-d.jpg",
								layer:true,
								x: 460, y: 395,
								scale: 0.6
								
						});
						alert("la tijera empata con la tijera; EMPATE :|!");
						break;
				}
				$('#juego').clearCanvas();
				pintaInicial();
				return false;
		}
	}
	
	
	
	/******fin funciones canvas, juego piedra papel o tijera*****/
	
	
	
	
	
	
	
})