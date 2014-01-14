Meteor.startup(function () {

	Meteor.publish("reports", function() {
		// if(Meteor.user().username == "Mike") {
			return Reports.find({});
		// }	
	});
	

	
	Meteor.publish("allUserData", function () {
	        return Meteor.users.find({}, {fields: {"username": 1, "_id": 1}});
	    });
	
	console.log("Started");
	
	
 });

Accounts.config({ restrictCreationByEmailDomain: 'upptalk.com', sendVerificationEmail: true });