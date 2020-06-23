({
	getAllOpp : function(component,servermethod,outputvar) {
		var action = component.get(servermethod);
        $A.enqueueAction(action);
        action.setCallback(this,function(response){
            if(response.getState()=='SUCCESS'){
                component.set(outputvar,response.getReturnValue());
            }
        });
	}
})