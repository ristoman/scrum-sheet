Meteor.startup(function () {

	Meteor.publish("reports", function() {
		return Reports.find({});
	});
	
	Meteor.publish("allUserData", function () {
	        return Meteor.users.find({}, {fields: {"username": 1}});
	    });
	
	console.log("Started");
	
	
 });