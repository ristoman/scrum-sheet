Template.user_history.reports = function() {
	var user = Meteor.users.findOne({_id: Session.get("userHistoryId")});
	console.log("User:", user);
	var user_name = user.username;
	var reports = Reports.find({who: user_name });
	return reports;
};