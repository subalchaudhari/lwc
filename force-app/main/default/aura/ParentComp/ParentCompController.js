({
	show : function(component, event, helper) {
		component.set("v.msg",event.getParam("eparam"));
        event.stopPropagation();
	}
})