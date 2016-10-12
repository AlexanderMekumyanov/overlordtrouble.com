$(document).ready(function(){
      $('.parallax').parallax();


       var options = [
       		//{selector: '#staggered-test', offset: 50, callback: function(el) {Materialize.toast("This is our ScrollFire Demo!", 1500 ); } }, 
		    //{selector: '#staggered-test', offset: 205, callback: function(el) { Materialize.toast("Please continue scrolling!", 1500 ); } },
		    {selector: '.description', offset: 0, callback: function(el) { Materialize.showStaggeredList($(el)); } }
		    //{selector: '#image-test', offset: 500, callback: function(el) { Materialize.fadeInImage($(el));}}
   		]; 
       Materialize.scrollFire(options);



});
