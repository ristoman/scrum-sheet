Meteor.Router.add({
	'/': function () {
	  console.log('loading ');
	  Session.set("selectedTeam", "All");
	  return 'reports';
	},
	
	'/reports/create': 'create_report',
	'/reports/:team': function(team) {
		Session.set("selectedTeam", team);
		return 'reports';
	},
	'/report/:id': function(id) {
		Session.set('currentReportId', id);
		console.log(id);
		return 'report';
	},
	'/report/:id/edit': function(id) {
		Session.set("currentReportId", id);
		console.log("Setting ", id, "as current report");
		return 'edit_report';
	},
	'/report/:id/delete': function(id) {
		Session.set("currentReportId", id);
		return 'delete_report';
	},	
	'/userhistory/:id': function(id) {
		Session.set('userHistoryId', id);
		console.log("history");
		return 'user_history';
	},
	'/remind/:id': function(id) {
		Session.set('userRemindId', id);
		return 'remind';
	},
	'/profile/:id': function(id) {
		Session.set('userProfileId', id);
		return 'edit_user';
	},
	'/admin': 'adminusers'
});


Meteor.Router.filters({
    'checkLoggedIn': function(page) {
        if (Meteor.loggingIn()) {
            return 'loading';
        } else if (Meteor.user()) {
            return page;
        } else {
            return 'signin';
        }
    }
});

// applies to all pages
Meteor.Router.filter('checkLoggedIn');