sap.ui.define([
    'garyli/bookshop/controller/BaseController'
], function(BaseController) {
    'use strict';
    BaseController.extend("garyli.bookshop.controller.Home",{
		onInit : function () {
			// var oMessageManager = sap.ui.getCore().getMessageManager(),
			// 	oMessageModel = oMessageManager.getMessageModel(),
			// 	oMessageModelBinding = oMessageModel.bindList("/", undefined, [],
			// 		new Filter("technical", FilterOperator.EQ, true)),
			// var	oViewModel = new JSONModel({
			// 		busy : false,
			// 		hasUIChanges : false,
			// 		usernameEmpty : true,
			// 		order : 0
			// 	});
			// this.getView().setModel(oViewModel, "appView");
			// this.getView().setModel(oMessageModel, "message");

			// oMessageModelBinding.attachChange(this.onMessageBindingChange, this);
			// this._bTechnicalErrors = false;
		},       
        onListItemPressed: function (oEvent) {
			var oItem, oCtx;

            oItem = oEvent.getSource();
            oCtx = oItem.getBindingContext("productCatalog");          
			this.getRouter().navTo("book",{
                bookId : oCtx.getProperty("ID")
                
			});

        },
        onAdd:function () {
            var oList, oBinding;
            oList=this.byId("employeeTable");
            oBinding=oList.getBinding("items");
            oBinding.create({
                "ID":"1000",
                "title":"Best Sell",
                "description":"",
                "author_name":"",
                "author_dateOfBirth":""
            });
            
        },
        onSave:function () {
            
			// var fnSuccess = function () {
			// 	this._setBusy(false);
			// 	MessageToast.show(this._getText("changesSentMessage"));
			// 	this._setUIChanges(false);
			// }.bind(this);

			// var fnError = function (oError) {
			// 	this._setBusy(false);
			// 	this._setUIChanges(false);
			// 	MessageBox.error(oError.message);
			// }.bind(this);

			// this._setBusy(true); // Lock UI until submitBatch is resolved.
			this.getView().getModel("productCatalog").submitBatch("peopleGroup").then(fnSuccess, fnError);
			// this._bTechnicalErrors = false; // If there were technical errors, a new save resets them.
        }
    })

});