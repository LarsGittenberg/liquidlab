

//create a list array of the page ids
var pageArray = [];
for (var i = 0; i<8; i++) {
pageArray.push('page-' + (i+1));
}
/*
var mytestvar = 'page-3'

  var waypoint = new Waypoint(
    {
      element: document.getElementById(mytestvar),
      handler: function(direction) {

        if (direction == "up") {
          alert("page 3 going up " + mytestvar)
        }
        else if (direction == "down") {
          alert("page 3 going down " + mytestvar)
        }
      }
    }
  )

*/

//loop through instructions on what to do when user scrolls through element with page id,


for (var i = 0; i<pageArray.length; i++) {
  var waypoint = new Waypoint(
    {
      element: document.getElementById(pageArray[i]),
      handler: function(direction) {

        if (direction == "up") {
          alert(i + " going up")
        }
        else if (direction == "down") {
          alert(i + " going down")
        }
      }
    }
  )
}//end for loop

/*
https://www.codecademy.com/en/forum_questions/50c207bd55df51ff27004775
https://stackoverflow.com/questions/29658961/how-to-create-a-json-object-in-javascript-for-loop
http://2ality.com/2011/04/iterating-over-arrays-and-objects-in.html
*/

var title = [];
for (var i=0; i<3; i++) {
    title[i] = {
        name: "name" + i+1,
        age: "age" + i+1,
        hometown: "hometown" + i+1
    };
}
console.log(title);
// output will be:
// [ { name: 'name1', age: 'age1', hometown: 'hometown1' },
//   { name: 'name2', age: 'age2', hometown: 'hometown2' },
//   { name: 'name3', age: 'age3', hometown: 'hometown3' } ]


















