
$(document).ready(function(){

	var hc = new HomeController();
	var av = new AccountValidator();
	
	$('#account-form').ajaxForm({
		beforeSubmit : function(formData, jqForm, options){
			if (av.validateForm() == false){
				return false;
			} 	else{
			// push the disabled username field onto the form data array //
				formData.push({name:'user', value:$('#user-tf').val()});
				return true;
			}
		},
		success	: function(responseText, status, xhr, $form){
			if (status == 'success') hc.onUpdateSuccess();
		},
		error : function(e){
			if (e.responseText == 'email-taken'){
			    av.showInvalidEmail();
			}	else if (e.responseText == 'username-taken'){
			    av.showInvalidUserName();
			}
		}
	});
	$('#name-tf').focus();

// customize the account settings form //
	
	$('#account-form h1').text('Nastavitve profila');
	$('#account-form #sub1').html('Tu so trenutne nastavitve va&#353;ega ra&#269;una.'); // wtf why doesn't &#353; work
	$('#user-tf').attr('disabled', 'disabled');
	$('#account-form-btn1').html('Izbri&#353;i');
	$('#account-form-btn1').addClass('btn-danger');
	$('#account-form-btn2').html('Posodobi');

// setup the confirm window that displays when the user chooses to delete their account //

	$('.modal-confirm').modal({ show : false, keyboard : true, backdrop : true });
	$('.modal-confirm .modal-header h3').html('Izbri&#353;i ra&#269;un'); // changed from .text because unicode
	$('.modal-confirm .modal-body p').html('Ste prepri&#269;ani da &#382;elite izbrisati va&#353; ra&#269;un?');
	$('.modal-confirm .cancel').html('Prekli&#269;i');
	$('.modal-confirm .submit').html('Izbri&#353;i');
	$('.modal-confirm .submit').addClass('btn-danger');

});