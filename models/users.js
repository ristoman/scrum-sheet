


UserSchema = new SimpleSchema({
    username: {
        type: String,
        label: "Name",
        max: 50
    },



    "profile.team": {
        type: String,
        label: "Team",
        allowedValues: ["Tech", "Marketing", "Corporate"]
    },
	"profile.authorised": {
		type: Boolean,
		label: "Authorised"
	},
	email: {
		type: String
	},
	"emails.$.address": {
		type: String,
		label: "Emails"
	},
	"emails.$.verified": {
		type: Boolean,
		label: "Verified"
	}
	// roles: {
	// 	type: [String],
	// 	label: "Roles"
	// }
});

Meteor.users.allow({
	insert: function() {
		return true;
	},
	remove: function(userId, docs) {
		// console.log("Remove ch",  docs[0].owner_id, Meteor.userId);
		return true;
	},
	update: function(){
		return true;
	},
	fetch: ['who', 'when', 'working_on', 'blockers'],
});




