/**
First parameter - test suite name
Second parameter - function (function will have all tests (it blocks)
*/
describe('Protractor Alerts steps',function()
{
	it('Open NonAngular js website',function()
	{
		browser.waitForAngularEnabled(false);
		browser.driver.manage().window().maximize();
		browser.get('http://qaclickacademy.com/practice.php');
		browser.switchTo().frame("courses-iframe");
		element(by.css("a[href*='sign_in']")).getText().then(function(text){
			console.log(text);
		});
	});
	// code to close browser
	it('close browswer', function() {
	});
});
		
