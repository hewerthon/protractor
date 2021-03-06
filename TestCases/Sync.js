/**
First parameter - test suite name
Second parameter - function (function will have all tests (it blocks)
*/
describe('Protractor Alerts steps',function(){
	
	it('Open NonAngular js website',function()
	{
		browser.waitForAngularEnabled(false);
		browser.driver.manage().window().maximize();
		browser.get('http://itgeared.com/demo/1506-ajax-loading.html');
		element(by.css("a[href*='loadAjax']")).click();
		
		var EC = protractor.ExpectedConditions;
		browser.wait(EC.invisibilityOf(element(by.id("loader"))),8000);
		
		element(by.id("results")).getText().then(function(text){
			console.log(text);
		});
	});
	// code to close browser
	it('close browswer', function() {
	});
});
		
