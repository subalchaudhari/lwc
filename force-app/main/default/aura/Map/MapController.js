({
    jsLoaded: function(component) {
        component.set("v.jsLoaded", true);
    },
    handlePlotMapMarker :function(component,event,helper){
       var lat = event.getParam("lat");
        var long = event.getParam("long");
        var label = event.getParam("label");
        
        console.log('lat: '+lat+'long: '+long);
        component.set("v.location", {'lat' : lat, 'long' : long,'title' : label});
      
    }
})