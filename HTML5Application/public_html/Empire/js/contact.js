jQuery.noConflict();

jQuery(document).ready(function($){
								
	//MAIN CONTACT FORM...
	jQuery(".contact-frm").validate({ 
	   	onfocusout: function(element){ $(element).valid(); },
        rules: { 
			cname: { required: true, minlength: 2 },
			cemail: { required: true, email: true },
			message: { required: true, minlength: 10 }
		}
	});
	
	//AJAX SUBMIT...
	$('.contact-frm').submit(function () {
										   
		var This = $(this);
		
		if($(This).valid()) {
			var action = $(This).attr('action');

			var data_value = unescape($(This).serialize());
			$.ajax({
				 type: "POST",
				 url:action,
				 data: data_value,
				 error: function (xhr, status, error) {
					 confirm('The page save failed.');
				   },
				  success: function (response) {
					$('#ajax_message').html(response);
					$('#ajax_message').slideDown('slow');
					if (response.match('success') != null) $(This).slideUp('slow');
				 }
			});
		}
		return false;
    });
});