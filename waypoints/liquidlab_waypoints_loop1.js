 for (var i = 0; i<8; i++) {
    var waypoint = new Waypoint(
      {
        element: document.getElementById('page-' + (i+1)),
        handler: function(direction) {
            sayUpDown(direction);
            saythis();
        }//end function
      }//end object
    )





    function sayUpDown(direction) {
            if (this === "page-5") {
            alert("5 ");
            }
            else if (this === "page-7") {
            alert("7 ");
            }
    }
    function saythis() {
      console.log(this);
    }
}//end for loop