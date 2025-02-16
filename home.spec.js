// const { By, Builder, WebElementCondition, until } = require('selenium-webdriver');
// const assert = require("assert");

// (async function homeTest() {
// 	let driver;
	
// 	try {
//         driver = await new Builder().forBrowser('chrome').build();
//         // await driver.get('https://admlucid.com/');
//         await driver.get('https://baseuscolombo.lk/');

//         // Fetch the page title
//         let title = await driver.getTitle();
//         console.log('******** Home Page Title ******** ' + title);
        
//         // Corrected assertion for the actual page title
//         assert.strictEqual(title, 'Baseus Official Store Sri Lanka | Baseus Colombo');
//         // assert.equal(title, 'Baseus Official Store Sri Lanka | Baseus Colombo');

//         // Set timeouts and maximize the window
//         await driver.manage().setTimeouts({ implicit: 5000 });
//         await driver.manage().window().maximize();

//         // Get and print the current URL
//         let url = await driver.getCurrentUrl();
//         console.log('******** URL ******** ' + url);

//         // Navigate to the About Us page
//         // await driver.navigate().to('https://admlucid.com/Selenium');
//         await driver.navigate().to('https://baseuscolombo.lk/about-us/');

//         // Locate the page header and assert the text
//         let message = await driver.findElement(By.xpath('//*[@id="about-us"]/h1'));
        
//         // Wait for the element to be visible
//         await driver.wait(until.elementIsEnabled(message), 2000);

//         // Fetch and assert the header text
//         let value = (await message.getText()).trim();
//         // assert.equal('Selenium automation Testing', value);
//         assert.strictEqual(value, 'About Us');  // Adjusted expected text
//         console.log('******** Page Header ******** ' + value);
	
//     } catch (e) {
// 		console.log('Test failed', e)
// 	} finally {
// 		await driver.quit();
// 	}
// }())


// ---


const { By, Builder, until } = require('selenium-webdriver');
const assert = require("assert");

(async function homeTest() {
    let driver;
    try {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
        await driver.manage().setTimeouts({ implicit: 5000 }); // Better timeout

        // Open website
        await driver.get('https://google.com/');

        // Get page title and assert
        let title = await driver.getTitle();
        console.log('✅ Home Page Title:', title);
        assert.strictEqual(title, 'Google');

        // Get and print the current URL
        let url = await driver.getCurrentUrl();
        console.log('✅ Current URL:', url);

        // Navigate to About Us page
        await driver.navigate().to('https://about.google/?utm_source=google-LK&utm_medium=referral&utm_campaign=hp-footer&fg=1');

        // Locate and verify header text
        // let headerLocator = By.xpath('//*[@id="About Us"]/li[2]/a');
        // await driver.wait(until.elementLocated(headerLocator), 5000);
        // let message = await driver.findElement(headerLocator);

        await driver.wait(until.elementIsVisible(message), 5000);
        let value = (await message.getText()).trim();

        // Improved assertion with error message
        assert.strictEqual(value, 'About Us', `❌ Expected 'About Us' but got '${value}'`);
        console.log('✅ Page Header:', value);

    } catch (e) {
        console.error('❌ Test failed:', e);
    } finally {
        if (driver) {
            await driver.quit();
        }
    }
})();
