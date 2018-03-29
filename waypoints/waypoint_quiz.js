// array of all the waypoint markers elements
var markers = $('.waypoint');

//create a waypoint object for each marker in markers array
markers.each(function(i, markerElement) {
			new Waypoint({
					element: markerElement,
					handler: function(direction) {
						//do some stuff
						updateNav((direction == "down") ? i+1 : i);
					}
			})//end object def
		}//end each callback function
	)//end jquery each method


function updateNav(updatedPage) {
	//if markers[updatedPage] exists, down value should be...
	if (markers[updatedPage]) {
		$("a#down").attr("href", "#" + markers[updatedPage].id);
	}
	//if markers[updatedPage-2] exists, up value should be...
	if (markers[updatedPage-2]) {
		$('a#up').attr("href", "#" + markers[updatedPage-2].id);
	}
}

