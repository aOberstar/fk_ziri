
var ES = require('./email-settings');
var EM = {};
module.exports = EM;

EM.server = require("emailjs/email").server.connect({

	user 	    : ES.user,
	password    : ES.password,
	host 	    : ES.host,
	ssl		    : true

});

EM.dispatchResetPasswordLink = function(account, callback)
{
	EM.server.send({
		from         : ES.sender,
		to           : account.email,
		subject      : 'Ponastavitev gesla',
		text         : 'nekaj je slo narobe... :(',
		//attachment   : EM.composeEmail(account)
	}, callback );
};

EM.composeEmail = function(o)
{
	var link = 'http://localhost:8080/reset-password?e='+o.email+'&p='+o.pass;
	var html = "<html><body>";
		html += "Zdravo "+o.name+",<br><br>";
		html += "Va&#353;e uporabni&#353;ko ime je :: <b>"+o.user+"</b><br><br>";
		html += "<a href='"+link+"'>Prosimo klinite tu za ponastavitev gesla</a><br><br>";
//		html += "Hura,<br>";
//		html += "<a href='http://www.joker.si/'>Joker.si</a><br><br>";
		html += "</body></html>";
	return  [{data:html, alternative:true}];
};