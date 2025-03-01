# Mobile Automation Framework Setup

This guide provides a step-by-step setup for a mobile automation testing framework using:

1. **WebdriverIO as a Test Runner**:
   WebdriverIO acts as a test runner and provides a structured way to write, organize, and execute tests for both web and mobile applications.
2. **Appium as an Automation Engine**:
   Appium serves as the underlying automation engine that communicates with mobile devices to perform actions on the app's UI.
3. **Spec Reporter**:
   To give detailed reports after test execution.

**Together for Mobile Testing**:
When combined, WebdriverIO can leverage Appium’s capabilities to automate mobile applications effectively while providing a rich API for test writing and integration with other tools. We’ll configure an Android emulator to run the tests on a specified APK file.

## Prerequisites

1. **Node.js**: Download and install [Node.js](https://nodejs.org/en/).
2. **Java Development Kit (JDK)**: Download and install the JDK. Ensure the JAVA_HOME environment variable is set.
3. **Android Studio**: Download and install [Android Studio](https://developer.android.com/studio), which includes Android SDK tools. Set the Android SDK path as ANDROID_HOME in the environment variable.
4. **VS Code**: Download and install VS Code IDE.
5. **Appium Desktop**: Download and install Appium desktop.
6. **Appium**: Install Appium globally by running on the terminal:
   ```bash
   npm install -g appium
   ```
7. **Appium Doctor**: Install Appium doctor globally by running on the terminal:
   ```bash
   npm install -g appium-doctor
   ```

## Step 1: Initialize the Project

1. Create and navigate to a new project folder:
   ```bash
   mkdir mobile-automation-framework
   cd mobile-automation-framework
   ```
2. **Clone this repository** through the terminal of the new project folder.
   ```bash
   git clone <repository-url>
   cd Webdriver.io---Appium-Mocha
   ```
3. Initialize a Node.js project:
   ```bash
   npm init -y
   ```

## Step 2: Install WebdriverIO and Related Packages

Install WebdriverIO CLI, Appium service, Mocha framework, and Spec reporter:

```bash
npm install @wdio/cli @wdio/appium-service @wdio/mocha-framework @wdio/spec-reporter
```

## Step 3: Configure WebdriverIO

Run the WebdriverIO configuration wizard:

```bash
npx wdio config
```

Follow the configuration prompts as required.

### Example `wdio.conf.js` Configuration

Below is a sample configuration to use WebdriverIO with Appium and Mocha:

```javascript
exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:platformVersion': '11.0',
        'appium:app': 'C:\\Users\\joelt\\Downloads\\Android.SauceLabs.Mobile.Sample.app.2.7.1.apk',
        'appium:automationName': 'UiAutomator2',
    }],
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        timeout: 60000
    }
};
```

### Important Configuration Notes

- To get attached `deviceName`, enter the following command in the terminal:
   ```bash
   adb shell getprop ro.product.model
   ```
- To get `platformVersion`, enter:
   ```bash
   adb shell getprop ro.build.version.release
   ```
- To get `appPackageName` and `appActivity`, enter:
   ```bash
   adb shell dumpsys window | findstr /R "mCurrentFocus"
   ```

## Step 4: Set Up an Android Emulator

1. Open **Android Studio** and navigate to **AVD Manager** from **Tools > Device Manager**.
2. Create a new virtual device:
   - **Phone**: Select a device (e.g., Pixel 4).
   - **System Image**: Choose an image that matches the platform version in your `wdio.conf.js` (e.g., Android 11).
3. Launch the emulator from AVD Manager.

## Step 5: Run Appium Server

- Open `Appium Desktop`.
- Start the server with the default port number.

Appium will listen by default on `http://127.0.0.1:4723`.

## Step 6: Inspect Element Locators with Appium Inspector

- Start `Inspector Session`.
- Setup `desired capabilities` and start the session.

## Step 7: Create/View a Test Script

- Open the project directory with VS Code IDE.
- In the `test/specs` folder, create/view test files (e.g., `smokeTest.e2e.js`).
- Test scripts are written using the `Mocha` framework.

## Step 8: Run Tests

### Smoke Tests
To execute the login tests, use the following command:
```bash
npx wdio run wdio.conf.js --spec test/specs/smokeTest.e2e.js  
```

## Troubleshooting

- **Emulator Connection**: Ensure the emulator is running before starting the test. Use `adb devices` to verify the device is connected.
- **APK Path**: Verify the APK file path is correct in the `wdio.conf.js` file.
- **Appium Service**: Ensure Appium is running on the default port (4723) or update the configuration to match your setup.

## Additional Notes

- To inspect elements on your app, use **Appium Inspector**.

---

This setup provides the foundation for mobile automation testing using WebdriverIO, Appium, and Mocha on an Android emulator. Modify the sample test case and configuration as needed for your specific project requirements.

