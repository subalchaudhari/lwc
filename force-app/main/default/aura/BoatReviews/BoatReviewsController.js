({
	doInit : function(component, event, helper) {
		helper.onInit(component,event,helper);
	},
    onUserInfoClick : function(component,event,helper){
        var userId = event.currentTarget.getAttribute("data-userid");
        var ev = $A.get("e.force:navigateToSObject");
        if(ev){
            ev.setParams({
                "recordId":userId
            });
        }
        ev.fire();
    }
})