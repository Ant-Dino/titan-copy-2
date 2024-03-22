angular.module('psDashboard').service('DashboardService', function ($http) {
    this.getCurrentUser = function () {
        return $http.get('/user/current').then(function (response) {
            return response.data;
        });
    };
    this.loadBEQExceptions = function () {
        return $http.get('Dashboard/BEQException/').then(function (response) {
            return response.data;
        });
    };
    this.loadTEQExceptions = function () {
        return $http.get('Dashboard/TEQException/').then(function (response) {
            return response.data;
        });
    };
});
angular.module('psDashboard').controller('psDashboardController', ['$scope', '$rootScope', '$interval', 'DashboardService',
function ($scope, $rootScope, $interval, DashboardService) {
    var DashBoardCtrl = this;
    DashboardService.getCurrentUser().then(function (response) {
        $rootScope.$broadcast('getUser', response);
        $scope.activityright = response.ActivityRight;
        $scope.canmanageteq = response.CanManageTEQ;
        $scope.canmanagebeq = response.CanManageBEQ;
        $scope.canmanageaccessreq = response.CanAccessReq;
        DashBoardCtrl.LoadBEQExceptions();
        DashBoardCtrl.LoadTEQExceptions();
    });
    DashBoardCtrl.LoadBEQExceptions = function () {
        DashboardService.loadBEQExceptions().then(function (data) {
            DashBoardCtrl.BEQSummaryList = data;
        });
    };
    DashBoardCtrl.LoadTEQExceptions = function () {
        DashboardService.loadTEQExceptions().then(function (data) {
            DashBoardCtrl.TEQSummaryList = data;
        });
    };
    $interval(function () {
        DashBoardCtrl.LoadTEQExceptions();
    }, 900000);
    $interval(function () {
        DashBoardCtrl.LoadBEQExceptions();
    }, 900000);
}]);
angular.module('psDashboard').controller("TEQLineCtrl", ['$rootScope', '$scope', 'DashboardService', '$interval',
function ($rootScope, $scope, DashboardService, $interval) {
    var teqLnchartCtrl = this;
    $scope.$on('getUser', function (evt, response) {
        $scope.currentuser = response.UserName;
        $scope.activityright = response.ActivityRight;
        teqLnchartCtrl.LoadTEQException();
    });
    teqLnchartCtrl.LoadTEQException = function () {
        DashboardService.loadTEQExceptions().then(function (data) {
            teqLnchartCtrl.GraphData = data.map(item => ({
                labels: item.Hour,
                NewCount: item.NewCount,
                ActiveCount: item.ActiveCount,
                HoldCount: item.HoldCount,
                ArchiveCount: item.ArchiveCount,
                QueueCount: item.QueueCount
            }));
        });
    };
    $interval(function () {
        teqLnchartCtrl.LoadTEQException();
    }, 900000);
}]);
angular.module('psDashboard').controller("BEQLineCtrl", ['$rootScope', '$scope', 'DashboardService', '$interval',
function ($rootScope, $scope, DashboardService, $interval) {
    var LnCtrl = this;
    $scope.$on('getUser', function (evt, response) {
        $scope.currentuser = response.UserName;
        $scope.activityright = response.ActivityRight;
        LnCtrl.LoadException();
    });
    LnCtrl.LoadException = function () {
        DashboardService.loadBEQExceptions().then(function (data) {
            LnCtrl.GraphData = data.map(item => ({
                labels: item.Hour,
                NewCount: item.NewCount,
                ActiveCount: item.ActiveCount,
                HoldCount: item.HoldCount,
                ArchiveCount: item.ArchiveCount,
                QueueCount: item.QueueCount
            }));
        });
    };
    $interval(function () {
        LnCtrl.LoadException();
    }, 900000);
}]);