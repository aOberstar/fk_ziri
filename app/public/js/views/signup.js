
$(document).ready(function(){
	
	var av = new AccountValidator();
	var sc = new SignupController();
	
	$('#account-form').ajaxForm({
		beforeSubmit : function(formData, jqForm, options){
			return av.validateForm();
		},
		success	: function(responseText, status, xhr, $form){
			if (status == 'success') $('.modal-alert').modal('show');
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
	
// customize the account signup form //
	
	$('#account-form h1').html('Ustvari ra&#269;un');
	$('#account-form #sub1').text('Prosimo povejte nam kaj o sebi');
	$('#account-form #sub2').html('Izberite va&#353;e uporabni&#353;ko ime in geslo');
	$('#account-form-btn1').html('Prekli&#269;i');
	$('#account-form-btn2').html('Potrdi');
	$('#account-form-btn2').addClass('btn-primary');
	
// setup the alert that displays when an account is successfully created //

	$('.modal-alert').modal({ show : false, keyboard : false, backdrop : 'static' });
	$('.modal-alert .modal-header h3').text('Uspeh!');
	$('.modal-alert .modal-body p').html('Va&#353; ra&#269;un je bil ustvarjen.</br>Pritisni OK za vrnitev na doma&#269;o stran.');

});