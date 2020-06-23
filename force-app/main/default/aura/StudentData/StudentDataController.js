({
	doInit : function(component, event, helper) {
		helper.callToServer(component,"c.showAllRecords","v.studentlist");
	}
})