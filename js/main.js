function loadProjects(){
	// load Projets
	var dfd = $.Deferred();

	$.ajax({
		url: "work.json",
		dataType: 'json',
		success: function(data) {
			$("#work > .center_block").empty();
			$(".load").hide();
	        $.each(data.works, function(key, element){
	        	// console.log(element);
	        	var work = '<article id="'+key+'" class="work" >';
				work += '<a class="info" name="'+element.name+'" href="./work/CINEVR.html">';
				work += '<img src="'+element.images[0]+'">';
				work += '<div class="article-legend">'
				work += '<h3>'+element.name+'</h3>';
				work += '<p>'+element.desc+'</p>'
				work += '</div>';
				work += '<hr>';
				work += '</a>';
				work += '</article>';
	    		$("#work > .center_block").prepend(work);
	        });
			$("#work > .center_block").prepend('<h2 class="border-title">Work</h2>');
			$("#work > .center_block").append('<div class="clear"></div>');

	        dfd.resolve(data);
	    },
		error: function(request, textStatus, errorThrown) {
			dfd.reject(textStatus + ' : ' + errorThrown);
		}
	});

	return dfd.promise();
}

$(document).ready(function() {
	///////////////////////
	/* Load project.json */
	///////////////////////
	loadProjects();

	/////////////////
	/* Back to top */
	/////////////////
	$(window).scroll(function() {
		if($(window).scrollTop() > 100) {	
			$("#backToTop").fadeIn(250);
		} else {	
			$("#backToTop").fadeOut(250);
		}
	});
	$('#backToTop').click(function(event) {
        $('html, body').animate({scrollTop : 0}, 'slow');
        event.preventDefault();
    });
});