Template.profile.helpers({
	user: function() {
		return  Meteor.users.findOne({_id: Session.get("userProfileId")});
	},
});