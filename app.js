'use strict';
/**
 * Init all AngularJS components
 */
angular.module('my-app', ['ngRoute', 'toaster'])
    .run(function (toaster, $timeout) {       
        if (window.EventSource) {
            var sse = new EventSource('server-sse.php');
            sse.addEventListener('message', function (e) {
                $timeout(function () {
                    var data = e.data;
                    localStorage.setItem('message', data);
                    console.log('local said: ' + data)
                }, 20000)
                console.log('server said: ' + e.data)
                if (e.data != localStorage.getItem('message')) {
                    toaster.pop('success','Message:' , e.data, 'trustedHtml');
                }
            })
        }
        else {
            alert('SSE not supported by browser');
        }
    })



