({
	onBoatClick : function(component, event, helper) {
        var boat=component.get("v.boat");
        var boatId = boat.Id;
		var ev= component.getEvent("boatselected");
        ev.setParams({"selectedBoatId":boatId});
        ev.fire();
        
        //event for boat details
        var bdev= $A.get("e.c:BoatSelected");
        bdev.setParams({"boat":boat});
        bdev.fire();
        
        var lat = boat.Geolocation__Latitude__s;
        var long = boat.Geolocation__Longitude__s;
        var label = boat.Name;
        //event for map
        var mev= $A.get("e.c:PlotMapMarker");
        
        mev.setParams({
            "sObjectId":boat.Id,
            "lat":lat,
            "long":long,
            "label":label
                 });
        mev.fire();
	}
})