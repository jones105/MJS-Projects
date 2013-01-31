window.onload = function() {
		
	var _MJ  = function(  param  ) {
	var elem = document.querySelectorAll( param )[0];
	
		elem.animate = function(  aOptions, duration  ) {

			var loops = 50,
			delay     = duration / loops,
			count     = 0;	

			(function animate_internal() {
		
				for (var key in aOptions) {
					var value    = parseFloat( elem.style[ key ] ) || 0;		
					var distance = parseFloat( aOptions[ key ] );

					elem.style[ key ] = (value + distance / loops) + 'px';

				}

				count++;
				
				if (count < loops) {

					setTimeout( animate_internal, delay );

				}

			})();	

			return elem;
			
		}

		elem.click = function(  fn  ) {
		
			elem.addEventListener('mousedown',  fn);

		}
		
		elem.hover = function(  fn  ) {
		
			elem.addEventListener('mouseover',  fn);

		}
		
		elem.replaceClass = function( cRem, cAdd ) {

			if (!elem.className) {

				elem.setAttribute('class', cAdd);

			} else if (elem.className.match(cRem)) {
			
				elem.className = elem.className.replace( cRem, cAdd );
				
			
			} else if (!elem.className.match(cAdd)) {
			
				elem.className += ' '+ cAdd;
			
			}

			/*if ( !elem.className.match(cAdd)) {

				elem.className += " "+ cAdd;
			
			}

			elem.className = elem.className.replace( cRem, "" );*/

		}

		return elem;
		
	}

	var button = _MJ('#button');

	button.click( function() { 

		/*button.animate({

			marginLeft: '20px', marginTop: '20px', width: '100px'

		}, 200);*/
		
		setTimeout( function() {
		
			button.replaceClass('matt', 'test');
			
		}, 4000);
		
		setTimeout( function() {
		
			button.replaceClass('world', 'matt');
			
		}, 8000);
		
		setTimeout( function() {
		
			button.replaceClass('big', 'is');
			
		}, 12000);
		
		setTimeout( function() {
		
			button.replaceClass('big', 'cool');
			
		}, 14000);
		
		setTimeout( function() {
		
			button.replaceClass('test', 'jeremy');
			
		}, 16000);
		
		setTimeout( function() {
		
			button.replaceClass('matt', 'fucking');
			
		}, 18000);
		
		setTimeout( function() {
		
			button.replaceClass('is', 'rocks');
			
		}, 22000);
		
		setTimeout( function() {
		
			button.replaceClass('cool', '');
			
		}, 22500);
		

	});
	
	button.hover( function() { 

		console.log('hovered');

	});
	
}