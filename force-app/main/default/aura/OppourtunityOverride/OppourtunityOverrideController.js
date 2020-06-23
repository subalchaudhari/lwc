({
	doInit : function(component, event, helper) {
        var oppId = component.get("v.recordId");
		helper.showAccountInfo(component,oppId,"c.showInfo","v.olist");
	}
})