({
	showEmp : function(component, event, helper) {
		var en=event.getParam("eparam");
        component.set("v.ename",en);
        var action = component.get("c.searchCandidate");
        action.setParams({"fname":en});
        $A.enqueueAction(action);
        action.setCallback(this,function(resp){
            if(resp.getState()=='SUCCESS'){
                //console.log(resp.getReturnValue());
                component.set("v.elist",resp.getReturnValue());
            }
        });
	}
})