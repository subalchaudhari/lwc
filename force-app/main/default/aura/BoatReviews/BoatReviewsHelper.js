({
	onInit : function(component,event,helper) {
        var bId= component.get("v.boat").Id;
        console.log('Review for Boat Id: '+ bId);
		var action = component.get("c.getAll");
        action.setParams({
            "boatId":bId
        });
        
        $A.enqueueAction(action);
        action.setCallback(this,function(resp){
            console.log(resp.getState())
            if(resp.getState() == 'SUCCESS'){
                console.log(resp.getReturnValue());
                component.set("v.boatReviews",resp.getReturnValue());
            }
        });
	}
})