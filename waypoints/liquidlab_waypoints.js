/* js code to update up/down buttons using waypoints framework
http://imakewebthings.com/waypoints/guides/getting-started/
*/

// array of all marker elements
var markers = $('.waypoint');

// add a Waypoint object for each marker
for (var i=0; i<markers.length; i++ ) {
    var marker = markers[i];
    function makeWaypoint(i, marker) {
        new Waypoint({
          element: marker,
          handler: function(direction) {
              console.log(marker.id + '-' + direction + ' array index ' + i);

              function updateNav() {
                  var page;
                  if (direction == "down") {
                    page = i+1;
                  } else {
                    page = i;
                  }//you could make above if/else statement DRYer by using ternary/conditional operator syntax
                  //eg (direction == "down") ? i+1 : i;

                  // does markers[page] exist?
                  if (markers[page]) {
                    $("a#down").attr("href", "#" + markers[page].id);
                  }

                  // does markers[page-2] exist?
                  if (markers[page - 2]) {
                    $("a#up").attr("href", "#" + markers[page-2].id);
                  }

              }// end updateNav fx def

              updateNav();

          }//end handler fx
        })
    }//end makeWaypoint fx
    makeWaypoint(i, marker);
}//end for loop

// function to set the up/down href






