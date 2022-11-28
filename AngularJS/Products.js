
app.controller("shopping_cart", function ($scope, $window) {

    $scope.performance = [
        { locate: "4TLIX Le Van Viet", time1: "10:00 AM", time2: "12:00 PM", time3: "14:00 AM", time4: "16:00 AM" },
        { locate: "4TLIX Quang Trung", time1: "10:00 AM", time2: "12:00 PM", time3: "14:00 AM", time4: "16:00 AM" },
        { locate: "4TLIX Meowga Mall", time1: "10:00 AM", time2: "12:00 PM", time3: "14:00 AM", time4: "16:00 AM" },
        { locate: "4TLIX Nguyen Huu Canh", time1: "10:00 AM", time2: "12:00 PM", time3: "14:00 AM", time4: "16:00 AM" },
        { locate: "4TLIX Vo Chi Cong", time1: "10:00 AM", time2: "12:00 PM", time3: "14:00 AM", time4: "16:00 AM" },
        { locate: "4TLIX Binh Duong", time1: "10:00 AM", time2: "12:00 PM", time3: "14:00 AM", time4: "16:00 AM" }
    ];

    $scope.seats = [
        { seat_id: "a1", seat_id: "a2", seat_id: "a3", seat_id: "a4", seat_id: "a5", seat_id: "a6", seat_id: "a7", seat_id: "a8", seat_id: "a9", seat_id0: "a10", seat_id1: "a11" },
        { seat_id: "b1", seat_id: "b2", seat_id: "b3", seat_id: "b4", seat_id: "b5", seat_id: "b6", seat_id: "b7", seat_id: "b8", seat_id: "b9", seat_id0: "b10", seat_id1: "b11" },
        { seat_id: "c1", seat_id: "c2", seat_id: "c3", seat_id: "c4", seat_id: "c5", seat_id: "c6", seat_id: "c7", seat_id: "c8", seat_id: "c9", seat_id0: "c10", seat_id1: "c11" },
        { seat_id: "d1", seat_id: "d2", seat_id: "d3", seat_id: "d4", seat_id: "d5", seat_id: "d6", seat_id: "d7", seat_id: "d8", seat_id: "d9", seat_id0: "d10", seat_id1: "d11" },
        { seat_id: "e1", seat_id: "e2", seat_id: "e3", seat_id: "e4", seat_id: "e5", seat_id: "e6", seat_id: "e7", seat_id: "e8", seat_id: "e9", seat_id0: "e10", seat_id1: "e11" },
        { seat_id: "f1", seat_id: "f2", seat_id: "f3", seat_id: "f4", seat_id: "f5", seat_id: "f6", seat_id: "f7", seat_id: "f8", seat_id: "f9", seat_id0: "f10", seat_id1: "f11" },
        { seat_id: "g1", seat_id: "g2", seat_id: "g3", seat_id: "g4", seat_id: "g5", seat_id: "g6", seat_id: "g7", seat_id: "g8", seat_id: "g9", seat_id0: "g10", seat_id1: "g11" },
        { seat_id: "h1", seat_id: "h2", seat_id: "h3", seat_id: "h4", seat_id: "h5", seat_id: "h6", seat_id: "h7", seat_id: "h8", seat_id: "h9", seat_id0: "h10", seat_id1: "h11" },
        { seat_id: "i1", seat_id: "i2", seat_id: "i3", seat_id: "i4", seat_id: "i5", seat_id: "i6", seat_id: "i7", seat_id: "i8", seat_id: "i9", seat_id0: "i10", seat_id1: "i11" },

    ];

    $scope.tickets = [
        { id: "v1", type: "Stand-2D", price: 95, qty: 1 },
        { id: "v2", type: "Medium-2D", price: 115, qty: 1 },
        { id: "v3", type: "Vip-2D", price: 135, qty: 1 }
    ];


    $scope.carts = [];

    $scope.addItem = function (newItem) {
        if ($scope.carts.length == 0) {
            // Add the first time
            newItem.qty = 1;
            $scope.carts.push(newItem);
        } else {
            var repeat = false;
            for (var i = 0; i < $scope.carts.length; i++) {
                // Increase qty if item had in cart
                if ($scope.carts[i].id == newItem.id) {
                    $scope.carts[i].qty++;
                    repeat = true;
                }
            }
            if (!repeat) {
                // Add new item if item don't have in cart
                newItem.qty = 1;
                $scope.carts.push(newItem);
            }
        }
        $scope.updatePrice();
    };


    $scope.updatePrice = function () {
        var totalPrice = 0;
        for (var i = 0; i < $scope.carts.length; i++) {
            totalPrice += ($scope.carts[i].qty) * ($scope.carts[i].price);
        }
        $scope.totalPrice = totalPrice;
    };



    $scope.removeItem = function (tickets) {
        if (tickets) {
            $scope.carts.splice($scope.carts.indexOf(tickets), 1);
            $scope.total -= tickets.price;
        }
        $scope.updatePrice();
    }

});