
$(document).ready(function(){
	
	var lv = new LoginValidator();
	var lc = new LoginController();

// main login form //

	$('#login-form').ajaxForm({
		beforeSubmit : function(formData, jqForm, options){
			if (lv.validateForm() == false){
				return false;
			} 	else{
			// append 'remember-me' option to formData to write local cookie //
				formData.push({name:'remember-me', value:$("input:checkbox:checked").length == 1});
				return true;
			}
		},
		success	: function(responseText, status, xhr, $form){
			if (status == 'success') window.location.href = '/home';
		},
		error : function(e){
            lv.showLoginError('Prijava neuspe&#353;na', 'Prosimo preverite svoje uporabni&#353;ko ime in/ali geslo');
		}
	}); 
	$('#user-tf').focus();
	
// login retrieval form via email //
	
	var ev = new EmailValidator();
	
	$('#get-credentials-form').ajaxForm({
		url: '/lost-password',
		beforeSubmit : function(formData, jqForm, options){
			if (ev.validateEmail($('#email-tf').val())){
				ev.hideEmailAlert();
				return true;
			}	else{
				ev.showEmailAlert("<b> Napaka!</b> Prosimo vnesite veljaven email");
				return false;
			}
		},
		success	: function(responseText, status, xhr, $form){
			ev.showEmailSuccess("Navodila za ponastavitev gesla smo poslali na va&#353; email.");
		},
		error : function(){
			ev.showEmailAlert("Oprostite, pri&#353;lo je do te&#382;ave. Prosimo poizkusite ponovno kasneje.");
		}
	});
	
});