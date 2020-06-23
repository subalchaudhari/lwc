({
	onSearch : function(component) {
        var boatType = component.get("v.boatTypeId");
        console.log(boatType);
        var action=component.get("c.getBoats");
        action.setParams({"boatTypeId":boatType});
        $A.enqueueAction(action);
        action.setCallback(this,function(resp){
            
            console.log(resp.getReturnValue());
            if(resp.getState() == 'SUCCESS'){
                component.set("v.boats",resp.getReturnValue());
            }
            
        });
	}
})