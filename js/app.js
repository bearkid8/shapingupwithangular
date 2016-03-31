(function () {
    var app = angular.module('store', [ ]);

    app.controller('StoreConntroller', function () {
        this.product = gems;
    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: '. . .',
            canPurchase: true,
            soldOut: true
        },
        {
            name: 'Pentagonal Gem',
            price: 2.95,
            description: '. . .',
            canPurchase: true,
            soldOut: true
        }
    ];
})();
