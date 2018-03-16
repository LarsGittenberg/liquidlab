
var waypoint = new Waypoint(
  {
    element: document.getElementById('page-1'),
    handler: function(direction) {

      if (direction == "up") {
        alert("page 1 going up ")
      }
      else if (direction == "down") {
        alert("page 1 going down ");
         $("a#down").attr("href", "#page-2");
      }
    }//end function
  }//end object
)

var waypoint = new Waypoint(
  {
    element: document.getElementById('page-2'),
    handler: function(direction) {

      if (direction == "up") {
        alert("page 2 going up ");

      }
      else if (direction == "down") {
        alert("page 2 going down ");
        $("a#down").attr("href", "#page-3");
        $("a#up").attr("href", "#page-1");
      }
    }//end function
  }//end object
)

var waypoint = new Waypoint(
  {
    element: document.getElementById('page-3'),
    handler: function(direction) {

      if (direction == "up") {
        alert("page 3 going up ");
        $("a#down").attr("href", "#page-3");
        $("a#up").attr("href", "#page-1");

      }
      else if (direction == "down") {
        alert("page 3 going down ");
        $("a#down").attr("href", "#page-4");
        $("a#up").attr("href", "#page-2");
      }
    }//end function
  }//end object
)

var waypoint = new Waypoint(
  {
    element: document.getElementById('page-4'),
    handler: function(direction) {

      if (direction == "up") {
        alert("page 4 going up ");
        $("a#down").attr("href", "#page-4");
        $("a#up").attr("href", "#page-2");

      }
      else if (direction == "down") {
        alert("page 4 going down ");
        $("a#down").attr("href", "#page-5");
        $("a#up").attr("href", "#page-3");
      }
    }//end function
  }//end object
)

var waypoint = new Waypoint(
  {
    element: document.getElementById('page-5'),
    handler: function(direction) {

      if (direction == "up") {
        alert("page-5 going up ");
        $("a#down").attr("href", "#page-5");
        $("a#up").attr("href", "#page-3");

      }
      else if (direction == "down") {
        alert("page-5 going down ");
        $("a#down").attr("href", "#page-6");
        $("a#up").attr("href", "#page-4");
      }
    }//end function
  }//end object
)

var waypoint = new Waypoint(
  {
    element: document.getElementById('page-6'),
    handler: function(direction) {

      if (direction == "up") {
        alert("page 6 going up " );
        $("a#down").attr("href", "#page-6");
        $("a#up").attr("href", "#page-4");
      }
      else if (direction == "down") {
        alert("page 6 going down " );
        $("a#down").attr("href", "#page-7");
        $("a#up").attr("href", "#page-5");
      }
    }//end function
  }//end object
)

var waypoint = new Waypoint(
  {
    element: document.getElementById('page-7'),
    handler: function(direction) {

      if (direction == "up") {
        alert("page 7 going up ");
        $("a#down").attr("href", "#page-7");
        $("a#up").attr("href", "#page-5");
      }
      else if (direction == "down") {
        alert("page 7 going down ");
        $("a#down").attr("href", "#page-8");
        $("a#up").attr("href", "#page-6");
      }
    }//end function
  }//end object
)

var waypoint = new Waypoint(
  {
    element: document.getElementById('page-8'),
    handler: function(direction) {

      if (direction == "up") {
        alert("page 8 going up ");
        $("a#down").attr("href", "#page-8");
        $("a#up").attr("href", "#page-6");
      }
      else if (direction == "down") {
        alert("page 8 going down ");
        $("a#up").attr("href", "#page-7");
      }
    }//end function
  }//end object
)



