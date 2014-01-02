Meteor.Router.add({
	'/': function () {
	  console.log('loading ');
	  return 'reports';
	},
	
	'/reports/create': 'create_report',
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
	}
 		
});