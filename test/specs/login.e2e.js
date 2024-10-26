describe('My Login application - Negative cases, Edge case and Postive cases', () => {

    it('should trigger an error for invalid password length of below 8 chars- Edge case', async () => {
         // Clear the email/contact input field
        const emailOrContactInput = await $("//android.view.ViewGroup[@content-desc=\"Login, Dont have an account? \"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText"); 
        await emailOrContactInput.clearValue();

        // Clear and set value for the password input field
        const passwordInput = await $(`//android.widget.EditText[@text='Password']`);
        await passwordInput.clearValue();
        await passwordInput.setValue("12345");

        // Assert that the error message is visible
        const errorMessage = await $("//android.view.ViewGroup[@content-desc=\"Login, Dont have an account? \"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[4]");
        await expect(errorMessage).toBeDisplayed();

       // Assert that the error message contains the expected text
       const elementText = await errorMessage.getText();
       await expect(elementText).toContain("Password must be at least 8 characters");

       //clear password field
       await passwordInput.clearValue();

   });


        it('should trigger an error for invalid phone number/email format - Negative case', async () => {
            // Clear and set value for the email/contact input field
            const emailOrContactInput = await $("//android.view.ViewGroup[@content-desc=\"Login, Dont have an account? \"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText"); 
            await emailOrContactInput.clearValue();
            await emailOrContactInput.setValue("invalid format");

            // Assert that the error message is visible
            const errorMessage = await $("//android.view.ViewGroup[@content-desc=\"Login, Dont have an account? \"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[4]");
            await expect(errorMessage).toBeDisplayed();

           // Assert that the error message contains the expected text
           const elementText = await errorMessage.getText();
           await expect(elementText).toContain("Please enter a valid email or phone number");

        });

        it('should trigger an error for unregistered phone number/email and invalid password - Negative Case', async () => {
            // Clear and set value for the email/contact input field
            const emailOrContactInput = await $("//android.view.ViewGroup[@content-desc=\"Login, Dont have an account? \"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText"); 
            await emailOrContactInput.clearValue();
            await emailOrContactInput.setValue("unregistered@gmail.com");

            // Set value for the password input field
            const passwordInput = await $(`//android.widget.EditText[@text='Password']`);
            await passwordInput.setValue("Invalid password");

            // Click the login button
            const loginButton = await $("//android.view.ViewGroup[@content-desc=\"Login\"]/android.view.ViewGroup");
            await loginButton.click();

            // Assert that the error message is visible
            const errorMessage = await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[2]");
            await expect(errorMessage).toBeDisplayed();

           // Assert that the error message contains the expected text
           const elementText = await errorMessage.getText();
           await expect(elementText).toContain("Oh Oh! user not found");

            // Close error meassage
            const closeAlert = await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]");
            await closeAlert.click();
            await closeAlert.click();
            
            // Clear email/contact and password input field
            await emailOrContactInput.clearValue();
            await passwordInput.clearValue();
        });

    it('should login with valid credentials - Positive Case', async () => {
           
            // Clear and set value for the email/contact input field
            const emailOrContactInput = await $(`//android.widget.EditText[@text='Email or Phone Number']`); 
            await emailOrContactInput.clearValue();
            await emailOrContactInput.setValue("651562948");

            // Clear and Set value for the password input field
            const passwordInput = await $(`//android.widget.EditText[@text='Password']`);
            await passwordInput.clearValue();
            await passwordInput.setValue("Password@123");

            // Click the login button
            const loginButton = await $("//android.view.ViewGroup[@content-desc=\"Login\"]/android.view.ViewGroup");
            await loginButton.click();

            // Verify successful login by checking a post-login element
            const totalSaved = await $(`android.widget.ImageView`);
            await totalSaved.isDisplayed();

            // Optional: Close the app after test execution
             await driver.terminateApp('com.maealth.oyesavings');
        });
       
    });
    
       
    

