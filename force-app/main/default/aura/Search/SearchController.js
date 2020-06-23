({
	validateName : function(component, event, helper) {
		var cn= component.get("v.fname");
        if(cn.length<1){
            component.find("btn").set("v.disabled","true");
        }else{
            component.find("btn").set("v.disabled","false");
        }
	},
    
    send : function(component,event,helper){
        var fname= component.get("v.fname");
        var ev = component.getEvent("devent");
        ev.setParams({"eparam":fname});
        ev.fire();
    }
})