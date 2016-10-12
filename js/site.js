$(document).ready(function(){
      $('.parallax').parallax();

       var options = [
		    {selector: '#des1', offset: 50, callback: function(el) { Materialize.showStaggeredList($(el)); } },
		    {selector: '#des2', offset: 50, callback: function(el) { Materialize.showStaggeredList($(el)); } },
		    {selector: '#des3', offset: 50, callback: function(el) { Materialize.showStaggeredList($(el)); } }
   		]; 
       Materialize.scrollFire(options);

});
