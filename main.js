function loadProjects(){
	// load Projets
	var dfd = $.Deferred();

	$.ajax({
		url: "projects/projects.json",
		dataType: 'json',
		success: function(data) {
			$("#projects").empty();
			$(".load").hide();
	        $.each(data.works, function(key, element){
	        	//console.log(element);
	        	var work = '<article id="'+key+'" class="work ';
	        	$.each(element.categorie, function(i, categ){
	        		work += categ+' '; 
	        	});
	        	work += element.size+'"';
                work += ' style="background-image: url('+element.images[0]+');">';
				work += '<a class="info" name="'+element.name+'" href="#/project/'+key+'">';
				project += '<h2>'+element.name+'</h2>';
				project += '</a>';
				project += '</article>';
	    		$("#works").prepend(work);
	        });

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