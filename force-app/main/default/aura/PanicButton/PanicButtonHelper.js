({
	showorhide : function(component) {
		var mtag = component.find("msgtag").getElement();
        $A.util.toggleClass(mtag,"slds-hide");
	},
    
    callServer : function(component,servermethod,outputvar){
        
        var action= component.get(servermethod);
        $A.enqueueAction(action);
        action.setCallback(this,function(response){
            console.log(response.getState() + response.getReturnValue());
            if(response.getState()=='SUCCESS'){
                component.set(outputvar,response.getReturnValue());
            }
       });
    }
})