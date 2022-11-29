
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
        { seat_id1: "a1", seat_id2: "a2", seat_id3: "a3", seat_id4: "a4", seat_id5: "a5", seat_id6: "a6", seat_id7: "a7", seat_id8: "a8", seat_id9: "a9", seat_id10: "a10" },
        { seat_id1: "b1", seat_id2: "b2", seat_id3: "b3", seat_id4: "b4", seat_id5: "b5", seat_id6: "b6", seat_id7: "b7", seat_id8: "b8", seat_id9: "b9", seat_id10: "b10" },
        { seat_id1: "c1", seat_id2: "c2", seat_id3: "c3", seat_id4: "c4", seat_id5: "c5", seat_id6: "c6", seat_id7: "c7", seat_id8: "c8", seat_id9: "c9", seat_id10: "c10" },
        { seat_id1: "d1", seat_id2: "d2", seat_id3: "d3", seat_id4: "d4", seat_id5: "d5", seat_id6: "d6", seat_id7: "d7", seat_id8: "d8", seat_id9: "d9", seat_id10: "d10" },
        { seat_id1: "e1", seat_id2: "e2", seat_id3: "e3", seat_id4: "e4", seat_id5: "e5", seat_id6: "e6", seat_id7: "e7", seat_id8: "e8", seat_id9: "e9", seat_id10: "e10" },
        { seat_id1: "f1", seat_id2: "f2", seat_id3: "f3", seat_id4: "f4", seat_id5: "f5", seat_id6: "f6", seat_id7: "f7", seat_id8: "f8", seat_id9: "f9", seat_id10: "f10" },
        { seat_id1: "g1", seat_id2: "g2", seat_id3: "g3", seat_id4: "g4", seat_id5: "g5", seat_id6: "g6", seat_id7: "g7", seat_id8: "g8", seat_id9: "g9", seat_id10: "g10" },
        { seat_id1: "h1", seat_id2: "h2", seat_id3: "h3", seat_id4: "h4", seat_id5: "h5", seat_id6: "h6", seat_id7: "h7", seat_id8: "h8", seat_id9: "h9", seat_id10: "h10" },
        { seat_id1: "i1", seat_id2: "i2", seat_id3: "i3", seat_id4: "i4", seat_id5: "i5", seat_id6: "i6", seat_id7: "i7", seat_id8: "i8", seat_id9: "i9", seat_id10: "i10" },

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

    $scope.limitSeat = 0;

    $scope.updatePrice = function () {
        var totalPrice = 0;
        var totalQty = 0;
        for (var i = 0; i < $scope.carts.length; i++) {
            totalPrice += ($scope.carts[i].qty) * ($scope.carts[i].price);
            totalQty += ($scope.carts[i].qty);
        }
        $scope.totalPrice = totalPrice;
        return $scope.limitSeat = totalQty;
    };



    $scope.removeItem = function (tickets) {
        if (tickets) {
            $scope.carts.splice($scope.carts.indexOf(tickets), 1);
            $scope.total -= tickets.price;
        }
        $scope.updatePrice();
    }

    $scope.selected = [];

    $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) {
            list.splice(idx, 1);
        }else {
            list.push(item);
        }

    };

    $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
    };
});