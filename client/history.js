Template.user_history.reports = function() {
	var user_name = Meteor.users.find({_id: Session.get("userHistoryId")}).username;
	console.log("UN:", user_name);
	var reports = Reports.find({who: user_name });
	return reports;
};