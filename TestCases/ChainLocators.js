/**
 * 
 */

/**
First parameter - test suite name
Second parameter - function (function will have all tests (it blocks)
*/
describe('Protractor baby steps',function()
		{
			
			function Calc(a, b, c){
				element(by.model('first')).sendKeys(a);
				
				element.all(by.tagName("option")).each(function(sub_optins){
			    	sub_optins.getAttribute("value").then(function(values){
			    		console.log(values);
			    		if(values==c){
			    			sub_optins.click();
			    		}
			    	})
			    })
			    element(by.model('second')).sendKeys(b);
			    element(by.id('gobutton')).click();
			}
			
			it('Open Angular js website',function(){
				//browser.waitForAngularEnabled(false);
				//browser.get("http://google.com");
				browser.get('http://juliemr.github.io/protractor-demo/');
				// write yout raw protractor code

				Calc(2, 3, "ADDITION");
				Calc(4, 3, "DIVISION");
				Calc(8, 3, "MODULO");
				Calc(12, 3, "MULTIPLICATION");
				Calc(21, 3, "SUBTRACTION");
			    //expect(element(by.binding('latest')).getText()).toEqual('3'); // This is wrong!
			    
			    //expect(element(by.binding('latest')).getText()).toBe('3'); // This is wrong!
			    
			    //CSS: tagname[attribute='values']
			    
			    /*element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
			    console.log(text);
			    })
			    */
			    
			    element.all(by.repeater("result in memory")).count().then(function(text){
			    console.log("Total de elementos: " + text + "\n");
			    })
			    
			    element.all(by.repeater("result in memory")).each(function(item)
			    	{
			    		item.element(by.css("td:nth-child(3)")).getText().then(function(text){
			    		console.log("Resultados: " + text + "\n");
					})
			    })
			    
			    //element(by.css("h2[class='ng-binding']")).getText().then(function(text){
			    //console.log(text);	
			    //})
			    
			    browser.sleep(3000);
			    				
			})

			it('close browswer', function() {
			// code to close browser
				
			})
		})
		
