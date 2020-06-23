({
	resetButtons : function(component) {
		var btns =component.get("v.blist");
        for(var i=0;i<btns.length;i++){
            component.find(btns[i]).set("v.variant","neutral");
        }
	}
})