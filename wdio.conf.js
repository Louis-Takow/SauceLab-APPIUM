exports.config = {
    runner: 'local',
    port: 4723,  // Default Appium port
    specs: ['./test/specs/**/*.js'],
    capabilities: [{
        platformName: 'Android',
       'appium:platformVersion': '11.0',  // Replace with the Android version of your emulator
       'appium:deviceName': 'emulator-5554',  // Match the ID from adb devices
       'appium:app': 'C:\\Users\\joelt\\Downloads\\Nkwa.apk',  // Path to your APK file
       'appium:automationName': 'UiAutomator2',
        'appium:noReset': true,
    }],
    services: ['appium'],
    framework: 'mocha',
    reporters: [['spec', {
        symbols: { passed: '[PASS]', failed: '[FAIL]' },
    }]],
    mochaOpts: {
        timeout: 110000 // Set the timeout to 110 seconds
    }
};
