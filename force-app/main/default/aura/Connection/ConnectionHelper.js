({
	callToServer : function(component,servermethod,returnvar) {
		var action =component.get(servermethod);
        $A.enqueueAction(action);
        action.setCallback(this,function(resp){
            
            if(resp.getState()=='SUCCESS'){
                component.set(returnvar,resp.getReturnValue());
            }
        });
	}
})