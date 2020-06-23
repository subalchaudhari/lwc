({
	validateName : function(component, event, helper) {
		var cn= component.get("v.cname");
        if(cn.length<2){
            component.find("btn").set("v.disabled","true");
        }else{
            component.find("btn").set("v.disabled","false");
        }
	}
})