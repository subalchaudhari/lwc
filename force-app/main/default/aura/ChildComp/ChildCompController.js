({
	send : function(component, event, helper) {
		var en=component.get("v.ename");
        var ev = component.getEvent("devent");
        ev.setParams({"eparam":en});
        ev.fire();
	}
})