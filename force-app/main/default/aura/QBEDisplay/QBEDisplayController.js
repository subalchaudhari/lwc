({
	display : function(component, event, helper) {
		var action = component.get("c.displayCandidateByName");
        action.setParams({"cfname": component.get("v.fname")});
        $A.enqueueAction(action);
        action.setCallback(this,function(resp){
            if(resp.getState() =='SUCCESS'){
                component.set("v.candiadateobj",resp.getReturnValue());
            }
        })
	}
})