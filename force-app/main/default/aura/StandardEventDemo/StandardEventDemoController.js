({
	changeText : function(component, event, helper) {
		component.set("v.ename","Lighting Event");
	},
    
    display : function(comp,event,helper){
     var divtag = comp.find("dtag").getElement();
        divtag.innerHTML="Info on Lightning Event.....";
},
    changeButton: function(cmp,event,helper){
        var button = cmp.find("btn");
        if(button.get("v.variant") == 'brand'){
        button.set("v.variant","destructive");
       	cmp.set("v.ename","");     
        }else{
            button.set("v.variant","brand");
            cmp.set("v.ename","Standard Event"); 
        }
        
    }
})