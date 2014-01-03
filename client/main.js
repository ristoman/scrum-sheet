Meteor.startup(function(){
	Meteor.subscribe("reports");
	 Meteor.subscribe("allUserData");
	
	
	// 
	// 
	// ReportsForm.hooks({

	// });
	ReportsForm.hooks ({
		before: {
	      remove: function(id) {
			console.log("Removing", id);
	        var name = Reports.findOne(id).who;
	        return confirm("Remove " + name + "?");
	      }
	    },
		after: {
			insert: function(error, result) {
				console.log("Returning to root");
				Meteor.Router.to("/");
			},
			remove: function(error, result) {
				Meteor.Router.to("/");
			},
			update: function(error, result) {
					console.log("Returning to root");
				Meteor.Router.to("/");
			}
		}
		
	});
	
});

ReportsForm = new AutoForm(Reports);

Accounts.ui.config({

  passwordSignupFields: 'USERNAME_AND_EMAIL'
});