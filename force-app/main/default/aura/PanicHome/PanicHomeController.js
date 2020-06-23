({
	clickb1 : function(component, event, helper) {
        helper.resetButtons(component);
		component.find("b1").set("v.variant","brand");
        var card1= component.find("c1").getElement();
        var card2= component.find("c2").getElement();
        $A.util.addClass(card2,"card--off");
        $A.util.removeClass(card1,"card--off");
	},
    clickb2 : function(component, event, helper) {
        helper.resetButtons(component);
		component.find("b2").set("v.variant","brand");
        var card1= component.find("c1").getElement();
        var card2= component.find("c2").getElement();
        $A.util.addClass(card1,"card--off");
        $A.util.removeClass(card2,"card--off");
        
	}
})