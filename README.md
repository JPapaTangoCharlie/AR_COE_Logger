## **Description**

Simple Studio Project example showing how to use the COE Custom Logger.   In this simple example the Logger is loaded using OOTB function in combination with short timeout to ensure loading.  Scope of usage for the logger is within 1 view.

## Usage

There are 2 functions that produce output from the custom logger:

1.  $scope.playStarted: Logs a message when the AR sequence play starts.
2.  $scope.selectChanged: Logs a message when the select widget value changes, logs the current value, and checks for a specific value to log a match message.

Launch the experience and change the Dropdown.  Custom message will be written to output:

```plaintext
##### 2024/12/02 08:58:11:14 # - AR_COE_Logger [Home.js] : ($timeout()) Inside of initialization code
```
