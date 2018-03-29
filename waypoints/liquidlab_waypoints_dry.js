/* js code to update up/down buttons using waypoints framework
http://imakewebthings.com/waypoints/guides/getting-started/
*/

// array of all marker elements
var markers = $('.waypoint');

// add a Waypoint object for each marker
markers.each(function(i, marker) {
    new Waypoint({
      element: marker,
      handler: function (direction) {
        // console.log(marker.id + '-' + direction);
        updateNav((direction == "up") ? i : i + 1);
      }
    })
})

// function to set the up/down href
function updateNav(page) {
  // console.log(page);
  if (markers[page - 2]) {
    $("a#up").attr("href", "#" + markers[page - 2].id);
  }
  if (markers[page]) {
    $("a#down").attr("href", "#" + markers[page].id);
  }
}
