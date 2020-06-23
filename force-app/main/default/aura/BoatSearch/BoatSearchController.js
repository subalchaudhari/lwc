({
	onFormSubmit : function(component, event, helper){
        var formData = event.getParam("formData");
        var boatTypeId = formData.boatTypeId;
        var BSRcmp = component.find("BSRcmp");
        var auraMethodResult = BSRcmp.search(boatTypeId);
        }
})