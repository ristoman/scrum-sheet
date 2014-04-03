Template.insertReportForm.reportsCollection = function () {
    return Reports;
};

Template.editReportForm.reportsCollection = function () {
    return Reports;
};

Template.deleteReportForm.reportsCollection = function () {
    return Reports;
};

Template.reports.reports = function() {
	var reports = Reports.find({});
	return reports;
};

Template.reports.when = function()  {
	return  this.when.toDateString(); 
};

Template.reports.working_on = function() {
	return this.working_on.autoLink();
};

Template.reports.blockers = function() {
	return this.blockers.autoLink();
};
// Template.reports.who = function() {
// 	console.log(this);
// 	return this;
// }


Template.report.helpers({
  report: function () {
	console.log("EVID: ", Session.get('currentReportId'));
    var report = Reports.findOne(Session.get('currentReportId'));
	console.log(report);
	return report;
  },
});


Template.reportForm.today = function() {
  return dateToDateString(new Date);

  // or use moment to avoid custom function
  // return moment().format("YYYY-MM-DD");
};

var dateToDateString = function(date) {
  var m = (date.getMonth() + 1);
  if (m < 10) {
    m = "0" + m;
  }
  var d = date.getDate();
  if (d < 10) {
    d = "0" + d;
  }
  return date.getFullYear() + '-' + m + '-' + d;
};

Template.reports.helpers({
	team_members: function() {
		var team = Session.get("selectedTeam");
		if(team == 'All') {
			return Meteor.users.find({}, {sort: {username: 1}}).fetch();
		} else {
			return  Meteor.users.find({"profile.team": team}, {sort: {username: 1}}).fetch();
		}
	},

	todays_report: function(who){
		var w = who.username;
		console.log(Reports.find({}).fetch());
		var r =Reports.findOne({who: w, when: {$gte: moment().startOf('day').toDate(), $lte: moment().endOf('day').toDate()}});	
		return r;
	},
	
	who: function() {
		console.log(this);
		return this.username;
		
	},
	when: function() {
		return moment().format("ddd Do MMM");
	},
	isme: function() {
		return(Meteor.user().username == this.who);
	},
	administrator: function() {
		console.log("admin?");
		if (Roles.userIsInRole(Meteor.user(), ['admin','user-admin'])) {
			return true;
		} else {
				return false;
		}
	
	}
});

Template.reports.events(
	{
	  // Fires when any element with the 'accept' class is clicked
	  'click .remind': function (event) {
			console.log("EV:" ,event, this);
			Meteor.call('sendEmail',
			             this.emails[0].address,
			             'localhost', // replace this with your email address
			             'Daily Report Reminder',
			            'Please submit a daily status report now');
		}
	});

Template.editReportForm.selectedReport = function() {
	var r =  Reports.findOne({_id: Session.get("currentReportId")});
	console.log("Report ", r);
	return r;
};



Template.delete_report.helpers({
  report: function () {
	console.log("EVID: ", Session.get('currentReportId'));
    var report = Reports.findOne(Session.get('currentReportId'));
	console.log(report);
	return report;
  }

});

Template.edit_report.helpers({
  report: function () {
	console.log("EVID: ", Session.get('currentReportId'));
    var report = Reports.findOne(Session.get('currentReportId'));
	console.log(report);
	return report;
  }

});

