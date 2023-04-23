({
	doInitHelper : function(component) {
        var action = component.get("c.contatadosList");
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.contatadosList", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
})
