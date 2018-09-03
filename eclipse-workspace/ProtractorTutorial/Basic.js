/**
First parameter - test suite name
Second parameter - function (function will have all tests (it blocks)
*/
describe('Actions demo',function()
		{
			it('Open Posse website',function(){
				browser.get('http://posse.com');
				element(by.model('userInputQuery')).sendKeys("river");
				browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("London")).perform()
				browser.actions().sendKeys(protractor.Key.ARROW_DOWN)
			    browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function()
			    {
					browser.sleep(3000);
				})
			    
			})
			// code to close browser
			it('close browswer', function() {

				
			})
		})
		
