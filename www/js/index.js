var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when('/page1', {
            templateUrl: './page/page1.html',
            controller: 'page1Ctrl'
        })
        .when('/page2', {
            templateUrl: './page/page2.html',
            controller: 'page2Ctrl'
        })
        .when('/page3', {
            templateUrl: './page/page3.html',
            controller: 'page3Ctrl'
        })
        .when('/page4', {
            templateUrl: './page/page4.html',
            controller: 'page4Ctrl'
        })
        .otherwise({
            redirectTo: '/page1'
        });
});
app.controller('indexCtrl', function($http, $rootScope) {});
app.controller('page1Ctrl', function($http, $rootScope) {});
app.controller('page2Ctrl', function($http, $scope) {
    $('.js-signature').jqSignature();
    $http.post('https://wx2.fenglingtime.com/api/test/123').success(function(data) {
        $scope.data = data.data;
    });
    $scope.clearCanvas = function() {
        $('.js-signature').eq(0).jqSignature('clearCanvas');
    }
    $scope.doSave = function() {
        var dataform = new FormData();
        dataform.append('type', "signtest");
        // var sign_img = $('.js-signature').eq(0).jqSignature('getDataURL');
        // dataform.append('sign', dataURLtoFile(sign_img, 'qm'));
        var file = document.getElementById('fileinput').files[0];
        console.log(file);
        dataform.append('sign', file);
        $.ajax({
            // url: 'http://154.8.144.143:8100/test/signimg',
            url: 'https://wx3.fenglingtime.com/test/signimg',
            // url: 'http://127.0.0.1:8100/test/signimg',
            type: 'POST',
            // dataType: 'text',
            data: dataform,
            processData: false,
            contentType: false,
            success: function(data) {
                console.log('-------->已上传');
                $scope.result = data.message + new Date().getSeconds();
            },
            error: function(e) {
                alert(JSON.stringify(e));
            }
        })
    };

    function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }
});
app.controller('page3Ctrl', function($http, $rootScope) {});
app.controller('page4Ctrl', function($http, $rootScope) {});