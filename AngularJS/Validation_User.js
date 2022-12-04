// Angular js
app.controller("checkUser", function ($scope, $window) {
    
    $scope.PaySuccess = true;
    $scope.PayFail = false;
    $scope.pay = function (index) {
        console.log(index)
        if (index.userForm.$valid) {
            // Show notification add success
            $scope.showNotification(true, false);
        } else {
            $scope.showNotification(false, true);
        }
    };

    $scope.showNotification = function (PaySuccess, PayFail) {
        $scope.PaySuccess = PaySuccess;
        $scope.PayFail = PayFail;
        const toastLiveExample = document.getElementById('liveToast');
        const toast = new bootstrap.Toast(toastLiveExample);
        toast.show();
    };

});