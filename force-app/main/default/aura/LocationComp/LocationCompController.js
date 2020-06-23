({
	showdate : function(component, event, helper) {
		component.set("v.cd",new Date());
	},
    changedate : function(component,event,helper){
        component.set("v.cd",$A.localizationService.formatDate(new Date(),"DD-MM-YYYY"));
    }
})