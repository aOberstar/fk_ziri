
$(document).ready(function(){

	var pc = new PhotosController();
	
	//$('#account-form').ajaxForm({
	$('#upload-photo-form').ajaxForm({
		beforeSubmit : function(formData, jqForm, options){
			return true;
		},
		success	: function(responseText, status, xhr, $form){
			if (status == 'success') pc.onUploadSuccess();
		},
	});

// customize the photo upload form //
	
	$('#upload-photo-form h1').html('Nalo&#382;i sliko');
	$('#upload-photo-form-btn1').html('Potrdi');

});