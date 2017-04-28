function loadProjects(){
	// load Projets
	var dfd = $.Deferred();

	$.ajax({
		url: "work.json",
		dataType: 'json',
		success: function(data) {
			$("#desc > article").empty();
			$(".load").hide();
	        $.each(data.works, function(key, element){
	        	// Load the right element

                // If video == null load img[1] instead in full screen
	        });
			$("#desc > article").prepend('<h2 class="border-title">Work</h2>');
			$("#desc > article").append('<div class="clear"></div>');

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
});