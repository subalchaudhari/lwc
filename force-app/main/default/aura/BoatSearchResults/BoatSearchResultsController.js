({
	    
    doSearch : function(component) {
         helper.onSearch(component);
	},
    
    search: function(component, event, helper){
        var params = event.getParam('arguments');
        console.log("boatTypeId extracted: " + params.boatTypeId);
        component.set("v.boatTypeId", params.boatTypeId);
        //doSearch(component);
        helper.onSearch(component);
    },
    
    onBoatSelect:function(component,event,helper){
         component.set("v.selectedBoatId",event.getParam("boatId"));
     }
})