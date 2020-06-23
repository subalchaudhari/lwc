({
	insertRecord : function(component, event, helper) {
		var fn= component.get("v.fname");
        var ln= component.get("v.lname");
        var em= component.get("v.email");
        
        var action=component.get("c.loadCandidate");
        action.setParams({"cfname":fn,"clname":ln,"cemail":em});
        $A.enqueueAction(action);
        action.setCallback(this,function(resp){
            
            if(resp.getState() == 'SUCCESS'){
                var results= resp.getReturnValue();
                if(results.includes("exception")){
                    var ev=$A.get("event.force:showToast");
                    ev.setParams({
                        "title": "Status",
                        "message" : results,
                        "type" :"error"
                    });
                    ev.fire();
                }else{
                    var ev=$A.get("event.force:showToast");
                    ev.setParams({
                        "title": "Status",
                        "message" : results,
                        "type" :"success"
                    });
                    ev.fire();
                    component.set("v.fname","");
                    component.set("v.lname","");
                    component.set("v.email","");
                }
            }
        })
	}
})