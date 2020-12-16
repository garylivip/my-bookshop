sap.ui.define([
	'garyli/bookshop/controller/BaseController',
	"sap/ui/model/json/JSONModel",
], function(BaseController, JSONModel) {
    'use strict';
    return BaseController.extend("garyli.bookshop.controller.Home",{
        onInit:function () {
			var oRouter=this.getRouter();
			this.sTest="this is a test";
			oRouter.getRoute("book").attachMatched(this._onRouteMatched, this);
			

			var oModel= new JSONModel({
				firstName: this.sTest,
				lastName:"Li",
				enabled:true,
				panelHeaderText:"Data Binding Two Way",
				greetingText:"Hi, my name is Gary Li",
	   
			}); 
			
			// oModel.setDefaultBindingMode(BindingMode.OneWay);
			
			this.getView().setModel(oModel,"DB1");

        },
        _onRouteMatched : function (oEvent) {
			var oArgs, oView;
			this.sTest="this is a test - sub class";
			oArgs = oEvent.getParameter("arguments");
			oView = this.getView();

			var oModel= new JSONModel({
				firstName: oArgs.bookId,
				lastName: "productCatalog/Books(" + oArgs.bookId + ")",
				enabled:true
			});

			oView.setModel(oModel,"DB2");
            // this.byId("rating").reset();
            // this.getView().bindElement({
            //     path:"/"+window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
            //     model:"invoice"
            // });

			oView.bindElement({				   
				path : "productCatalog>/Books(" + oArgs.bookId + ")",
				// path:"productCatalog>/Books(101)"				,
				events : {
					// change: this._onBindingChange.bind(this),
					dataRequested: function (oEvent) {
						oView.setBusy(true);
					},
					dataReceived: function (oEvent) {
						oView.setBusy(false);
					}
				}
			});
		}   ,
		_onBindingChange : function (oEvent) {
			// No data for the binding
			if (!this.getView().getBindingContext()) {
				this.getRouter().getTargets().display("notFound");
			}
		}     
    })

});