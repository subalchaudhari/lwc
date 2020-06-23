({
	create : function(component, event, helper) {
        var bnum = component.get("v.bnum");
		$A.createComponent(
            "lightning:button",
            {"label":"New Button "+bnum,
             "variant":"brand",
             "onclick":component.getReference("c.removebtn")
            },
            function(btn){
                var dt= component.find("dtag").get("v.body");
                dt.push(btn);
                component.find("dtag").set("v.body",dt);
            }
        );
        bnum++;
        component.set("v.bnum",bnum);
	},
    remove : function(component,event,helper){
        component.set("v.bnum",1);
        component.find("dtag").set("v.body",[]);
    },
    
    removebtn : function(component,event,helper){
    event.getSource().destroy();
}
})