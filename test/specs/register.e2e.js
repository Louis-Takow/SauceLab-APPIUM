const { expect, browser, $ } = require('@wdio/globals');

describe('My register application', () => {
    it('should Register with valid credentials', async () => {
        // click 'Register' 
        const el1 = await browser.$("//android.view.ViewGroup[@content-desc=\"Register\"]/android.widget.TextView");
        await el1.click();

        // set value to first EditText (Name field)
        const el2 = await browser.$("//android.view.ViewGroup[@content-desc=\"Register, Already have an account ? \"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText");
        await el2.setValue("John Deo");

        // set value to second EditText (Phone number)
        const el3 = await browser.$(`//android.widget.EditText[@text='Phone number']`);
        await el3.setValue("651562948");

        // set value to Password field
        const el4 = await browser.$(`//android.widget.EditText[@text='Password']`);
        await el4.setValue("Password@123");

        // set value to Confirm the password field
        const el5 = await browser.$("//android.view.ViewGroup[@content-desc=\"Register, Already have an account ? \"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[5]/android.widget.EditText");
        await el5.setValue("Password@123");

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
        const el8 = await browser.$('//android.view.ViewGroup[@content-desc=""]/android.widget.TextView');
        await el8.click();

        // Click 'Register' button
        const el9 = await browser.$("//android.view.ViewGroup[@content-desc=\"Register\"]/android.view.ViewGroup");
        await el9.click();

        // Close the app
        // await driver.terminateApp('com.maealth.oyesavings'); // Replace with your app's package name
    });
});


