({
	send : function(component, event, helper) {
		var em=component.get("v.ename");
        var ev= $A.get("e.c:AppEvent");
        ev.setParams({"aparam":em});
        ev.fire();
	}
})