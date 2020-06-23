({
	onBoatSelected : function(component, event, helper) {
        
 		var boat = event.getParam("boat");
        console.log('handal event: '+ boat.Id);
		component.set("v.id",boat.Id);
        component.find("service").reloadRecord();
        console.log('boat load: '+ component.get("v.boat"));
	},
    
    onRecordUpdated : function(component,event,helper){
        var BoatReviews = component.find("BoatReviews");
        console.log("BoatReviews: " + BoatReviews);
        if(typeof BoatReviews != 'undefined'){
            BoatReviews.refresh();
        }

    },
    
    onBoatReviewAdded : function(component,event,helper){
        component.set("v.selectedTabId","boatreviewtab");
        var BoatReviews = component.find("BoatReviews");
        console.log("BoatReviews: " + BoatReviews);
        if(typeof BoatReviews != 'undefined'){
            BoatReviews.refresh();
        }
    }
    
    
})