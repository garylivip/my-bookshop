sap.ui.define([    
    'sap/ui/core/mvc/Controller'
    // 'sap/f/library'
], function(Controller) {
    'use strict';
    return Controller.extend("fiori20.controller.Detail",{
        onInit: function () {
            this.oOwnerComponent=this.getOwnerComponent();
            this.oRouter=this.oOwnerComponent.getRouter();
            this.oModel=this.oOwnerComponent.getModel();
            this.oRouter.getRoute("master").attachPatternMatched(this._onProductMatched,this);
            this.oRouter.getRoute("detail").attachPatternMatched(this._onProductMatched,this);
            this.oRouter.getRoute("detailDetail").attachPatternMatched(this._onProductMatched, this);
        },
        onSupplierPress:function (oEvent) {
            var supplierPath=oEvent.getSource().getBindingContext("products").getPath();
            var supplier=supplierPath.split("/").slice(-1).pop();
            var oNextUIState;
            // this.oRouter.navTo("detailDetail",{layout:fioriLibrary.LayoutType.ThreeColumnsMidExpanded, supplier:supplier, product: this._product });
            this.oOwnerComponent.getHelper().then(function (oHelper) {
                oNextUIState=oHelper.getNextUIState(2);
                this.oRouter.navTo("detailDetail",{
                    layout: oNextUIState.layout,
                    supplier:supplier,
                    product:this._product
                });
            }.bind(this));
        },
        _onProductMatched: function (oEvent) {
          this._product=oEvent.getParameter("arguments").product||this._product||"0";
          this.getView().bindElement(
              {
                  path:"/ProductCollection/" + this._product,
                  model:"products"
              }
          );
        },
        onEditToggleButtonPress: function () {
            var oObjectPage= this.getView().byId("ObjectPageLayout");
            var bCurrentShowFooterState=oObjectPage.getShowFooter();
            oObjectPage.setShowFooter(!bCurrentShowFooterState);
        },
        handleFullScreen:function () {
            var sNextLayout=this.oModel.getProperty("/actionButtonsInfo/midColumn/fullScreen");
            this.oRouter.navTo("detail",{layout:sNextLayout, product:this._product});
        },
        handleExitFullScreen:function () {
            var sNextLayout=this.oModel.getProperty("/actionButtonsInfo/midColumn/exitFullScreen");
            this.oRouter.navTo("detail",{layout:sNextLayout, product: this._product});
        },
        handleClose:function () {
            var sNextLayout=this.oModel.getProperty("/actionButtonsInfo/midColumn/closeColumn");
            this.oRouter.navTo("master",{layout:sNextLayout})
        },
        onExit:function () {
            this.oRouter.getRoute("master").detachPatternMatched(this._onProductMatched, this);
            this.oRouter.getRoute("detail").detachPatternMatched(this._onProductMatched,this);
        }
    })
});