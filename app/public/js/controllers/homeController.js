
function HomeController()
{

// bind event listeners to button clicks //
	var that = this;

// handle user logout //
	$('#btn-logout').click(function(){ that.attemptLogout(); });

// confirm account deletion //
	$('#account-form-btn1').click(function(){$('.modal-confirm').modal('show'); });

// handle account deletion //
	$('.modal-confirm .submit').click(function(){ that.deleteAccount(); });

	this.deleteAccount = function()
	{
		$('.modal-confirm').modal('hide');
		var that = this;
		$.ajax({
			url: '/delete',
			type: 'POST',
			data: { id: $('#userId').val()},
			success: function(data){
	 			that.showLockedAlert('Va&#353; ra&#269;un je bil izbrisan.<br>Preusmerjeni boste na doma&#353;o stran.');
			},
			error: function(jqXHR){
				console.log(jqXHR.responseText+' :: '+jqXHR.statusText);
			}
		});
	};

	this.attemptLogout = function()
	{
		var that = this;
		$.ajax({
			url: "/profile",
			type: "POST",
			data: {logout : true},
			success: function(data){
	 			that.showLockedAlert('Uspe&#353;no ste se odjavili.<br>Preusmerjeni boste na vstopno stran.');
			},
			error: function(jqXHR){
				console.log(jqXHR.responseText+' :: '+jqXHR.statusText);
			}
		});
	};

	this.showLockedAlert = function(msg){
		$('.modal-alert').modal({ show : false, keyboard : false, backdrop : 'static' });
		$('.modal-alert .modal-header h3').text('Uspeh!');
		$('.modal-alert .modal-body p').html(msg);
		$('.modal-alert').modal('show');
		$('.modal-alert button').click(function(){window.location.href = '/';});
		setTimeout(function(){window.location.href = '/';}, 3000);
	};
}

HomeController.prototype.onUpdateSuccess = function()
{
	$('.modal-alert').modal({ show : false, keyboard : true, backdrop : true });
	$('.modal-alert .modal-header h3').text('Uspeh!');
	$('.modal-alert .modal-body p').html('Va&#353; ra&#269;un je bil posodobljen.');
	$('.modal-alert').modal('show');
	$('.modal-alert button').off('click');
};
