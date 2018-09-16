/**
First parameter - test suite name
Second parameter - function (function will have all tests (it blocks)
*/
describe('Protractor Alerts steps',function()
{
	it('Open NonAngular js website',function()
	{
		browser.waitForAngularEnabled(false);
		browser.get('http://qaclickacademy.com/practice.php');
		
		element(by.id("confirmbtn")).click();
		browser.switchTo().alert().accept().then(function(){
			browser.sleep(5000);
		});
		
		browser.switchTo().alert().dismiss().then(function(){
			browser.sleep(5000);
		});
	});
	// code to close browser
	it('close browswer', function() {
	});
});
		
