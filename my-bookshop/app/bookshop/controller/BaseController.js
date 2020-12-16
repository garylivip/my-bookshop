sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/core/UIComponent'
], function(Controller, UIComponent) {
    'use strict';
    return Controller.extend("garyli.bookshop.controller.BaseController",{
        getRouter:function () {
            return UIComponent.getRouterFor(this);
        }
    })
});