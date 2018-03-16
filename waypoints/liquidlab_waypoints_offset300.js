//pagination up/down script using waypoints framework
//http://imakewebthings.com/waypoints/guides/getting-started/
var waypoint = new Waypoint(
  {
    element: document.getElementById('offset-page-2'),
    handler: function(direction) {

      if (direction == "up") {
        //alert("scrolling up arriving at page 2 ");
        $("a#down").attr("href", "#page-2");
        //$("a#up").attr("href", "#page-1"); *** rule not needed see line 31

      }
      else if (direction == "down") {
        //alert("scrolling down arriving at page 2 ");
        $("a#down").attr("href", "#page-3");
        $("a#up").attr("href", "#page-1");
      }
    }//end function
  }//end object
)

var waypoint = new Waypoint(
  {
    element: document.getElementById('offset-page-3'),
    handler: function(direction) {

      if (direction == "up") {
        //alert("scrolling up arriving at page 1 ");
        $("a#down").attr("href", "#page-3");
        $("a#up").attr("href", "#page-1");//this rule negates needing rule at line 11 see *** note
      }
      else if (direction == "down") {
        //alert("scrolling down arriving at page 3 ");
        $("a#down").attr("href", "#page-4");
        $("a#up").attr("href", "#page-2");
      }
    }//end function
  }//end object
)

var waypoint = new Waypoint(
  {
    element: document.getElementById('offset-page-4'),
    handler: function(direction) {

      if (direction == "up") {
        //alert("scrolling up arriving at page 2 ");
        $("a#down").attr("href", "#page-4");
        $("a#up").attr("href", "#page-2");

      }
      else if (direction == "down") {
        //alert("scrolling down arriving at page 3 ");
        $("a#down").attr("href", "#page-5");
        $("a#up").attr("href", "#page-3");
      }
    }//end function
  }//end object
)

var waypoint = new Waypoint(
  {
    element: document.getElementById('offset-page-5'),
    handler: function(direction) {

      if (direction == "up") {
        //alert("scrolling up arriving at page 4 ");
        $("a#down").attr("href", "#page-5");
        $("a#up").attr("href", "#page-3");

      }
      else if (direction == "down") {
        //alert("scrolling down arriving at page 5 ");
        $("a#down").attr("href", "#page-6");
        $("a#up").attr("href", "#page-4");
      }
    }//end function
  }//end object
)

var waypoint = new Waypoint(
  {
    element: document.getElementById('offset-page-6'),
    handler: function(direction) {

      if (direction == "up") {
        //alert("scrolling up arriving at page 5 " );
        $("a#down").attr("href", "#page-6");
        $("a#up").attr("href", "#page-4");
      }
      else if (direction == "down") {
        //alert("scrolling down arriving at page 6 " );
        $("a#down").attr("href", "#page-7");
        $("a#up").attr("href", "#page-5");
      }
    }//end function
  }//end object
)

var waypoint = new Waypoint(
  {
    element: document.getElementById('offset-page-7'),
    handler: function(direction) {

      if (direction == "up") {
        //alert("scrolling up arriving at page 6 ");
        $("a#down").attr("href", "#page-7");
        $("a#up").attr("href", "#page-5");
      }
      else if (direction == "down") {
        //alert("scrolling down arriving at page 7 ");
        $("a#down").attr("href", "#page-8");
        $("a#up").attr("href", "#page-6");
      }
    }//end function
  }//end object
)

var waypoint = new Waypoint(
  {
    element: document.getElementById('offset-page-8'),
    handler: function(direction) {

      if (direction == "up") {
        //alert("scrolling up arriving at page 7 ");
        $("a#down").attr("href", "#page-8");
        $("a#up").attr("href", "#page-6");
      }
      else if (direction == "down") {
        //alert("scrolling down arriving at page 8 ");
        $("a#up").attr("href", "#page-7");
      }
    }//end function
  }//end object
)



