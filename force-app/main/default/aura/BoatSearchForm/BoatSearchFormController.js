({
    doInit: function(component,event,helper){
        var ev = $A.get("e.force:createRecord");
        if(ev){
            component.set("v.shownewButton",true);
        }
        
        var action=component.get("c.getAllBoatTypes");
        $A.enqueueAction(action);
        action.setCallback(this,function(resp){
            if(resp.getState() == 'SUCCESS'){
                component.set("v.blist",resp.getReturnValue());
            } 
        });
        
    },
	newBoat : function(component, event, helper) {
        var bt= component.get("v.boatTypeId");
        alert(bt);
        var ce =$A.get("e.force:createRecord");
        ce.setParams({
            "entityApiName":"Boat__c"            
        });
        
        if(bt){
            ce.setParams({"defaultFieldValues":{
                'BoatType__c':bt
            }});
        }
        ce.fire();
	},
    onFormSubmit : function(component, event, helper){
        var bt =component.get("v.boatTypeId");
        console.log(bt);
        var ev=component.getEvent("formsubmit");
        ev.setParams({"formData":{"boatTypeId":bt}});
        ev.fire();        
    },
})