Template.editUserForm.selectedUser = function() {
	var u =  Meteor.users.findOne({_id: Session.get("userProfileId")});
	u.email = u.emails[0].address;
	console.log("User ", u);
	return u;
};