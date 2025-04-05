const { expect, browser, $ } = require('@wdio/globals');

describe('My e-commerce application', () => {
    it('should do a smoke test', async () => {
        // launch the app and login
    
        // Clear and set value for the username input field
        const usernameInput = await $("~test-Username"); 
        await usernameInput.clearValue();
        await usernameInput.setValue("standard_user");
    
        // Clear and set value for the password input field
        const passwordInput = await $("~test-Password");
        await passwordInput.clearValue();
        await passwordInput.setValue("secret_sauce");
    
        // Click the login button
        const loginButton = await $("~test-LOGIN");
        await loginButton.click();
        await driver.setTimeout({ implicit: 2000 }); // implicit wait
    
        // Verify successful login by checking a post-login element
        const postLoginElement = await $(`//android.widget.EditText[@text='PRODUCTS']`);
        await postLoginElement.isDisplayed(); 
    
   
            // Step 1: Add first item to cart
            const firstItem = await $("(//android.view.ViewGroup[@content-desc=\"test-ADD TO CART\"])[1]");
            await firstItem.click();
            
            // Step 2: Open and select (low to high) order from modal selector
            const modalSelectorButton = await $("//android.view.ViewGroup[@content-desc=\"test-Modal Selector Button\"]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ImageView");
            await modalSelectorButton.click();
            const itemOption = await $("//android.widget.ScrollView[@content-desc=\"Selector container\"]/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.widget.TextView");
            await itemOption.click();
            
            // Step 3: Add second item to cart
            const secondItem = await $("(//android.view.ViewGroup[@content-desc=\"test-ADD TO CART\"])[2]");
            await secondItem.click();
            
            // Perform touch actions to scroll
            await driver.performActions([{
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: 530, y: 1710 },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pointerMove', duration: 1000, x: 546, y: 655 },
                    { type: 'pointerUp', button: 0 }
                ]
            }]);
            
            await driver.performActions([{
                type: 'pointer',
                id: 'finger2',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: 542, y: 1689 },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pointerMove', duration: 1000, x: 534, y: 517 },
                    { type: 'pointerUp', button: 0 }
                ]
            }]);
            
              await driver.performActions([
                {
                  type: 'pointer',
                  id: 'finger1',
                  parameters: { pointerType: 'touch' },
                  actions: [
                    { type: 'pointerMove', duration: 0, x: 167, y: 1213 }, // Move to coordinates
                    { type: 'pointerDown', button: 0 }, // Press down
                    { type: 'pointerUp', button: 0 } // Release
                  ]
                }
              ]);
        
            // Step 4: Navigate to cart and proceed to checkout
            const cartButton = await $("//android.view.ViewGroup[@content-desc=\"test-Cart\"]/android.view.ViewGroup/android.widget.ImageView");
            await cartButton.click();
            
            await driver.pause(2000); // pause for 2 seconds
            // Perform scroll actions
            await driver.performActions([{
                type: 'pointer',
                id: 'finger3',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: 490, y: 1674 },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pointerMove', duration: 1000, x: 536, y: 677 },
                    { type: 'pointerUp', button: 0 }
                ]
            }]);
            
            // Click on checkout
            const checkoutButton = await $("~test-CHECKOUT");
            await checkoutButton.click();
            
            // Enter checkout inforation details
            await $("~test-First Name").setValue("John");
            await $("~test-Last Name").setValue("Doe");
            await $("~test-Zip/Postal Code").setValue("12345");
            
            // Continue to navigate to checkout overview
            const continueButton = await $("~test-CONTINUE");
            await continueButton.click();
            
            await driver.pause(2000); // pause for 2 seconds
            // Perform scroll actions
            await driver.performActions([{
                type: 'pointer',
                id: 'finger4',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: 550, y: 1593 },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pointerMove', duration: 1000, x: 600, y: 605 },
                    { type: 'pointerUp', button: 0 }
                ]
            }]);
            await driver.performActions([{
                type: 'pointer',
                id: 'finger2',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: 542, y: 1689 },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pointerMove', duration: 1000, x: 534, y: 517 },
                    { type: 'pointerUp', button: 0 }
                ]
            }]);
            
            // Finish checkout
            const finishButton = await $("~test-FINISH");
            await finishButton.click();

            // Verify successful check by checking a post-checkout confirmation element
            const checkoutConfirmationElement = await $(`//android.widget.EditText[@text='THANK YOU FOR YOU ORDER']`);
            await checkoutConfirmationElement.isDisplayed();
            
            // Go back to home
            const backHomeButton = await $("~test-BACK HOME");
            await backHomeButton.click();
            
            // Open menu
            const menuButton = await $("//android.view.ViewGroup[@content-desc=\"test-Menu\"]/android.view.ViewGroup/android.widget.ImageView");
            await menuButton.click();
            
            // Logout by tapping on the logout button by cordinates
            await driver.performActions([
                {
                  type: 'pointer',
                  id: 'finger1',
                  parameters: { pointerType: 'touch' },
                  actions: [
                    { type: 'pointerMove', duration: 0, x: 167, y: 1213 }, // Move to coordinates
                    { type: 'pointerDown', button: 0 }, // Press down
                    { type: 'pointerUp', button: 0 } // Release
                  ]
                }
              ]);
        
          // Optional: Close the app after test execution  after a 3 secs delay
          await driver.pause(3000);  // Keep app open for 3 seconds
          await driver.terminateApp('com.swaglabsmobileapp');
    });      
});


