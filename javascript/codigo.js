/*****variables javascript***/

/***A utilizar durante la geolocalización****/
var map;


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
	
	
	
})