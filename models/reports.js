Reports = new Meteor.Collection2("reports", {
	schema: {
		who: {
			type: "String",
			autoValue: function() {
				return Meteor.user().username;
			},
			optional: true,
		},

		when: {
			type: Date,
			label: "Date",
		},
		
		working_on: {
			type: String,
			label: "Working On",
		},
		blockers: {
			type: String,
			label: "Blockers",
			max: 1000
		}
	}
});


Reports.allow({
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


// Reports.beforeInsert = function(obj) {
// 	obj.who = Meteor.user().emails[0];
// 	return obj;
// };

// Houston.add_collection(Meteor.users);


