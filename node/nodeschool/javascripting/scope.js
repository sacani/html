var a
var b
var c
a = 1
b = 2
c = 3;
(function firstFunction(){
   var b
   b = 5
   var c
   c = 6;
  (function secondFunction(){
     var b
     b = 8;
     console.log( 'a: ' + a + ', b: ' + b + ', c: ' + c);
     (function thirdFunction(){
        var a
	a = 7
	var c
	c = 8;
	(function fourthFunction(){
	  var a 
          a = 1
	  var c
	  c = 8
	})()
     })()
  })()
})()
