({
	showAccountInfo : function(comp,id,servermethod,outputvar) {
		var action =comp.get(servermethod);
        action.setParams({"oppId":id});
        $A.enqueueAction(action);
        action.setCallback(this,function(resp){
            if(resp.getState() == 'SUCCESS'){
                comp.set(outputvar,resp.getReturnValue());
            } 
        });
	}
})