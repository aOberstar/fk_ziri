
$(document).ready(function(){
	
	var rv = new ResetValidator();
	
	$('#set-password-form').ajaxForm({
		beforeSubmit : function(formData, jqForm, options){;
			rv.hideAlert();
			if (rv.validatePassword($('#pass-tf').val()) == false){
				return false;
			} 	else{
				return true;
			}
		},
		success	: function(responseText, status, xhr, $form){
			rv.showSuccess("Va&#353;e geslo je bilo ponastavljeno.");
			setTimeout(function(){ window.location.href = '/'; }, 3000);
		},
		error : function(){
			rv.showAlert("Oprostite, pri&#353;lo je do te&#382;ave. Prosimo poizkusite ponovno kasneje.");
		}
	});

	$('#set-password').modal('show');
	$('#set-password').on('shown', function(){ $('#pass-tf').focus(); });

});