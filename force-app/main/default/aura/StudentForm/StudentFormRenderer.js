({
    afterRender : function(component,helper){
        this.superAfterRender();//consructor chaining
        var sform=component.find("stuform").getElement();
        sform.addEventListener("touchmove",function(tm){
           tm.stopPropagation(); 
        });
    }
})