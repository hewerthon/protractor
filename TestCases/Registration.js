/**
First parameter - test suite name
Second parameter - function (function will have all tests (it blocks)
*/
describe('Protractor Alerts steps',function(){
	
	it('Open NonAngular js website',function(){
		
		browser.driver.manage().window().maximize();
		browser.get('http://qaclickacademy.github.io/protocommerce/');
		element(by.name("name")).sendKeys("Mystudents");
		element(by.css("input[name='email']")).sendKeys("registration@mailinator.com");
		element(by.id("exampleInputPassword1")).sendKeys("hew@123");
		element(by.css("input[type='checkbox'")).click();
		element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click();
		element.all(by.name("inlineRadioOptions")).first().click();
		element(by.name("bday")).sendKeys("15/02/1990");
		element(by.buttonText("Submit")).click().then(function(){
			element(by.css("div[class*='success']")).getText().then(function(text){
				console.log(text);
			});
		});
		element(by.name("name")).clear();
		element(by.name("name")).sendKeys("M").then(function(){
			element(by.css("[class='alert alert-danger'")).getText().then(function(text){
				console.log(text);
			})
		})
		
	});
	
	// code to close browser
	it('close browswer', function() {
	});
});