const { expect, browser, $ } = require('@wdio/globals');

describe('My register application', () => {
    it('should Register with valid credentials', async () => {
        // click 'Register' 
        const registerLink = await $("//android.view.ViewGroup[@content-desc=\"Register\"]/android.widget.TextView");
        await registerLink.click();

        // set value to first EditText (Name field)
        const fullName = await $("//android.view.ViewGroup[@content-desc=\"Register, Already have an account ? \"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText");
        await fullName.setValue("John Deo");

        // set value to second EditText (Phone number)
        const phoneNumber = await $(`//android.widget.EditText[@text='Phone number']`);
        await phoneNumber.setValue("651562948");

        // set value to Password field
        const password = await $(`//android.widget.EditText[@text='Password']`);
        await password.setValue("Password@123");

        // set value to Confirm the password field
        const confirmPassword = await $("//android.view.ViewGroup[@content-desc=\"Register, Already have an account ? \"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[5]/android.widget.EditText");
        await confirmPassword.setValue("Password@123");

        // // Perform touch actions to scroll
        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: 286, y: 1691 },
                { type: 'pointerDown', button: 0 },
                { type: 'pointerMove', duration: 1000, x: 286, y: 1237 },
                { type: 'pointerUp', button: 0 }
            ]
        }]);
    
        // click check box to accept policy terms
        const checkBox = await $('//android.view.ViewGroup[@content-desc=""]/android.widget.TextView');
        await checkBox.click();

        // Click 'Register' button
        const registerButton = await $("//android.view.ViewGroup[@content-desc=\"Register\"]/android.view.ViewGroup");
        await registerButton.click();

        // Close the app
        await driver.terminateApp('com.maealth.oyesavings'); // Replace with your app's package name
    });
});


