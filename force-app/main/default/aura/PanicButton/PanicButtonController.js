({
	play : function(component, event, helper) {
        var selectedsound =component.find("plist").get("v.value");
        var snd = $A.get("$Resource."+selectedsound);
        /*switch(selectedsound){
            case "Explosion":
                snd=$A.get("$Resource.sound1");
                break;
            case "Trombone":
                snd=$A.get("$Resource.sound2");
                break;
            case "Bells":
                snd = $A.get("$Resource.sound3");
                break;
            default :
                alert("Please slect the sound");
                break;
        } */
        
        
		component.find("atag").getElement().src= snd;
	},    
    show : function(component,event,helper){
     helper.showorhide(component);
	},
    hide : function(component,event,helper){
     helper.showorhide(component);   
    },
    doInit : function(component,event,helper){
        helper.callServer(component,"c.showData","v.soundlist");
    }
    
})