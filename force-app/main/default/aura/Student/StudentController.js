({
	choosemenu : function(component, event, helper) {
		var mnu= event.detail.menuItem;
        //alert("You selected..."+mnu.get("v.label"));
       // mnu.set("v.iconName","utility:like");
        if(mnu.get("v.value")==1){
            
            $A.createComponent(
                "c:StudentForm",
                {},
                function(frm){
                    component.find("dform").set("v.body",frm);
                }
            );
        } else if(mnu.get("v.value")==3){
            $A.createComponent(
                "c:SearchQBE",
                {},
                function(frm){
                    component.find("dform").set("v.body",frm);
                }
            );
            
        }
        else if(mnu.get("v.value")==4){
            $A.createComponent(
                "c:QBEDisplay",
                {},
                function(frm){
                    component.find("dform").set("v.body",frm);
                }
            );
            
        }
        else if(mnu.get("v.value")==2){
            $A.createComponent(
                "c:QBEEdit",
                {},
                function(frm){
                    component.find("dform").set("v.body",frm);
                }
            );
            
        }
        else{
            component.find("dform").set("v.body",[]);
        }
	}
})