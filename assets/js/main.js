// for Carousel
function myFunction(x) {
    x.classList.toggle("change");
    }

// for slow up imge
jQuery(document).ready(function() {
	jQuery('.featuredImage').addClass("hiddenImg").viewportChecker({
	    classToAdd: 'visibleImg animated fadeInUp', // Class to add to the elements when they are visible
	    offset: 100    
	   });   
});

//for opening days
$(document).ready(function() {
  $('.opening-hours li').eq(new Date().getDay()).addClass('today');
  });