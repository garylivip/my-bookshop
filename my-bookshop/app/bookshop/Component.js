sap.ui.define([
    'sap/ui/core/UIComponent'
    // https://sapui5.hana.ondemand.com/sdk/#/api/sap.ui.core.UIComponent
], function(UIComponent) {
    'use strict';
    return UIComponent.extend("garyli.bookshop.Component",{
        metadata:{
            manifest: "json"
        },
        init: function () {            
            UIComponent.prototype.init.apply(this, arguments);
            this.getRouter().initialize();
        }        
    })
});