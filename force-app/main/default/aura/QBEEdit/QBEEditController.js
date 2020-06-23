({
	display : function(component, event, helper) {
		var action = component.get("c.displayCandidateByName");
        action.setParams({"cfname": component.get("v.fname")});
        $A.enqueueAction(action);
        action.setCallback(this,function(resp){
            if(resp.getState() =='SUCCESS'){
                component.set("v.candiadateobj",resp.getReturnValue());
            }
        })
	},
    save : function(component,event,helper){
        component.find("re").get("e.recordSave").fire();
    },
    
    showsavemesage: function(component,event,helper){
        var ev= $A.get("event.force:showToast");
        ev.setParams({
            "title":"Status",
           "message":"Record Save",
               "type":"success"
        });
        ev.fire();
        
        var ev1= $A.get("event.force:navigateToURL");
        ev1.setParams({"url":"/"+component.get("v.candiadateobj.Id")});
        ev1.fire();
    },
    
    show:function(component,event,helper){
        $A.util.removeClass(component.find("spn"),"slds-hide");
    },
    
    hide:function(component,event,helper){
        $A.util.addClass(component.find("spn"),"slds-hide");
    }
})