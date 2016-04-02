(function () {
    var app = angular.module('store-products', [ ]);
    
    app.directive('productTitle', function () {
        return{
            restrict: 'A', //type of Directive (A for attribute)
            templateUrl: 'product-title.html'
        };
    });

    app.directive('productPanels', function () {
        return{
            restrict: 'E',
            templateUrl: 'product-panels.html',
            controller: function () {
                this.tab = 1;
                this.selectTab = function (setTab) {
                    this.tab = setTab;
                }
                this.isSelected = function (checkedTab) {
                    return this.tab === checkedTab;
                }
            },
            controllerAs: 'panel'
        };
    });
})();
