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

Template.reports.helpers({
	team_members: function() {
		return  Meteor.users.find({}).fetch();
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
		return moment().format("ddd DDD MMM");
	},
	isme: function() {
		return(Meteor.user().username == this.who);
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

