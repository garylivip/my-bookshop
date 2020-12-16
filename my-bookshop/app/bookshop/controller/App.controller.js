sap.ui.define([
    'sap/ui/core/mvc/Controller',
    // https://sapui5.hana.ondemand.com/sdk/#/api/sap.ui.core.mvc.Controller
    'sap/ui/model/json/JSONModel'
    // https://sapui5.hana.ondemand.com/sdk/#/api/sap.ui.model.json.JSONModel
], function(Controller, JSONModel) {
    'use strict';
    return Controller.extend("garyli.bookshop.controller.App",{
        onInit: function () {            
            var oData = {
                recipient : {
                   name : "World"
                }
             };            
            var oModel=new JSONModel(oData);
            this.getView().setModel(oModel);
        }
    })
});