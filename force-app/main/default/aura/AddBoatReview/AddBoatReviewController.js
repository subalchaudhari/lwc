({
    doInit : function(component,event,helper){        
        helper.onInit(component,event,helper);
    },
    
	onSave : function(component, event, helper) {
        component.find("service").saveRecord(function(result){
            if(result.state === "SUCCESS" || result.state === "DRAFT"){
                var resultToast= $A.get("e.force:showToast");
                
                if(resultToast){
                resultToast.setParams({
                    "title":"Saved",
                    "message":"Record saved successfully",
                    "Type":"SUCCESS"
                });
                  resultToast.fire();  
                }else{
                    alert('Record saved successfully');
                }
            }else if (saveResult.state === "INCOMPLETE") {
                    // handle the incomplete state
                    console.log("User is offline, device doesn't support drafts.");
                } else if (saveResult.state === "ERROR") {
                    // handle the error state
                    console.log('Problem saving contact, error: ' + JSON.stringify(saveResult.error));
                } else {
                    console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
                }

        });
        var boatReviewEvent= component.getEvent("boatReviewAdded");
        boatReviewEvent.fire();
        helper.onInit(component, event, helper);
	},
    
    onRecordUpdated: function(component, event,helper){
      	var resultToast= $A.get("e.force:showToast");
                
                if(resultToast){
                resultToast.setParams({
                    "title":"Updated",
                    "message":"Record updated successfully",
                    "Type":"SUCCESS"
                });
                }else{
                    alert('Record updated successfully');
                }
	},
    
    validateTitle : function(component,event,helper){
        var title  = component.get("v.boatReview");
        
        if(title.Name && title.Name.length > 0){
            component.find("btn").set("v.disabled",false);
        }else{
            component.find("btn").set("v.disabled",true);
        }
    }
    
})