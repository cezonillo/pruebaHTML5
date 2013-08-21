/*****variables javascript***/

/***A utilizar durante la geolocalización****/
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
	
	
	
	
	
})