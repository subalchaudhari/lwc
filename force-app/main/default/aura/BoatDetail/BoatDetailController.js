({
    doInit : function(component,event,helper){
        var ev =  $A.get("e.force:navigateToSObject");
        console.log('nav eve: ' + ev);
        if(ev){
            component.set("v.isFullDetail",true);
        }
    },
    
	onFullDetails : function(component, event, helper) {
		var ev =  $A.get("e.force:navigateToSObject");  
        var rid= component.get("v.boat").Id;
        ev.setParams({"recordId":rid});
        ev.fire();
        }
	
})