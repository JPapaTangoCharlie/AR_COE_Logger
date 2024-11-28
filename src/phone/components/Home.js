// $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Globals
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let logger;
let DEBUG = true;

twx.app.fn.loadResourceScript('Uploaded/jlogger.js');
$timeout(function () {
    logger = new Jlogger("AR_COE_Logger", "Home.js");
    logger.setShowOutput(DEBUG);
    logger.output("Inside of initialization code", "$timeout()");
    //Custom Logger
    //Sample
    // logger.output("Scan is finished, VIN = " + scaninfo, "scanfinshed")
    // logger.output(<message>, <location -OPTIONAl>, <depth -OPTIONAL>)
}, 750);

$scope.playStarted = function(){
    logger.output("AR Sequence Play Started", "playStarted()");    
}

$scope.selectChanged = function(){    
    logger.output("Select Widget Value Changed", "selectChanged()");    
    let val = $scope.view.wdg['select-1'].value;
    logger.output("The current value is: " + val, "selectChanged()", 2)
    if (val === 'l-Creo 3D - Figure4.pvi') {
        logger.output("We have a match", "selectChanged()", 3)        
    }
};