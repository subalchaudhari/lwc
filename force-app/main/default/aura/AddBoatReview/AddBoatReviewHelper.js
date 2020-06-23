({
	onInit : function(component,event,helper) {
		component.find("service").getNewRecord(
        "BoatReview__c",
         null,
         false,
            $A.getCallback(function(){
                var rec = component.get("v.boatReview");
                var boatRec = component.get("v.boat");
                console.log('rec loaded boat Review: '+rec.Name);
                console.log('rec loaded boat: ' + boatRec.Name)
                //rec.Boat__c = component.get("v.boat").Id;
                var error =component.get("v.errorRecord");
                
                if(error ||(rec === null)){
                    console.log("Error in Initialising record template "+ error);
                    return;
                }else{
                    rec.Boat__c = boatRec.Id;
                    console.log('new boat for review : '+boatRec.Id +"-->" + boatRec.Name)
           			component.set("v.boatReview", rec);
                    console.log("Record Template Initialised successfully " + rec.sobjectType);
                }
            })
        );
	}
})