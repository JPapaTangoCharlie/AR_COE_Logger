// $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Globals
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Globals:
//   logger: A variable to hold the logger instance.
//   DEBUG: A flag to control debug output.
// Initialization:
//   The custom logger script is loaded using twx.app.fn.loadResourceScript.
//   A $timeout function initializes the logger after 750 milliseconds, sets the debug output, and logs an initialization message.
// Functions:
//   $scope.playStarted: Logs a message when the AR sequence play starts.
//   $scope.selectChanged: Logs a message when the select widget value changes, logs the current value, and checks for a specific value to log a match message.
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Logger instance
let logger;
// Debug mode flag
let DEBUG = true;

// Load the custom logger script
twx.app.fn.loadResourceScript('Uploaded/Logger/jlogger.js');

// Initialize the logger after a timeout
$timeout(function () {
    // Create a new logger instance
    logger = new Jlogger("AR_COE_Logger", "Home.js");
    // Set whether to show output based on the DEBUG flag
    logger.setShowOutput(DEBUG);
    // Log an initialization message
    logger.output("Inside of initialization code", "$timeout()");
    // Custom Logger
    // Sample usage:
    // logger.output("Scan is finished, VIN = " + scaninfo, "scanfinshed")
    // logger.output(<message>, <location -OPTIONAL>, <depth -OPTIONAL>)
}, 750);

// Function to handle the start of AR sequence play
$scope.playStarted = function(){
    // Log that the AR sequence play has started
    logger.output("AR Sequence Play Started", "playStarted()");    
}

// Function to handle changes in the select widget
$scope.selectChanged = function(){    
    // Log that the select widget value has changed
    logger.output("Select Widget Value Changed", "selectChanged()");    
    // Get the current value of the select widget
    let val = $scope.view.wdg['select-1'].value;
    // Log the current value of the select widget
    logger.output("The current value is: " + val, "selectChanged()", 2)
    // Check if the value matches a specific string
    if (val === 'l-Creo 3D - Figure4.pvi') {
        // Log that a match has been found
        logger.output("We have a match", "selectChanged()", 3)        
    }
};