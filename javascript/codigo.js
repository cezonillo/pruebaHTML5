/***Lanzamos la funcion cuando se carga el documento***/
$(document).ready(function(){
	
	/*****Aplicamos movimiento al cubo en funcion de la opci�n clickcada***/
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
	
})