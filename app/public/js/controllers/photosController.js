
function PhotosController()
{
}

PhotosController.prototype.onUploadSuccess = function()
{
	$('.modal-alert').modal({ show : false, keyboard : true, backdrop : true });
	$('.modal-alert .modal-header h3').text('Uspeh!');
	$('.modal-alert .modal-body p').html('Va&#353;a slika je bila nalo&#382;ena.');
	$('.modal-alert').modal('show');
	$('.modal-alert button').off('click');
};