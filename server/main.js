Meteor.startup(function () {

	Meteor.publish("reports", function() {
		// if(Meteor.user().username == "Mike") {
			return Reports.find({});
		// }	
	});
	
	Meteor.publish("allUserData", function () {
	        return Meteor.users.find({}, {fields: {"username": 1, "_id": 1, "profile": 1}});
	    });
	
	console.log("Started");
	
	createUserAdminRoles();
	
	process.env.MAIL_URL = 'localhost'; //replace this with your SMTP server
	
	console.log(Meteor.settings);
 });

Accounts.config({ restrictCreationByEmailDomain: 'localhost', sendVerificationEmail: true }); //replace localhost with your corporate domain


// In your server code: define a method that the client can call
if(Meteor.isServer) {
	Meteor.methods({
	  sendEmail: function (to, from, subject, text) {
		console.log("Hitting se");
		console.log(to, from, subject, text);
	    check([to, from, subject, text], [String]);

	    // Let other method calls from the same client start running,
	    // without waiting for the email sending to complete.
	    this.unblock();

	    Email.send({
	      to: to,
	      from: from,
	      subject: subject,
	      text: text
	    });
	  }
	});
	
	
}
