({
    doInit: function(component,event,helper){

    },
    handlePubsubReady : function(component, event, helper) {
        console.log('on ready');
        var pubsub = component.find('pubsub');
        var callback = $A.getCallback(function(event){
            component.set("v.theString",event.theString);
            component.set("v.someValue",event.someValue);

            var service = component.find("service");
            service.reloadRecord();
        });

        pubsub.registerListener('sendsbc',callback);
    },

    handleDestroy: function(component) 
    {
        var pubsub = component.find('pubsub');
        pubsub.unregisterAllListeners();
    }
})
